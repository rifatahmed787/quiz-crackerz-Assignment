import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
const [statistics, setStatistics]=useState([]);

useEffect(()=>{
    axios.get('https://openapi.programming-hero.com/api/quiz')
    .then(data=>{
        const dataLoded=(data.data.data);
        const chart=dataLoded.map(data=>{
            const singleChart={
                name:data.name,
                total:data.total
            }
            return singleChart;
        })
        setStatistics(chart)
    })
},[])



    return (
        <div className='flex justify-center  mt-40'>
          <LineChart width={400} height={200} data={statistics}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                
                <Line type="monotone" dataKey="total" stroke="#2ee22b" />
            </LineChart>
        </div>
    );
};

export default Statistics;
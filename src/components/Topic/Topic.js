import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topic = ({topic}) => {
    // console.log(topic)
    const {logo, name}=topic;
        
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate(`/topic/${topic.id}`);
    }

    return (
    <div className="card w-60 h-80 bg-gray-200 shadow-xl">
        <figure><img src={logo} alt="/" /></figure>
        <h2 className="card-title mx-auto">{name}</h2>
         <button onClick={handleNavigate} className='btn-primary mx-10 mt-5 border rounded-lg'>Start Quiz</button>
    </div>
    );
};

export default Topic;
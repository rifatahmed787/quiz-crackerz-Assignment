import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz=useLoaderData();
    console.log(quiz)
    return (
        <div>
            
        </div>
    );
};

export default Quiz;
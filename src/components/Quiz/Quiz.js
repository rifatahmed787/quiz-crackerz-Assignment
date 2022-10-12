import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quiz= useLoaderData();
    // console.log(quiz.data)
    return (
        <div>
            <h1 className='font-bold text-2xl my-10 text-amber-300'>{quiz.data.name} Quiz</h1>
           {
            quiz.data.questions.map(question=><QuizDetails
            key={question.id}
            quiz={question}
            ></QuizDetails>)
           }
        </div>
    );
};

export default Quiz;
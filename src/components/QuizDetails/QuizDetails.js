import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const QuizDetails = ({quiz}) => {
    // console.log(quiz)
    const {question, options, correctAnswer}=quiz;
    const showAnswer=()=>{
       
    }
   
    return (
        <div>         
           <div className="card card-compact w-3/5 shadow-xl mt-20 mx-auto bg-slate-100">
            <button onClick={showAnswer}  className='flex justify-end text-2xl mr-3 mt-3'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
           <h1 className='m-5 text-lg'>Q. {question.replace( /(<([^>]+)>)/ig, '')}</h1>
           {options.map(option=><p className='text-lg ml-5 border rounded-md mt-5 p-5 '><input type="radio" name="radio-4" className="radio radio-accent radio-sm mr-3" checked />{option}</p>)}
           </div>
        </div>
    );
};

export default QuizDetails;
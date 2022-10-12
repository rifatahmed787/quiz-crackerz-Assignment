import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const QuizDetails = ({quiz}) => {
    // console.log(quiz)
    const {question, options, correctAnswer}=quiz;

    const showCorrectAnswer=()=>{
        alert(correctAnswer)
     }

    const optionClicked=(option)=>{
    //    console.log(option)
        if(option===correctAnswer){
            alert('correct')
        }else{
            alert('wrong')
        }
    }
   
    return (
        <div>         
           <div className="card card-compact w-3/5 shadow-xl mt-20 mx-auto bg-slate-100">
            <button onClick={showCorrectAnswer} className='flex justify-end text-2xl mr-3 mt-3'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
           <h1 className='m-5 text-lg'>Q. {question.replace( /(<([^>]+)>)/ig, '')}</h1>
           {/* {options.map(option=><p className='text-lg ml-5 border rounded-md mt-5 p-5 '>
           <input onClick={()=>optionClicked(option.isCorrect)} type="radio" name="radio-4" className="radio radio-accent radio-sm mr-3" checked />{option}</p>)} */}
           <div className=' p-10'>
            <button onClick={()=>optionClicked(options[0])} className='flex mx-auto  border rounded-lg p-5 mt-5'><small>{options[0]}</small></button>
            <button onClick={()=>optionClicked(options[1])} className='flex mx-auto  border rounded-lg p-5 mt-5'><small>{options[1]}</small></button>
            <button onClick={()=>optionClicked(options[2])} className='flex mx-auto  border rounded-lg p-5 mt-5'><small>{options[2]}</small></button>
            <button onClick={()=>optionClicked(options[3])} className='flex mx-auto  border rounded-lg p-5 mt-5'><small>{options[3]}</small></button>
           </div>
           </div>

        </div>
    );
};

export default QuizDetails;
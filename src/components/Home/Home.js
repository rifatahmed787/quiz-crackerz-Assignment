import React from 'react';
import Lottie from "lottie-react";
import quiz from '../assets/quiz.json'

const Home = () => {
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
      <div className='flex flex-col items-center justify-between lg:flex-row'>
        <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6 lg:mt-8'>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
            A quiz is a form of game or mind <span className='inline-block text-blue-400 font-bold'>Sport</span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
            Quiz, a contest in which participants test what they know by answering questions on one or more topics.
            So you can test your knowledge of programming language by playing an interesting quiz game. Some quiz topics are given bellow-
            </p>
          </div>
          <div className='flex flex-col items-center md:flex-row'>
            <a
              href='/about'
              aria-label=''
              className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'
            >
              Learn More
            </a>
          </div>
        </div>
        <div className='relative lg:w-1/2 '>
          <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
            <Lottie animationData={quiz} loop={true} />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Home;
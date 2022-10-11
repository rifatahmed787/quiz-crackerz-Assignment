import React from 'react';

const Blog = () => {
    return (
        <div className="flex items-center justify-center h-screen mt-6">
            <div className="bg-white">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 mb-8 text-gray-600">
                        React Interview Questions And Answers
                    </p>
                    <div className="space-y-4">
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                                What is the purpose of react router?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            React Router is a state container for the current location , or URL.
                            ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application.
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                                How does context api work?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around.
                            Context api provides a way to pass data through the component tree without having to pass props down manually at every level.
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                               What is the purpose of using useRef hook?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            The useRef Hook allows you to persist values between renders.It can be used to access a DOM element directly.
                            If we tried to count how many times our application renders using the useState Hook,
                             we would be caught in an infinite loop since this Hook itself causes a re-render.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
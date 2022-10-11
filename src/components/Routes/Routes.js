import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Quiz from "../Quiz/Quiz";
import ShowError from "../ShowError/ShowError";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement: <ShowError></ShowError>,
        children:[
           {
            path:'/',
            element:<Home></Home>,
           },
           {
             path:'/home',
             loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
             element:<Home></Home>
           },
           {
            path:'/topic/:topicId',
            loader: async({params})=>{
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
            }, 
            element:<Quiz></Quiz>
           },
           {
            path:'/blog',
            element:<Blog></Blog>
           }
        ]
    }
]);
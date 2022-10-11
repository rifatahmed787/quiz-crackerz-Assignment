import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Main from "../Main/Main";
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
            path:'/blog',
            element:<Blog></Blog>
           }
        ]
    }
]);
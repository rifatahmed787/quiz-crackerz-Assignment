import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ShowError from "../ShowError/ShowError";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement: <ShowError></ShowError>,
        children:[

        ]
    }
]);
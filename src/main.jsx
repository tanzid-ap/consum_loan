import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import ErrorPage from "./error-page";
import './index.css'



const data = createBrowserRouter([
    {
        path: "/",
        element: <App  />,
        errorElement: <ErrorPage />
    },
]);

function router(){

    const data = createBrowserRouter([
        {
            path: "/",
            element: <App  />,
            errorElement: <ErrorPage />
        },
    ]);

    return(
        data
    );
    
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={data} />
    </React.StrictMode>,
)

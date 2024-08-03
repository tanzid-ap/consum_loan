import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import App from './App.jsx'
import ErrorPage from "./error-page";
import './index.css'



// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App  />,
//         errorElement: <ErrorPage />,
//         // children: [
//         //     {
//         //         path: '/home',
//         //         element: <Outlet />,
//         //         children: [
//         //             {   
//         //                 index: true,
//         //                 element: <Home />
//         //             },
//         //             {
//         //                 path: '/home/minis',
//         //                 element: <Minis/>
//         //             }
//         //         ]
//         //     },
//         //     {
//         //         path: '/projects',
//         //         element: <Projects />,
//         //         errorElement: <ErrorPage />,
//         //     },
//         //     {
//         //         path: '/certificates',
//         //         element: <Certificates />,
//         //     },
//         //     {
//         //         path: '/skills',
//         //         element: <Skills />,
//         //     },
//         //     {
//         //         path: '/contact',
//         //         element: <Contact />,
//         //     },
//         // ],
//     },
// ]);



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)

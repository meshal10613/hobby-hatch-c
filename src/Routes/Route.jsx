import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layout/HomeLayout';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <Signup/>
    },
]);
import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layout/HomeLayout';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import PrivetRoute from '../Provider/PrivetRoute';
import CreateGroup from '../Pages/CreateGroup';
import MyGroups from '../Pages/MyGroups';
import AllGroups from '../Pages/AllGroups';
import GroupDetails from '../Pages/GroupDetails';
import UpdateGroup from '../Pages/UpdateGroup';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/allGroups",
                loader: () => fetch("http://localhost:3000/hobbies"),
                element: <AllGroups></AllGroups>
            },
            {
                path: "/allGroups/:id",
                loader: ({params}) => fetch(`http://localhost:3000/hobbies/${params.id}`),
                element: <GroupDetails/>
            },
            {
                path: "/createGroup",
                element: <PrivetRoute><CreateGroup></CreateGroup></PrivetRoute>
            },
            {
                path: "/myGroups",
                element: <PrivetRoute><MyGroups></MyGroups></PrivetRoute>
            },
            {
                path: "/updateGroup/:id",
                loader: ({params}) => fetch(`http://localhost:3000/hobbies/${params.id}`),
                element: <PrivetRoute><UpdateGroup></UpdateGroup></PrivetRoute>,
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
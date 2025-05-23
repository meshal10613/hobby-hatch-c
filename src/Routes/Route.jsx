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
import Loading from '../Pages/Loading';

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
                hydrateFallbackElement: <Loading/>,
                loader: () => fetch("https://assignment-10-server-xi-fawn.vercel.app/hobbies"),
                element: <AllGroups></AllGroups>
            },
            {
                path: "/allGroups/:id",
                hydrateFallbackElement: <Loading/>,
                loader: ({params}) => fetch(`https://assignment-10-server-xi-fawn.vercel.app/hobbies/${params.id}`),
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
                hydrateFallbackElement: <Loading/>,
                loader: ({params}) => fetch(`https://assignment-10-server-xi-fawn.vercel.app/hobbies/${params.id}`),
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
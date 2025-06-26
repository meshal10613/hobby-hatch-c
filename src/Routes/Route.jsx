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
import AboutUs from '../Pages/Basic/AboutUs';
import Support from '../Pages/Basic/Support';
import Contact from '../Pages/Basic/Contact';
import DashboardLayout from '../Layout/DashboardLayout';
import DashboardHome from '../Pages/Dashboard/DashboardHome';
import MyProfile from '../Pages/Dashboard/MyProfile';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                hydrateFallbackElement: <Loading/>,
                loader: () => fetch("https://assignment-10-server-xi-fawn.vercel.app/hobbies?hobby=hobby"),
                element: <Home/>
            },
            {
                path: "/about-us",
                element: <AboutUs/>
            },
            {
                path: "/support",
                element: <Support/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/allGroups",
                element: <AllGroups></AllGroups>
            },
            {
                path: "/allGroups/:id",
                hydrateFallbackElement: <Loading/>,
                loader: ({params}) => fetch(`https://assignment-10-server-xi-fawn.vercel.app/hobbies/${params.id}`),
                element: <GroupDetails/>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivetRoute><DashboardLayout/></PrivetRoute>,
        children: [
            {
                path: 'home',
                element: <DashboardHome/>
            },
            {
                path: "my-profile",
                element: <MyProfile/>
            },
            {
                path: "createGroup",
                element: <PrivetRoute><CreateGroup></CreateGroup></PrivetRoute>
            },
            {
                path: "myGroups",
                element: <PrivetRoute><MyGroups></MyGroups></PrivetRoute>
            },
            {
                path: "updateGroup/:id",
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
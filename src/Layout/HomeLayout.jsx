import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default HomeLayout;
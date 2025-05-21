import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div className='text-accent'>
            <div className='w-11/12 md:w-10/12 mx-auto'>
                <Navbar/>
                <div className='min-h-[calc(100vh-390px)]'>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default HomeLayout;
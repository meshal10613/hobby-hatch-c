import React from 'react';
import { Link, useRouteError } from 'react-router';
import errorImg from '../assets/error.png'

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div className='w-11/12 md:w-10/12 mx-auto'>
                <div className='w-fit mx-auto h-fit flex flex-col items-center justify-center gap-3 mt-12'>
                        <img src={errorImg} alt=""/>
                    <h2 className='text-xl'>{error.error.message}</h2>
                    <Link to="/" className='btn bg-primary text-secondary border-none'>Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
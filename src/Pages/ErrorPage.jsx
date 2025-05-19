import React from 'react';
import Navbar from '../Components/Navbar';

const ErrorPage = () => {
    return (
        <div>
            <div className='w-11/12 md:w-10/12 mx-auto'>
                <Navbar/>
                <div>
                    <h2>Error</h2>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
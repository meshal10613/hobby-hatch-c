import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full bg-secondary text-primary dark:bg-primary dark:text-secondary py-20">
                <div className='space-y-5 flex flex-col items-center md:items-start justify-center px-16 md:pl-32 md:py-20'>
                    <h2 className='text-3xl md:text-4xl font-bold relative'>Get 20% Off On Prome Code <span className='animate-bounce absolute ml-3'>ENJOY</span></h2>
                    <p>Easily create and manage a local group. Host meetups, post updates, and grow your tribe.</p>
                    <Link to="/" className='btn bg-primary text-secondary flex gap-1 w-fit'>Apply</Link>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full bg-secondary text-primary py-20 dark:bg-primary dark:text-secondary">
                <div className='space-y-5 flex flex-col items-center md:items-start justify-center px-16 md:pl-32 md:py-20'>
                    <h2 className='text-4xl font-bold'>Turn Your Hobby into a Hub.</h2>
                    <p>Easily create and manage a local group. Host meetups, post updates, and grow your tribe.</p>
                    <Link to="/createGroup" className='btn bg-primary text-secondary flex items-center justify-center gap-1 w-fit'><span>Create a Group</span> <FaArrowRight /></Link>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full text-primary bg-secondary py-20 dark:bg-primary dark:text-secondary">
                <div className='space-y-5 flex flex-col items-center md:items-start justify-center px-16 md:pl-32 md:py-20'>
                    <h2 className='text-4xl font-bold'>Never Miss an Event Again</h2>
                    <p>Subscribe here for upcoming events & discounts</p>
                    <Link to="/" className='btn bg-primary text-secondary flex gap-1 w-fit'>Subscribe</Link>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
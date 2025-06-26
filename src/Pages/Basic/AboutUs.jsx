import React from 'react';
import aboutUs from '../../assets/about-us.png'

const AboutUs = () => {
    return (
        <div className='flex flex-col md:flex-row items-start'>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-primary text-center">About HobbyHatch</h1>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 text-justify">
                    Welcome to <strong>HobbyHatch</strong> – your gateway to discovering and exploring exciting hobbies! Whether you're passionate about painting, gardening, gaming, or anything in between, our mission is to help you connect with like-minded individuals and communities.
                </p>
                <p className="text-gray-700 text-base sm:text-lg text-justify">
                    At HobbyHatch, we believe that hobbies bring joy, creativity, and connection. We provide a platform to join or create groups, share your progress, and attend events near you.
                </p>
            </div>
            <div>
                <img src={aboutUs} alt="" className='w-fit'/>
            </div>
        </div>
    );
};

export default AboutUs;


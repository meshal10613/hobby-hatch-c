import React from 'react';

const GettingStarted = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
                Getting Started
                </h2>
                <p className="text-base text-gray-700 md:text-lg text-center">
                Find, Join, and Enjoy Your Hobbies—Step by Step
                </p>
            </div>
            <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
                <div className="sm:text-center">
                <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
                    1
                </div>
                    <h6 className="mb-2 font-semibold leading-5">Create Your Profile</h6>
                    <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        Sign up and tell us what hobbies you love or want to try.
                    </p>
                </div>
                <div className="sm:text-center">
                <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
                    2
                </div>
                    <h6 className="mb-2 font-semibold leading-5">Discover Local Groups</h6>
                    <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        Explore hobby groups near you or find virtual communities that match your interests.
                    </p>
                </div>
                <div className="sm:text-center">
                <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
                    3
                </div>
                    <h6 className="mb-2 font-semibold leading-5">Start Your Own Group</h6>
                    <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        Can’t find the right fit? Start a group and invite others to join.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GettingStarted;
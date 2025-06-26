import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const WeHave = () => {
    const hobbies = useLoaderData();
    const {setSearch} = use(AuthContext);
    const navigate = useNavigate();

    const handleHobbyCategory = (hobby) => {
        navigate("/allGroups");
        setSearch(hobby);
    };

    return (
        <div>
            <h2 className='text-3xl md:text-4xl font-bold my-8 text-center'>Hobbies Group Has Created</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5'>
                {
                    hobbies.map((h, index) => 
                    <div onClick={() => handleHobbyCategory(h.hobby)} key={index} className='bg-secondary rounded-md hover:shadow-2xl cursor-pointer'>
                        <h2 className='text-center text-2xl flex items-center justify-center py-3'>{h.hobby}</h2>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default WeHave;
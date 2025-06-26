import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from './Loading';
import { Link, useLoaderData } from 'react-router';

const AllGroups = () => {
    const intData = useLoaderData();
    // const [allData, setAllData] = useState(intData);
    const [pageLoad, setPageLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setPageLoad(false), 500); // simulate delay
        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            {
                pageLoad 
                    ?   <Loading/>
                    :   <div>
                            {
                                intData.map((data, index) => 
                                <div key={index} className='border-2 border-gray-400 rounded-2xl mb-5 flex justify-between items-center px-1 md:px-5'>
                                    <div className='flex gap-1 md:gap-5 items-center justify-baseline py-3'>
                                        <img src={data?.image} alt="" className='w-20 h-20 rounded-2xl'/>
                                        <div>
                                            <h2 className='font-bold text-2xl'>{data?.groupName}</h2>
                                            <p>{data?.username}</p>
                                            <p>{data?.email}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link to={`/allGroups/${data?._id}`} className='btn bg-primary text-secondary border-none'>See More</Link>
                                    </div>
                                </div>)
                            }
                        </div>
            }
        </div>
    );
};

export default AllGroups;
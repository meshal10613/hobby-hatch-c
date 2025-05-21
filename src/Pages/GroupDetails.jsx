import React, { useEffect, useState } from 'react';
import { isFuture, isToday } from "date-fns";
import { Link, useLoaderData } from 'react-router';
import { FaExclamationTriangle } from "react-icons/fa";


const GroupDetails = () => {
    const data = useLoaderData();
    const [checkToday, setCheckToday] = useState(false);
    useEffect(() => {
        if(isToday((data?.date), "yyyy-MM-dd")){
            setCheckToday(true);
        }else if(isFuture((data?.date), "yyyy-MM-dd")){
            setCheckToday(true);
        }else{
            setCheckToday(false);
        }
    }, [data]);
    return (
        <div className='border-2 border-gray-400 rounded-2xl p-3 md:p-10 max-w-4xl mx-auto'>
            <div className='flex flex-col md:flex-row items-center gap-10 mb-5'>
                <div className='border border-gray-400 rounded-2xl'>
                    <img src={data?.image} alt="" className='w-80'/>
                </div>
                <div className='space-y-3'>
                    <h2 className='text-3xl font-semibold'>Group Name: {data?.groupName}</h2>
                    <p className='text-xs'>Created by: {data?.username}</p>
                    <p className='text-xl'>Location: {data?.location}</p>
                    <p className='text-xl'>Hobby: {data?.hobby}</p>
                    <p className='text-xl'>Members: {data?.members}</p>
                    <p className='text-xl'>Date: {data?.date}</p>
                    <p className='text-xl'>Description: {data?.description}</p>
                </div>
            </div>
            <div>
                {
                    checkToday
                    ?   <Link
                    className={`btn btn-block bg-primary text-secondary transition-all hover:text-primary hover:bg-secondary  dark:bg-secondary dark:text-accent hover:dark:bg-accent hover:dark:text-secondary`} >Join Group</Link>
                    :   <p className='flex items-center justify-center gap-2 text-red-600 cursor-not-allowed'><FaExclamationTriangle />Sorry! The group is no longer active now</p>
                }
            </div>
        </div>
    );
};

export default GroupDetails;
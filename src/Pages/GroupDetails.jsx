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
        // <div className='bg-secondary rounded-2xl p-3 md:p-10 max-w-4xl mx-auto mb-5'>
        //     <div className='flex flex-col md:flex-row items-center gap-10 mb-5'>
        //         <div className=''>
        //             <img src={data?.image} alt="" className='w-80 rounded-2xl'/>
        //         </div>
        //         <div className='space-y-3'>
        //             <h2 className='text-3xl font-semibold'>Group Name: {data?.groupName}</h2>
        //             <p className='text-xs'>Created by: {data?.username}</p>
        //             <p className='text-xl'>Location: {data?.location}</p>
        //             <p className='text-xl'>Hobby: {data?.hobby}</p>
        //             <p className='text-xl'>Members: {data?.members}</p>
        //             <p className='text-xl'>Date: {data?.date}</p>
        //             <p className='text-xl'>Description: {data?.description}</p>
        //         </div>
        //     </div>
        //     <div>
        //         {
        //             checkToday
        //             ?   <Link
        //             className='btn bg-primary text-secondary border-none btn-block' >Join Group</Link>
        //             :   <p className='flex items-center justify-center gap-2 text-red-600 cursor-not-allowed'><FaExclamationTriangle />Sorry! The group is no longer active now</p>
        //         }
        //     </div>
        // </div>
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-base-100 shadow-xl rounded-xl overflow-hidden md:flex">
                {/* Image */}
                <div className="md:w-1/2">
                <img src={data.image} alt={data.groupName} className="w-full h-64 object-cover md:h-full" />
                </div>

                {/* Details */}
                <div className="md:w-1/2 p-6 space-y-4">
                <h2 className="text-2xl font-bold text-primary">{data.groupName}</h2>

                <p className="text-base-content"><span className="font-semibold">Email:</span> {data?.username}</p>
                <p className="text-base-content"><span className="font-semibold">Location:</span> {data.location}</p>
                <p className="text-base-content"><span className="font-semibold">Hobby:</span> {data.hobby}</p>
                <p className="text-base-content"><span className="font-semibold">Members:</span> {data.members}</p>
                <p className="text-base-content"><span className="font-semibold">Date:</span> {data.date}</p>

                <p className="text-base-content"><span className="font-semibold">Description:</span> {data.description}</p>
                {
                    checkToday
                    ?   <Link
                    className='btn bg-primary text-secondary border-none btn-block' >Join Group</Link>
                    :   <p className='flex items-center justify-center gap-2 text-red-600 cursor-not-allowed'><FaExclamationTriangle />Sorry! The group is no longer active now</p>
                }
                </div>
            </div>
        </div>
    );
};

export default GroupDetails;
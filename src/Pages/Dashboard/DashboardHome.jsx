import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyGroups from '../MyGroups';
import { FaLayerGroup } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const DashboardHome = () => {
    const {user} = use(AuthContext);
    const hobbyCat = useLoaderData();
    const [userData, setUserData] = useState([]);
    const [userCount, setUserCount] = useState([]);
    const [groupCount, setGroupCount] = useState([]);

    useEffect(() => {
        fetch("https://assignment-10-server-xi-fawn.vercel.app/userCount?userCount=userCount")
        .then(res => res.json())
        .then(data => setUserCount(data));
    }, [userCount]);

    useEffect(() => {
        fetch("https://assignment-10-server-xi-fawn.vercel.app/userCount?groupCount=groupCount")
        .then(res => res.json())
        .then(data => setGroupCount(data));
    }, [groupCount]);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:p-5">
                {/* Welcome Card */}
                <div className="p-6 rounded-2xl bg-secondary mx-5 md:mx-0">
                    <div>
                        <h2 className="text-xl font-bold">Welcome {user?.displayName}</h2>
                        <p className="text-sm mb-4">Check all the statistics</p>
                        <div className="flex items-center justify-around gap-2 text-center text-white">
                            <div className=''>
                                <p className="text-2xl font-bold">{userData.length}</p>
                                <p className="text-xs">Groups I Create</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 1: Sales */}
                <div className="p-5 rounded-2xl bg-secondary mx-5 md:mx-0">
                    <div className="flex flex-col gap-3 items-center justify-between mb-2">
                        <div className=" p-2 rounded-full">
                            📊
                        </div>
                            <p className="text-xl font-bold">{hobbyCat.length}</p>
                        <p className="text-sm ">Total Hobbies</p>
                    </div>
                </div>

                {/* Card 2: Refunds */}
                <div className="p-5 rounded-2xl bg-secondary mx-5 md:mx-0">
                    <div className="flex flex-col gap-3 items-center justify-between mb-2">
                        <div className=" p-2 rounded-full">
                            ♻️
                        </div>
                        <p className="text-xl font-bold">{userCount}</p>
                        <p className="text-sm ">Total User</p>
                    </div>
                </div>

                {/* Card 3: Earnings */}
                <div className="p-5 rounded-2xl bg-secondary mx-5 md:mx-0">
                    <div className="flex flex-col gap-3 items-center justify-between mb-2">
                        <div className="bg-teal-400  p-2 rounded-full">
                            <FaLayerGroup />
                        </div>
                        <p className="text-xl font-bold">{groupCount}</p>
                        <p className="text-sm">Total Groups</p>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex items-center justify-between mx-5'>
                    <h2 className="text-3xl md:text-4xl font-bold my-8">My Created Groups</h2>
                </div>
                <div>
                    <MyGroups setUserData={setUserData} userData={userData}/>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
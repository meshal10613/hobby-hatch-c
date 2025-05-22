import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { format, isBefore } from 'date-fns';
import { Link } from 'react-router';

const FeatureGroups = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-10-server-xi-fawn.vercel.app/hobbies`)
        .then(res => res.json())
        .then(data => {
            setUserData(data)
        })
    }, [])
    const date = format(new Date(), "yyyy-MM-dd");
    const newData = userData.filter((d) => !isBefore(d?.date, date));
    const displayedItems = newData.length <= 6 ? newData : newData.slice(0, 6);
    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-bold my-8 text-center">Feature Groups</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-fit mx-auto my-10'>
                {
                    displayedItems.map((item, index) => 
                            <div key={index} className="card bg-base-100 w-88 shadow-sm">
                                <figure className="px-10 pt-10">
                                    <img
                                    src={item?.image}
                                    alt="Shoes"
                                    className="rounded-xl w-68 h-42"/>
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{item?.groupName}</h2>
                                    <p>{item?.description}</p>
                                    <div className="card-actions">
                                        <Link to={`/allGroups/${item?._id}`} className='btn bg-primary text-secondary transition-all hover:text-primary hover:bg-secondary dark:bg-secondary dark:text-accent hover:dark:bg-accent hover:dark:text-secondary'>See More</Link>
                                    </div>
                                </div>
                            </div>
                    )
                }
            </div>
        </div>
    );
};

export default FeatureGroups;
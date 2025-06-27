import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import { BiSort } from "react-icons/bi";
import { AuthContext } from '../Provider/AuthProvider';

const AllGroups = () => {
    const {search, setSearch} = use(AuthContext);
    const [intData, setIntData] = useState([]);
    const [sort, setSort] = useState("");

    const handleSort = (type) => {
        setSort("");
        if(type === "az"){
            setSort("az")
        }else if(type === "za"){
            setSort("za");
        }else{
            setSort("");
        };
    };

    useEffect(() => {
        fetch(`https://assignment-10-server-xi-fawn.vercel.app/hobbies?search=${search}&sort=${sort}`)
        .then(res => res.json())
        .then(data => setIntData(data))
    }, [search, sort]);
    return (
        <div className='mb-10 mx-5'>
            <div>
                <div className='flex items-center justify-between mx-5 md:mx-0'>
                    <div>
                        <h2 className='text-3xl md:text-4xl font-bold my-8'>All Groups</h2>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <div>
                            <label className="input">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                    >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} required placeholder="Search Hobby" />
                            </label>
                        </div>
                        <div className="dropdown dropdown-end">
                            <button tabIndex={0} role="button"  className='btn btn-ghost'><BiSort size={20}/></button>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                {/* <li><a>Newest First</a></li>
                                <li><a>Oldest First</a></li> */}
                                <li><a onClick={() => handleSort("")} id='default'>Default</a></li>
                                <li><a onClick={() => handleSort("az")} id='az'>A-Z</a></li>
                                <li><a onClick={() => handleSort("za")} id='za'>Z-A</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5'>
                    {
                        intData.map((data, index) => 
                            <div key={index} className="card w-fit mx-auto bg-secondary shadow-xl hover:shadow-2xl transition">
                                <figure className="px-6 pt-6">
                                    <img src={data.image} alt={data.title} className="rounded-xl w-80 h-60 object-cover" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-lg font-bold">{data.groupName}</h2>
                                    <p className="text-sm text-gray-500 flex items-center gap-1">
                                    {data.hobby}
                                    </p>
                                    <div className="card-actions mt-4">
                                        <Link to={`/allGroups/${data?._id}`} className="btn btn-primary btn-sm gap-2">
                                            See More <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllGroups;
import React, { use, useEffect, useState } from 'react';
import Loading from './Loading';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';

const MyGroups = () => {
    const {user} = use(AuthContext);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/hobbies?emailParams=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setUserData(data)
        })
    }, [user])

    const [pageLoad, setPageLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setPageLoad(false), 500); // simulate delay
        return () => clearTimeout(timer);
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/hobbies/${id}`, {
                    method: "DELETE",
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount){ 
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Hobbie has been deleted.",
                            icon: "success"
                        });
                        const remainingData = userData.filter(cof => cof._id !== id);
                        setUserData(remainingData);
                    }
                })
            }
        });
    }
    return (
        <div>
            {
                pageLoad
                    ?   <Loading/>
                    :   <div>
                            {
                                userData.map((data, index) => 
                                <div key={index} className='border-2 border-gray-400 rounded-2xl mb-5 flex justify-between items-center md:px-5'>
                                    <div className='flex gap-5 items-center justify-baseline'>
                                        <img src={data?.image} alt="" />
                                        <div>
                                            <h2 className='font-bold text-2xl'>{data?.groupName}</h2>
                                            <p>{data?.date}</p>
                                            <p>{data?.description}</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <Link to={`/updateGroup/${data?._id}`} className='btn bg-primary text-secondary transition-all hover:text-primary hover:bg-secondary'>Update</Link>
                                        <Link onClick={() => handleDelete(data?._id)} className='text-red-600'><MdDeleteForever size={25}/></Link>
                                    </div>
                                </div>)
                            }
                        </div>
            }
        </div>
    );
};

export default MyGroups;
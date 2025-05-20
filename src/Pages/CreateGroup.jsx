import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from './Loading';
import { Bounce, toast } from 'react-toastify';

const CreateGroup = () => {
    const {user} = use(AuthContext);
    const [pageLoad, setPageLoad] = useState(true);
    const handleCreateGroup = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const allData = Object.fromEntries(formData.entries());

        fetch("http://localhost:3000/hobbies", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(allData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success('Data added successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
        })
    };

    useEffect(() => {
        const timer = setTimeout(() => setPageLoad(false), 500); // simulate delay
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {
                pageLoad
                ?   <Loading/>
                :   <div className="card bg-base-100 w-full max-w-3xl mx-auto shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleCreateGroup} className="fieldset">
                                <div className='flex flex-col w-full'>
                                    <label className="label">Group Name</label>
                                    <input type="text" name='groupName' className="input w-full" placeholder="Enter Group Name" required/>
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3'>
                                    <div className='flex flex-col'>
                                        <label className="label">Hobby Category</label>
                                        <select defaultValue="Pick a color" name='hobby' className="select w-full" required>
                                            <option disabled={true}>Select a category</option>
                                            <option>Drawing & Painting</option>
                                            <option>Photography</option>
                                            <option>Video Gaming</option>
                                            <option>Fishing</option>
                                            <option>Running</option>
                                            <option>Cooking</option>
                                            <option>Reading</option>
                                            <option>Writing </option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className="label">Max Members</label>
                                        <input type="number" name='members' className="input w-full" placeholder="Enter Group Max Members" required/>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3'>
                                    <div className='flex flex-col'>
                                        <label className="label">Meeting Location</label>
                                        <input type="text" name='location' className="input w-full" placeholder="Enter Meeting Location" required/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className="label">Start Date</label>
                                        <input type='date' name='date' className="input w-full" placeholder="Enter Group Name" required/>
                                    </div>
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label className="label">Group Description</label>
                                    <input type="text" name='description' className="input w-full" placeholder="Enter Group Description" required/>
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label className="label">Image URL</label>
                                    <input type="text" name='image' className="input w-full" placeholder="Enter Group Image" required/>
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3'>
                                    <div className='flex flex-col'>
                                        <label className="label">Username</label>
                                        <input type="text" value={user?.displayName} name='username' className="input w-full" readOnly/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className="label">Email</label>
                                        <input type='text' value={user?.email} name='email' className="input w-full" readOnly/>
                                    </div>
                                </div>
                                <button type='submit' className="btn bg-primary text-secondary transition-all hover:text-primary hover:bg-secondary mt-4">Create Group</button>
                            </form>
                        </div>
                    </div>
            }
        </div>
    );
};

export default CreateGroup;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateGroup = () => {
    const data = useLoaderData();
    const [groupName, setGroupName] = useState(data?.groupName);
    const [hobbyCategory, sethobbyCategory] = useState(data?.hobby);
    const [members, setMembers] = useState(data?.members);
    const [location, setLocation] = useState(data?.location);
    const [date, setDate] = useState(data?.date);
    const [description, setDescription] = useState(data?.description);
    const [image, setImage] = useState(data?.image);

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedHobby = Object.fromEntries(formData.entries());
        fetch(`http://localhost:3000/hobbies/${data._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedHobby)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Group Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-3xl mx-auto shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleUpdate} className="fieldset">
                        <div className='flex flex-col w-full'>
                            <label className="label">Group Name</label>
                            <input type="text" defaultValue={groupName} onChange={(e) => setGroupName(e.target.value)} name='groupName' className="input w-full" placeholder="Enter Group Name" required/>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3'>
                            <div className='flex flex-col'>
                                <label className="label">Hobby Category</label>
                                <select defaultValue={hobbyCategory} onChange={(e) => sethobbyCategory(e.target.value)} name='hobby' className="select w-full" required>
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
                                <input type="number" defaultValue={members} onChange={(e) => setMembers(e.target.value)} name='members' className="input w-full" placeholder="Enter Group Max Members" required/>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3'>
                            <div className='flex flex-col'>
                                <label className="label">Meeting Location</label>
                                <input type="text"  defaultValue={location} onChange={(e) => setLocation(e.target.value)} name='location' className="input w-full" placeholder="Enter Meeting Location" required/>
                            </div>
                            <div className='flex flex-col'>
                                <label className="label">Start Date</label>
                                <input type='date' defaultValue={date} onChange={(e) => setDate(e.target.value)} name='date' className="input w-full" placeholder="Enter Group Name" required/>
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className="label">Group Description</label>
                            <input type="text" defaultValue={description} onChange={(e) => setDescription(e.target.value)} name='description' className="input w-full" placeholder="Enter Group Description" required/>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className="label">Image URL</label>
                            <input type="text" defaultValue={image} onChange={(e) => setImage(e.target.value)} name='image' className="input w-full" placeholder="Enter Group Image" required/>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3'>
                            <div className='flex flex-col'>
                                <label className="label">Username</label>
                                <input type="text" value={data?.username} name='username' className="input w-full" readOnly/>
                            </div>
                            <div className='flex flex-col'>
                                <label className="label">Email</label>
                                <input type='text' value={data?.email} name='email' className="input w-full" readOnly/>
                            </div>
                        </div>
                        <button type='submit' className="btn bg-primary text-secondary transition-all hover:text-primary hover:bg-secondary mt-4">Update Group</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateGroup;
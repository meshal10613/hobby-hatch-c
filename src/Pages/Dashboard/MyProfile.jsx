import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Bounce, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router';

const MyProfile = () => {
    const {user, signOutUser} = use(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            toast.success('Logout successfully', {
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
            navigate("/");
        })
        .catch((error) => {
            toast.error(`${error.message}`, {
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
        })
    };

    return (
        <div className="bg-base-200 flex items-center justify-center px-4">
            <div className="bg-secondary rounded-2xl shadow-xl w-full max-w-3xl p-8">
                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow">
                    <img src={user?.photoURL} referrerPolicy='no-referrer' alt="Profile" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-3xl font-bold text-primary">{user?.displayName}</h2>
                </div>

                {/* Info Section */}
                <div className="mt-6 space-y-3 text-center sm:text-left sm:pl-6">
                    <p className="text-base-content"><span className="font-semibold">Email:</span> {user?.email}</p>
                </div>

                {/* Buttons */}
                <div className="mt-8">
                    <button onClick={handleSignOut} className="btn btn-outline btn-error w-full">Log Out</button>
                    {/* <Link to="/dashboard/edit-profile" className="btn btn-primary w-full sm:w-auto">Edit Profile</Link> */}
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
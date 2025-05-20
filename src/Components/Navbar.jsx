import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { Bounce, toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
    const {user, signOutUser} = use(AuthContext);
    const navigate = useNavigate();
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allGroups">All Groups</NavLink></li>
        <li><NavLink to="/createGroup">Create Group</NavLink></li>
        <li><NavLink to="/myGroups">My Groups</NavLink></li>
    </>;
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
    }
    return (
    <div className="navbar my-5">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
            </ul>
            </div>
            <Link to='/' className="text-3xl font-bold text-primary cursor-pointer">HobbyHatch</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {links}
            </ul>
        </div>
        <div className="navbar-end">
            {
                user 
                ?   <div className='flex gap-3 items-center'>
                        <div className='w-12 h-12 rounded-full cursor-pointer' id='profile'>
                            <img src={user?.photoURL} alt="" className='rounded-full border border-black'/>
                        </div>
                        <Link onClick={handleSignOut} className='btn bg-primary text-secondary transition-all hover:text-primary hover:bg-secondary'>Logout</Link>
                        <Tooltip anchorSelect="#profile" place="top" className='z-10'>
                            {user?.displayName}
                        </Tooltip>
                    </div>
                :   <div className='flex gap-1'>
                        <Link to="/login" className='btn bg-primary text-secondary transition-all hover:text-primary hover:bg-secondary'>LogIn</Link>
                        <Link to="/signup" className='btn bg-primary text-secondary transition-all hover:text-primary hover:bg-secondary'>SignUp</Link>
                    </div>
            }
        </div>
    </div>
    );
};

export default Navbar;
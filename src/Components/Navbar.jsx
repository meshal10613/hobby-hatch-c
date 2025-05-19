import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allGroups">All Groups</NavLink></li>
        <li><NavLink to="/createGroup">Create Group</NavLink></li>
        <li><NavLink to="/myGroups">My Groups</NavLink></li>
    </>;
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
            <div className='flex gap-1'>
                <Link to="/login" className='btn bg-primary text-secondary transition-all hover:text-primary hover:bg-secondary'>LogIn</Link>
                <Link to="/signup" className='btn bg-primary text-secondary transition-all hover:text-primary hover:bg-secondary'>SignUp</Link>
            </div>
        </div>
    </div>
    );
};

export default Navbar;
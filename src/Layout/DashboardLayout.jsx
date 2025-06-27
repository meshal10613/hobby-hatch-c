import React, { use, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { RxDashboard } from 'react-icons/rx';
import { IoCreate } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { FaUserGroup } from 'react-icons/fa6';

const DashboardLayout = () => {
    const {theme, user} = use(AuthContext);
    const [title, setTitle] = useState("Dashboard");
    // Set color depending on theme
    const primaryColor = theme === "light" ? "#1e8312" : "#9ff198";

    const activeStyle = {
        background: primaryColor,
        color: "white"
        // fontWeight: "bold",
    };
    
    const linkClass = ({ isActive }) => {
        isActive
            ? "text-primary font-semibold"
            : "hover:text-primary/70 transition-colors";
        }
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
            {/* Navbar */}
                <div className="navbar bg-secondary flex justify-between items-center w-[98%] mx-auto rounded-4xl my-5">
                    <div className='flex items-center'>
                        <div className="flex-none xl:hidden">
                            <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                            </label>
                        </div>
                        <h2 className="mx-2 flex-1 px-2 text-xl font-semibold">{title}</h2>
                    </div>
                    <div>
                        <Link to='/dashboard/my-profile'>
                            <img
                            src={user?.photoURL} 
                            referrerPolicy='no-referrer'
                            alt="" 
                            className='w-12 h-12 rounded-full border border-gray-300 cursor-pointer'
                            />
                        </Link>
                    </div>
                </div>
                {/* page content here */}
                <Outlet/>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-secondary text-base-content min-h-full w-80 p-4 main-link">
                    {/* Sidebar content here */}
                    <li>
                        <NavLink to="/" onClick={() => setTitle("Dashboard")} style={({ isActive }) => (isActive ? (activeStyle) : undefined)} className={linkClass} >
                            <FaHome className="inline-block mr-2"/>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/home" onClick={() => setTitle("Dashboard")} style={({ isActive }) => (isActive ? (activeStyle) : undefined)} className={linkClass} >
                            <RxDashboard className="inline-block mr-2"/>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/createGroup" onClick={() => setTitle("My Profile")} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                            <IoCreate className="inline-block mr-2"/>Create Group
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/my-profile" onClick={() => setTitle("My Profile")} style={({ isActive }) => (isActive ? activeStyle : undefined)} >
                            <CgProfile  className="inline-block mr-2" />
                            My Profile
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;
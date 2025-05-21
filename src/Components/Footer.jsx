import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import Swal from 'sweetalert2';

const Footer = () => {
    const [email, setEmail] = useState("");
    const handleSubscribe = (e) => {
        e.preventDefault();
        if(email === ""){
            return
        }else{
            Swal.fire({
                title: "Good job!",
                text: `Your email ${email} has subscribe successfully`,
                icon: "success"
            });
        }
    }
    return (
        <footer className="flex justify-around md:items-center flex-col md:flex-row text-black pl-5 md:pl-0 md:p-20 py-10 md:py-20 dark:text-accent">
            <aside className='flex flex-col gap-3'>
                <div>
                    <img src="/public/hobby.png" alt="" className='w-20'/>
                </div>
                <p className='font-semibold text-3xl text-primary'>Hobby Hatch</p>
                <div className='flex gap-2 pb-5 md:pb-0'>
                    <Link to="https://www.facebook.com/meshal.67/" target='_blank'>
                        <FaFacebook size={25} className='text-blue-600 cursor-pointer'/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/10613-meshal" target='_blank'>
                        <FaLinkedin size={25} className='text-blue-700 cursor-pointer'/>
                    </Link>
                    <Link to="https://github.com/meshal10613" target='_blank'>
                        <FaGithub size={25} className='cursor-pointer'/>
                    </Link>
                </div>
            </aside>
            <nav className='pb-5 md:pb-0 text-accent'>
                <h6 className="footer-title font-semibold text-xl">Useful Links</h6>
                <div className="grid grid-flow-col gap-4">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/allGroups">All Groups</NavLink></li>
                        <li><NavLink to="/createGroup">Create Group</NavLink></li>
                        <li><NavLink to="/myGroups">My Groups</NavLink></li>
                    </ul>
                </div>
            </nav>
            <form className='text-accent'>
                <h6 className="footer-title font-semibold text-xl">Subscribe</h6>
                <fieldset className="w-80">
                    <label>Enter your email address</label>
                    <div className="join">
                        <input
                        type="text"
                        placeholder="username@site.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered join-item text-primary font-bold" required/>
                        <button type='submit' onClick={handleSubscribe} className="btn bg-primary text-secondary join-item">Subscribe</button>
                    </div>
                </fieldset>
                <h2 className='mt-3'>Get the latest updates via email. <br /> Any time you may unsubscribe</h2>
            </form>
        </footer>
    );
};

export default Footer;
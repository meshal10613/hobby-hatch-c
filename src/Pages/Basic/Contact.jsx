import React from 'react';
import contactUs from '../../assets/contact-us.png'

const Contact = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className="min-w-md mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-primary text-center">Contact Us</h1>
                <form className="space-y-6">
                    <div>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                    </div>
                    <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="your@email.com" className="input input-bordered w-full" />
                    </div>
                    <div>
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full" rows="6" placeholder="Your message"></textarea>
                    </div>
                    <div className="flex justify-center">
                    <button className="btn btn-primary w-full sm:w-auto">Send Message</button>
                    </div>
                </form>
            </div>
            <div className='md:w-4/12'>
                <img src={contactUs} alt="" className='w-full'/>
            </div>
        </div>
    );
};

export default Contact;

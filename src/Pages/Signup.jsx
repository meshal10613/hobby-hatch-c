import React, { use, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { Bounce, toast } from 'react-toastify';

const Signup = () => {
    const { SignUpUser, setUser, updateUser, signInWithGoogle } = use(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email, password, name, image} = Object.fromEntries(formData.entries());
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password)){
            setError("Password Requirements: \n- Minimum 6 characters \n- At least 1 uppercase letter \n- At least 1 lowercase letter \n- At least 1 number");
            return;
        }
        SignUpUser(email, password)
        .then((result) => {
            const user = result.user;
            const updateProfileInfo = {
                displayName: name, 
                photoURL: image,
            };
            const serverData = {
                displayName: name, 
                photoURL: image,
                email: email,
                creationTime: user?.metadata?.creationTime,
                lastSignInTime: user?.metadata?.lastSignInTime,
            };
            fetch("https://assignment-10-server-xi-fawn.vercel.app/user", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(serverData)
                })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    toast.success('SignUp successfully', {
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
                    updateUser(updateProfileInfo)
                    .then(() => {
                        setUser(...user, ...updateProfileInfo);
                        navigate(`/`);
                    })
                    .then(() => {
                        setUser(user)
                    })
                }
            })
        })
        .catch((error) => {
            toast.error(`${error.message}`, {
                position: "top-right",
                autoClose: 3000,
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

    const handleGoogleSignUp = () => {
        signInWithGoogle()
        .then((result) => {
            const user = result.user;
            setUser(user);
            const serverData = {
                displayName: user?.displayName, 
                photoURL: user?.photoURL,
                email: user?.email,
                creationTime: user?.metadata?.creationTime,
                lastSignInTime: user?.metadata?.lastSignInTime,
            };
            fetch("https://assignment-10-server-xi-fawn.vercel.app/user", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(serverData)
                })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    toast.success('SignUp successfully', {
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
                }
            })
        })
        .catch((error) => {
            toast.error(`${error.message}`, {
                position: "top-right",
                autoClose: 3000,
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
        <div className="w-11/12 md:w-10/12 mx-auto">
            <Navbar/>
            <div className="w-full max-w-md bg-secondary p-8 rounded-xl shadow-md mx-auto mt-20">
                <h2 className="text-2xl font-semibold text-center mb-6">Signup to HobbyHub</h2>

                <form onSubmit={handleSignUp} className="space-y-2">
                <div>
                    <label className="block mb-1 text-sm font-medium">Name</label>
                    <input type="text" name="name" placeholder='Enter Your Name' required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-semibold" />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Image</label>
                    <input type="text" name="image" placeholder='Enter Your Image' required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-semibold" />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Email</label>
                    <input type="email" name="email" placeholder='Enter Your Email' required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-semibold" />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Password</label>
                    <input type="password" name="password" placeholder='Enter Your Password' required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-semibold" />
                </div>

                {
                    error && <p className='text-red-500 text-xs'>{error}</p>
                }

                <button type="submit"
                    className='btn bg-primary text-secondary border-none btn-block'>
                    Signup
                </button>
                </form>

                <p className="text-sm mt-4">
                Don't have an account?
                <Link to="/login" className="text-primary hover:underline"> Login</Link>
                </p>
                <div className="divider">Or</div>
                <div className='flex flex-col gap-2'>
                    {/* Google */}
                    <button onClick={handleGoogleSignUp} className="btn btn-block bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Signup with Google
                    </button>
                    {/* GitHub */}
                    <button className="btn btn-block bg-black text-white border-black">
                    <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                    Signup with GitHub
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
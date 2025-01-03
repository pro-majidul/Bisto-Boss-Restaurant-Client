import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AuthenticationImg from '../assets/others/authentication2.png'
import bgImage from '../assets/others/authentication.png'


const SignUp = () => {
    return (
        <section style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }} className='flex items-center justify-center min-h-screen' >
            <div className='md:flex items-center justify-center gap-5 md:p-10 rounded-xl shadow-2xl border-4 w-10/12 mx-auto '>

                <div className="w-full max-w-lg p-8 space-y-3 rounded-xl ">
                    <h1 className="text-2xl font-bold text-center text-black">Sign Up</h1>
                    <form  className="space-y-6 text-black">
                        <div className="space-y-1 text-sm">
                            <label className="block ">Name</label>
                            <input type="text" name="name" placeholder="Type here" className="w-full px-4 py-3 rounded-md text-white" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block ">Email</label>
                            <input type="email" name="email" placeholder="Type here" className="w-full px-4 py-3 rounded-md text-white" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block ">Password</label>
                            <input type="password" name="password" placeholder="Enter Your Password" className="w-full px-4 py-3 rounded-md text-white" />

                        </div>
                       
                        <button  className="block w-full p-3 text-center rounded-sm text-white  bg-[#D1A054B3]">Sign in</button>
                    </form>

                    <p className="text-md text-center sm:px-6 text-[#D1A054B3]">Already Register?
                        <Link to='/login' className="font-bold hover:text-purple-500">Go to Login</Link>
                    </p>

                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-md ">or Sign Up With</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button aria-label="Log in with Google" className="p-3 hover:bg-purple-500 rounded-full border-gray-600 border">
                            <FaFacebookF size={24} color='gray' />
                        </button>
                        <button aria-label="Log in with Twitter" className="p-3 hover:bg-purple-500 rounded-full border-gray-600 border">
                            <FaGoogle size={24} color='gray' />
                        </button>
                        <button aria-label="Log in with GitHub" className="p-3 hover:bg-purple-500 rounded-full border-gray-600 border">
                            <FaGithub size={24} color='gray' />
                        </button>
                    </div>

                </div>
                <div>
                    <img src={AuthenticationImg} alt="" />
                </div>
            </div>

        </section>
    );
};

export default SignUp;
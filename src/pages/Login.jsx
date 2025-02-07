import React, { useEffect, useState } from 'react';
import AuthenticationImg from '../assets/others/authentication2.png'
import bgImage from '../assets/others/authentication.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { toast } from 'react-toastify';
import useUsers from '../hooks/useUsers';
import { Helmet } from 'react-helmet-async';
import SocialLogins from '../components/SocialLogins';


const Login = () => {
    const { userlogin, setUsers } = useUsers()
    const navigate = useNavigate()
    const location = useLocation()
    const [disabled, setDisabled] = useState(true)
    const redirect = location.state || '/';
    // console.log(redirect);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handelUserSignIn = async e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log('user login added ', email, password);
        try {
            const result = await userlogin(email, password)
            // console.log(result.user);
            setUsers(result.user)
            navigate(redirect)
            toast.success('User Login Successfully')
        } catch (error) {
            // console.log(error);
            toast.error('User Not Login')
        }
    };

    const handelMatchcaptcha = (e) => {

        const captchaInputText = e.target.value;
        // console.log(captchaInputText);
        if (validateCaptcha(captchaInputText)) {
            setDisabled(false)
            toast.success('Captcha Matched')
        } else {
            setDisabled(true)
            toast.error('Captcha Not Matched')
        }
    }
    return (
        <section style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }} className='flex items-center justify-center min-h-screen' >
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className='md:flex items-center justify-center gap-5 md:p-10 rounded-xl shadow-2xl border-4 w-10/12 mx-auto '>
                <div>
                    <img src={AuthenticationImg} alt="" />
                </div>
                <div className="w-full max-w-lg p-8 space-y-3 rounded-xl ">
                    <h1 className="text-2xl font-bold text-center text-black">Login</h1>
                    <form onSubmit={handelUserSignIn} className="space-y-6 text-black">
                        <div className="space-y-1 text-sm">
                            <label className="block ">Email</label>
                            <input type="email" name="email" placeholder="Type here" className="w-full px-4 py-3 rounded-md" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block ">Password</label>
                            <input type="password" name="password" placeholder="Enter Your Password" className="w-full px-4 py-3 rounded-md " />

                        </div>
                        <div className="space-y-1 text-sm">
                            <LoadCanvasTemplate />
                            <input type="text" name="captha" onBlur={handelMatchcaptcha} placeholder="enter captha text here" className="w-full px-4 py-3 rounded-md " />
                        </div>
                        <button disabled={disabled} className="block w-full p-3 text-center rounded-sm text-white  bg-[#D1A054B3]">Sign in</button>
                    </form>

                    <p className="text-md text-center sm:px-6 text-[#D1A054B3]">New Here ?
                        <Link to='/signup' className="font-bold hover:text-purple-500"> Create A New Account</Link>
                    </p>

                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-md ">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    {/* <div className="flex justify-center space-x-4">
                        <button aria-label="Log in with Google" className="p-3 hover:bg-purple-500 rounded-full border-gray-600 border">
                            <FaFacebookF size={24} color='gray' />
                        </button>
                        <button aria-label="Log in with Twitter" className="p-3 hover:bg-purple-500 rounded-full border-gray-600 border">
                            <FaGoogle size={24} color='gray' />
                        </button>
                        <button aria-label="Log in with GitHub" className="p-3 hover:bg-purple-500 rounded-full border-gray-600 border">
                            <FaGithub size={24} color='gray' />
                        </button>
                    </div> */}
                    <SocialLogins></SocialLogins>

                </div>
            </div>

        </section>
    )
};


export default Login;
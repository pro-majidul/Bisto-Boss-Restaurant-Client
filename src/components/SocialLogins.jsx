import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import useUsers from '../hooks/useUsers';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import usePublicAxios from '../hooks/usePublicAxios';

const SocialLogins = () => {
    const publicAxios = usePublicAxios()
    const navigate = useNavigate()
    const location = useLocation();
    const redirect = location.state || '/';

    const { googleSignIn } = useUsers()
    const handelGoogleLogin = async () => {
        try {
            const response = await googleSignIn()
            // if (response.data)
            // console.log(response.user);

            const userInfo = {
                name: response.user?.displayName,
                email: response.user?.email,
            }

            const res = await publicAxios.post('/users', userInfo)
            // console.log(res.data);
            if (response.user) {
                toast.success('User Google Login Success')
                navigate(redirect)
                
            }
            
        } catch (err) {
            toast.error('User Google Login failed')
            // console.log(err);
        }
    }
    return (
        <div className="flex justify-center space-x-4">
            <button aria-label="Log in with Google" className="p-3 hover:bg-purple-500 rounded-full border-gray-600 border">
                <FaFacebookF size={24} color='gray' />
            </button>
            <button onClick={handelGoogleLogin} aria-label="Log in with Twitter" className="p-3 hover:bg-purple-500 rounded-full border-gray-600 border">
                <FaGoogle size={24} color='gray' />
            </button>
            <button aria-label="Log in with GitHub" className="p-3 hover:bg-purple-500 rounded-full border-gray-600 border">
                <FaGithub size={24} color='gray' />
            </button>
        </div>

    );
};

export default SocialLogins;
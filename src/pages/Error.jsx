import React from 'react';
import ErrorImg from '../assets/404.gif'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex items-center justify-center '>
            <div className='w-full max-w-7xl  mx-auto'>
               <Link to='/'> <button className="btn absolute ml-4 mt-5"> <FaArrowLeft />Go Back</button></Link>
                <img className='w-full' src={ErrorImg} alt="" />
            </div>
        </div>
    );
};

export default Error;
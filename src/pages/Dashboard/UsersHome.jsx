import React from 'react';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import useUsers from '../../hooks/useUsers';
import { CiShop } from 'react-icons/ci';
import { FiPhoneCall } from 'react-icons/fi';
import { FaCalendarAlt, FaCartPlus, FaCcAmazonPay, FaStar } from 'react-icons/fa';

const UsersHome = () => {
    const { users } = useUsers()
    return (
        <div>
            <h1 className='text-4xl font-Cinzel font-semibold '>{users?.displayName} Welcome Back! </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 py-3'>
                <div className="border rounded-md p-2 bg-gradient-to-r from-purple-700 to-purple-300 flex-1 h-32">
                    <div className='flex items-center h-full justify-center gap-5'>
                        <div className='flex items-center justify-center'>
                            <MdOutlineAccountBalanceWallet className='text-white text-7xl' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h2 className='text-white text-3xl font-medium'>205</h2>
                            <p className='text-white '>Menu</p>
                        </div>
                    </div>
                </div>
                <div className="border p-2 bg-gradient-to-r rounded-md from-[#D3A256] to-[#FDE8C0] flex-1 h-32">
                    <div className='flex items-center h-full justify-center gap-5'>
                        <div className='flex items-center justify-center'>
                            <CiShop className='text-white font-medium text-7xl' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h2 className='text-white text-3xl font-medium'>103</h2>
                            <p className='text-white '>Shop</p>
                        </div>
                    </div>
                </div>
                <div className="border p-2 bg-gradient-to-r from-pink-700 to-pink-100 rounded-md flex-1 h-32">
                    <div className='flex items-center h-full justify-center gap-5'>
                        <div>
                            <FiPhoneCall className='text-6xl font-medium text-white' />
                        </div>
                        <div>
                            <h3 className='text-3xl font-medium text-white'>013</h3>
                            <p className='text-white
                             text-xl'>Call</p>
                        </div>

                    </div>

                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div className='bg-[#FFEDD5] h-96 w-full'>
                    <div className='flex flex-col items-center justify-center space-y-5 h-full'>
                        <div className='h-32 rounded-full w-32 bg-white border'>
                            <img src={users?.photoURl} alt="" />
                        </div>
                        <p className='text-3xl font-medium text-black font-Cinzel'>{users?.displayName}</p>
                    </div>
                </div>
                <div className='bg-[#FEF9C3] h-96 w-full'>
                    <div className='flex flex-col justify-center w-2/3 mx-auto h-full'>
                        <h4 className='text-3xl font-semibold font-Cinzel'>Your Activities</h4>
                        <p className='flex items-center gap-1 text-xl font-Cinzel text-blue-500'><FaCartPlus className='text-blue-500'/> Orders</p>
                        <p className='flex items-center text-green-700 gap-1 text-xl font-Cinzel'><FaStar className='text-green-700'/> Reviews</p>
                        <p className='flex items-center text-orange-400 gap-1 text-xl font-Cinzel'><FaCalendarAlt className='text-orange-400' /> Bookings</p>
                        <p className='flex items-center text-red-700 gap-1 text-xl font-Cinzel'><FaCcAmazonPay className='text-red-700' /> Payments</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersHome;
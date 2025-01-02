import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoTimeSharp } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';

const LocationCard = () => {
    return (
        <div className='md:flex items-stretch space-y-5 justify-center gap-5'>
            <div className="border w-full mt-5">
                <div className='bg-[#D1A054] w-full py-3 flex items-center justify-center'>
                    <BiSolidPhoneCall color='white' size={44} />
                </div>
                <div className='mx-5 mb-4 bg-[#F3F3F3] flex items-center justify-center py-14'>
                    <div className='text-black text-center'>
                        <h1 className='text-[#151515] text-xl font-medium'>Phone</h1>
                        <p className='text-[#444444]'>+38 (012) 34 56 789</p>
                    </div>
                </div>
            </div>
            <div className="border w-full">
                <div className='bg-[#D1A054] w-full py-3 flex items-center justify-center'>
                    <MdLocationPin color='white' size={44} />
                </div>
                <div className='mx-5 mb-4 bg-[#F3F3F3] flex items-center justify-center py-14'>
                    <div className='text-black text-center'>
                        <h1 className='text-[#151515] text-xl font-medium'>Address</h1>
                        <p className='text-[#444444]'>+38 (012) 34 56 789</p>
                    </div>
                </div>
            </div>
            <div className="border w-full">
                <div className='bg-[#D1A054] w-full py-3 flex items-center justify-center'>
                    <IoTimeSharp color='white' size={44} />
                </div>
                <div className='mx-5 mb-4 bg-[#F3F3F3] flex items-center justify-center py-11'>
                    <div className='text-black text-center'>
                        <h1 className='text-[#151515] text-xl font-medium'>WORKING HOURS</h1>
                        <p className='text-[#444444]'>Mon - Fri: 08:00 - 22:00</p>
                        <p className='text-[#444444]'>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LocationCard;
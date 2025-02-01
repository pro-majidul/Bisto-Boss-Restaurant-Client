import React from 'react';
import Section from '../../shared/Section';
import { MdDone } from 'react-icons/md';

const ManageBooking = () => {
    return (
        <section>
            <Section heading='Manage All Booking' subHeading='At a Glance!'></Section>
            <div className='mt-4 p-4 bg-white'>
                <h3 className='font-bold text-black my-3 text-xl'>Total Items: 6 </h3>

                <div className="overflow-x-auto">
                    <table className="table bg-[#D1A054]">
                        {/* head */}
                        <thead>
                            <tr className=' font-Cinzel  '>
                                <th className='text-white text-lg'>User Email</th>
                                <th className='text-white text-lg'>Phone Number</th>
                                <th className='text-white text-lg'>Booking Date</th>
                                <th className='text-white text-lg'>Booking Time</th>
                                <th className='text-white text-lg'>Activity</th>
                                <th className='text-white text-lg'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            <tr>
                                <th>user010@gmail.com</th>
                                <th>01822299900</th>
                                <th>0+/11/06</th>
                                <th>00 : 00</th>
                                <th className='text-[#AE7B2B]'>Pending</th>
                                <th><MdDone className='bg-green-300 text-black p-4  rounded-full'/></th>
                            </tr>
                            <tr>
                                <th>user010@gmail.com</th>
                                <th>01822299900</th>
                                <th>0+/11/06</th>
                                <th>00 : 00</th>
                                <th className='text-green-900'>Done</th>
                                <th><MdDone className='bg-green-900 text-black p-4  rounded-full'/></th>
                            </tr>
                            <tr>
                                <th>user010@gmail.com</th>
                                <th>01822299900</th>
                                <th>0+/11/06</th>
                                <th>00 : 00</th>
                                <th className='text-[#AE7B2B]'>Pending</th>
                                <th><MdDone className='bg-green-300 text-black p-4  rounded-full'/></th>
                            </tr>
                            <tr>
                                <th>user010@gmail.com</th>
                                <th>01822299900</th>
                                <th>0+/11/06</th>
                                <th>00 : 00</th>
                                <th className='text-green-900'>Done</th>
                                <th><MdDone className='bg-green-900 text-black p-4  rounded-full'/></th>
                            </tr>
                            <tr>
                                <th>user010@gmail.com</th>
                                <th>01822299900</th>
                                <th>0+/11/06</th>
                                <th>00 : 00</th>
                                <th className='text-[#AE7B2B]'>Pending</th>
                                <th><MdDone className='bg-green-300 text-black p-4  rounded-full'/></th>
                            </tr>
                            <tr>
                                <th>user010@gmail.com</th>
                                <th>01822299900</th>
                                <th>0+/11/06</th>
                                <th>00 : 00</th>
                                <th className='text-green-900'>Done</th>
                                <th><MdDone className='bg-green-900 text-black p-4  rounded-full'/></th>
                            </tr>


                        </tbody>

                    </table>
                </div>
            </div>

        </section>
    );
};

export default ManageBooking;
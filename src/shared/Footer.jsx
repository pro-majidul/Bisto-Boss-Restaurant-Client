import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io';

const Footer = () => {
    return (
        <footer className='w-full'>
            <div className='md:flex'>
                <div className='bg-[#1F2937] flex-1 space-y-1 p-10 text-center'>
                    <h3 className='text-xl font-medium text-gray-100'>CONTACT US</h3>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p> Mon - Fri: 08:00 - 22:00</p>
                    <p> Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className='bg-[#111827] flex-1 space-y-1 p-10 text-center'>
                    <h3 className='text-xl font-medium text-gray-100'>Follow US</h3>
                    <p>Join us on social media</p>
                    <div className='flex items-center mt-3 justify-center gap-5'>
                    <IoLogoFacebook  size={32} />
                    <FaTwitter size={32}  />
                    <FaInstagram  size={32} />
                    </div>
                </div>
            </div>
            <div className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>

                </aside>
            </div>
        </footer>
    );
};

export default Footer;
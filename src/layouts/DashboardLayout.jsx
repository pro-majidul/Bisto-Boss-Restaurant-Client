import React from 'react';
import { FaCalendarAlt, FaHome, FaShoppingCart } from 'react-icons/fa';
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { NavLink, Outlet } from 'react-router-dom';
import { MdPermContactCalendar, MdReviews } from 'react-icons/md';
import { RiCalendarScheduleFill, RiShoppingBagFill } from 'react-icons/ri';
import { GiHamburgerMenu } from "react-icons/gi";

const DashboardLayout = () => {
    return (
        <section className='bg-[#070D1B]'>
            <div className='md:flex w-full gap-3 max-w-7xl mx-auto'>
                <div className='md:w-80 w-64 min-h-screen bg-[#D1A054] flex flex-col items-center justify-items-start p-4'>
                    <div className='md:my-3 md:py-3 md:space-y-2 w-full'>

                        <p className='text-Cinzel dark:text-black uppercase md:text-4xl text-2xl font-extrabold'>BISTRO BOSS</p>
                        <p className='font-semibold dark:text-black uppercase md:text-3xl  tracking-widest'>Restaurant</p>

                    </div>
                    <ul className='menu w-full font-Cinzel md:space-y-2'>
                        <li> <NavLink to='/dashboard/usersHome' className={({ isActive }) => isActive ? 'text-white md:text-xl font-bold' : 'text-black md:text-xl font-bold'} >
                            <FaHome></FaHome>
                            Users Home</NavLink></li>
                        <li> <NavLink to='/dashboard/reservation' className={({ isActive }) => isActive ? 'text-white md:text-xl font-bold' : 'text-black md:text-xl font-bold'} >
                            <FaCalendarAlt ></FaCalendarAlt>
                            Reservation</NavLink></li>
                        <li> <NavLink to='/dashboard/reservation' className={({ isActive }) => isActive ? 'text-white md:text-xl font-bold' : 'text-black md:text-xl font-bold'} >
                            <BsCreditCard2FrontFill></BsCreditCard2FrontFill>
                            Payment History</NavLink></li>
                        <li> <NavLink to='/dashboard/myCart' className={({ isActive }) => isActive ? 'text-white md:text-xl font-bold' : 'text-black md:text-xl font-bold'} >
                            <FaShoppingCart></FaShoppingCart>
                            My Cart</NavLink></li>
                        <li> <NavLink to='/dashboard/addReview' className={({ isActive }) => isActive ? 'text-white md:text-xl font-bold' : 'text-black md:text-xl font-bold'} >
                            <MdReviews />
                            ADD Review</NavLink></li>
                        <li> <NavLink to='/dashboard/myBooking' className={({ isActive }) => isActive ? 'text-white md:text-xl font-bold' : 'text-black md:text-xl font-bold'} >
                            <RiCalendarScheduleFill />
                            My Booking</NavLink></li>

                        <div className="border border-white"></div>
                        <li> <NavLink to='/' className={({ isActive }) => isActive ? 'text-white md:text-xl font-bold' : 'text-black md:text-xl font-bold'} >
                            <FaHome></FaHome>
                            Home</NavLink></li>
                        <li> <NavLink to='/dashboard/menu' className={({ isActive }) => isActive ? 'text-white md:text-xl font-bold' : 'text-black md:text-xl font-bold'} >
                            <GiHamburgerMenu />
                            Menu</NavLink></li>
                        <li> <NavLink to='/dashboard/shop' className={({ isActive }) => isActive ? 'text-white md:text-xl font-bold' : 'text-black md:text-xl font-bold'} >
                            <RiShoppingBagFill />
                            Shop</NavLink></li>
                        <li> <NavLink to='/dashboard/contact' className={({ isActive }) => isActive ? 'text-white md:text-xl font-bold' : 'text-black md:text-xl font-bold'} >
                            <MdPermContactCalendar />
                            Contact</NavLink></li>


                    </ul>
                </div>
                <div className='flex-1 my-5 py-5 md:px-8 text-white'>
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    );
};

export default DashboardLayout;
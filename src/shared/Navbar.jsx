import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ShopinCard from '../assets/icon/shopingCart.png'

const Navbar = () => {
    const navOptions = <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'uppercase  text-lg px-2 text-yellow-300 hover:text-white' : 'text-white text-lg px-2 uppercase hover:text-yellow-300'} >Home</NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'uppercase  text-lg px-2 text-yellow-300 hover:text-white' : 'text-white text-lg px-2 uppercase hover:text-yellow-300'} >Contact Us</NavLink>
        <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'uppercase  text-lg px-2 text-yellow-300 hover:text-white' : 'text-white text-lg px-2 uppercase hover:text-yellow-300'} >Dashboard</NavLink>
        <NavLink to='/ourmenu' className={({ isActive }) => isActive ? 'uppercase  text-lg px-2 text-yellow-300 hover:text-white' : 'text-white text-lg px-2 uppercase hover:text-yellow-300'} >Our Menu</NavLink>
        <NavLink to='/ourshop/Salad' className={({ isActive }) => isActive ? 'uppercase  text-lg px-2 text-yellow-300 hover:text-white' : 'text-white text-lg px-2 uppercase hover:text-yellow-300'} >Our Shop</NavLink>
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-black max-w-7xl mx-auto bg-opacity-45">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}

                        </ul>
                    </div>
                    <Link to='/'>
                        <p className='text-Cinzel text-white md:text-2xl font-extrabold'>BISTRO BOSS</p>
                        <p className='font-semibold text-white text-xl tracking-widest'>Restaurant</p>
                    </Link>
                </div>
                <div className="navbar-end ">
                    <div className='hidden lg:flex'>
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>
                </div>
                <div className='items-center'>
                    <img className='w-10 h-10' src={ShopinCard} alt="" />
                    <a className="btn">Button</a>
                </div>

            </div>
        </>
    );
};

export default Navbar;
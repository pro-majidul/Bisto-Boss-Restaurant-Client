import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-7xl w-11/12 mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-[calc(80vh-300px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
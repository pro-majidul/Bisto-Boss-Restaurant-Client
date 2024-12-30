import React from 'react';
import MenuCard from './MenuCard';
import { Link } from 'react-router-dom';
const MenuCategory = ({ title, items }) => {
    return (
        <div className='space-y-20'>
            <div className='grid md:grid-cols-2 gap-10 space-y-4'>
                {
                    items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }


            </div >

            <div className='my-5 py-5 flex items-center justify-center'>
                <Link to={`/ourshop/${title}`}>
                    <button className="btn border-0 border-b-2 border-orange-500 btn-outline">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>


        </div>
    );
};

export default MenuCategory;
import React from 'react';
import MenuCard from './MenuCard';

const MenuCategory = ({items}) => {
    return (
        <div className='grid md:grid-cols-2 gap-10 space-y-4'>
            {
                items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
            }
        </div>
    );
};

export default MenuCategory;
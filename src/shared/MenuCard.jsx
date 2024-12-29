import React from 'react';

const MenuCard = ({ item }) => {

    const { image, name, price, recipe } = item
    return (
        <div className='md:flex items-center justify-center space-y-3 gap-4'>

            <img className='w-32 rounded-e-[200px] rounded-bl-[200px]' src={image} alt="" />

            <div>
                <h3 className='text-2xl'>{name}</h3>
                <p>{recipe}</p>
            </div>

            <p className='text-orange-400 text-xl'>${price}</p>

        </div>
    );
};

export default MenuCard;
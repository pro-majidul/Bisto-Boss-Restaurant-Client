import React, { useEffect, useState } from 'react';
import MenuCard from '../shared/MenuCard';

const OurMenu = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {

                const popularmenu = data.filter(item => item.category === 'popular')
                console.log(data);
                setItems(popularmenu)
            })
    }, [])
    return (
        <div className='grid md:grid-cols-2 gap-10 space-y-4'>
            {
                items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
            }
        </div>
    );
};

export default OurMenu;
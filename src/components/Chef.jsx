import React, { useEffect, useState } from 'react';
import Card from '../shared/Card';

const Chef = () => {

    const [salads, setSalads] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const salad = data.filter(items => items.category === 'salad')
                setSalads(salad.slice(0,3))
            })
    }, [])
    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {salads.map(salad => <Card key={salad._id} salad={salad}></Card>)}
        </div>
    );
};

export default Chef;
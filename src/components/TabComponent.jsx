import React from 'react';
import Card from '../shared/Card';

const TabComponent = ({salad}) => {
    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {
                salad.map(slad => <Card key={slad._id} salad={slad}></Card>)
            }
        </div>
    );
};

export default TabComponent;
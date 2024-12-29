import React from 'react';
import Section from '../shared/Section';
import featureimg from '../assets/home/featured.jpg'
import './feature.css'
const Features = () => {
    return (
        <div className='feature my-10 bg-fixed py-10 rounded-xl'>
            <div className='my-5 py-5'>
                <Section subHeading='check it Out' heading='From Features Menu'></Section>
            </div>

            <div className='md:flex items-center gap-5 md:px-20 justify-center '>
                <img className='md:w-6/12 ' src={featureimg} alt="" />
                <div className='bg-black bg-opacity-25 p-6 text-white rounded-xl'>
                    <h3 className='uppercase text-2xl'>March 20, 2030</h3>
                    <h5 className='uppercase text-xl'>Where Can I Get Some</h5>
                    <p className='my-3'>Seamlessly utilize sticky portals after bricks-and-clicks systems. Appropriately administrate client-centric testing procedures rather than interactive ideas. Interactively streamline revolutionary interfaces rather than focused human capital. Proactively incentivize integrated total linkage via.</p>
                    <button className="btn btn-outline border-0 border-b-2 rounded-xl text-lg font-semibold  uppercase">Read More</button>
                </div>
            </div>

        </div>
    );
};

export default Features;
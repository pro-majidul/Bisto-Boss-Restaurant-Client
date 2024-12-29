import React from 'react';

const Section = ({ heading, subHeading }) => {
    return (
        <div>
            <p className='text-yellow-300 italic text-center underline underline-offset-16 decoration-gray-700  decoration-wavy'>
                --{subHeading}--
            </p>
            <h3 className='text-center  md:text-3xl text-xl uppercase my-8 text-orange-400 font-light underline underline-offset-16 decoration-gray-700  decoration-wavy'>
                {heading}
            </h3>
        </div>
    );
};

export default Section;
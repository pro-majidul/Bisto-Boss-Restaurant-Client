import React from 'react';
import { Parallax } from 'react-parallax';



const ParallaxCard = ({ title,img, subTitle }) => {
    return (
        <section>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={img}
                bgImageAlt="menu Banner Image"
                strength={-200}
            >
                <div className="hero  min-h-[600px]">
                    <div className='hero-content bg-black bg-opacity-35 w-10/12 mx-auto m-6  p-6 text-center'>
                        <div className='max-w-4xl py-5'>
                            <h1 className='mb-5 md:text-5xl text-2xl font-bold font-Cinzel text-white'>
                                {title}
                            </h1>
                            <p className='mb-5 text-white text-xl'>
                                {subTitle}
                            </p>
                        </div>
                    </div>
                </div>
            </Parallax>

        </section>
    );
};

export default ParallaxCard;
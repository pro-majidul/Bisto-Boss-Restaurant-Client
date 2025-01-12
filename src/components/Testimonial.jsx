import React, { useEffect, useState } from 'react';
import Section from '../shared/Section';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { RiDoubleQuotesL } from 'react-icons/ri';

const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://bistro-boss-restaurant-server-dusky.vercel.app/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className='my-5 py-5'>
            <Section subHeading='What Our Client Says' heading='Testimonial'></Section>

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className='flex space-y-3 flex-col items-center'>
                                <Rating style={{ maxWidth: 200 }} value={review.rating} readOnly />
                                <RiDoubleQuotesL size={66} color='black' />
                                <p className='w-8/12 mx-auto'>{review.details}</p>
                                <h3 className='text-orange-500 font-medium text-xl'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;
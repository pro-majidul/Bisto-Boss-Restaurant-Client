import React from 'react';
import Card from '../shared/Card';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const TabComponent = ({ salad }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-5'>
                        {
                            salad.map(slad => <Card key={slad._id} salad={slad}></Card>)
                        }
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default TabComponent;
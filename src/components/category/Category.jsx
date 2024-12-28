// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './style.css'
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'

// import required modules
import { Pagination } from 'swiper/modules'

const Category = () => {
  return (
    <div className='bg-white shadow-sm rounded-xl'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <p className='uppercase text-center text-3xl font-medium -mt-12 shadow-xl font-Cinzel'>salad</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <p className='uppercase text-center text-3xl font-medium -mt-12 shadow-xl font-Cinzel'>Soups</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <p className='uppercase text-center text-3xl font-medium -mt-12 shadow-xl font-Cinzel'>Pizzas</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <p className='uppercase text-center text-3xl font-medium -mt-12 shadow-xl font-Cinzel'>Deserts</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <p className='uppercase text-center text-3xl font-medium -mt-12 shadow-xl font-Cinzel'>salad</p>
        </SwiperSlide>
       
      </Swiper>
    </div>
  )
}

export default Category

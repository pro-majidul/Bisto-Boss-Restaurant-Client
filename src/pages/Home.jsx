import React from 'react'
import Banner from '../components/banner/Banner'
import Category from '../components/category/Category'
import Bistro from '../components/Bistro'
import PopularMenu from '../components/PopularMenu'
import Chef from '../components/Chef'

const Home = () => {
  return (
    <section>
      {/* banner Section */}
      <section>
        <Banner></Banner>
      </section>

      {/* Category Section */}
      <section className='md:my-10 md:py-10 py-5 my-5 '>
        <p className='text-yellow-300 italic text-center underline underline-offset-16 decoration-gray-700  decoration-wavy'>
          --From 11:00am to 10:00pm--
        </p>
        <h3 className='text-center  text-3xl uppercase my-8 text-orange-400 font-light underline underline-offset-16 decoration-gray-700  decoration-wavy'>
          Order online
        </h3>

        <div className='py-5 my-5'>
          <Category></Category>
        </div>
      </section>

      {/* Bistro Section  */}
      <section className='mb-5'>
        <Bistro></Bistro>
      </section>


      {/* Popular Menu Section  */}

      <section className='md:my-10 md:py-10 py-5 my-5 '>
        <p className='text-yellow-300 italic text-center underline underline-offset-16 decoration-gray-700  decoration-wavy'>
          --Check it Out--
        </p>
        <h3 className='text-center  text-3xl uppercase my-8 text-orange-400 font-light underline underline-offset-16 decoration-gray-700  decoration-wavy'>
          From Our Popular Menu
        </h3>

        <div className='mt-5'>
          <PopularMenu></PopularMenu>
        </div>
        <div className='flex items-center justify-center mt-5'>
          <button className="text-lg font-light border-b-4 rounded-xl text-orange-700 hover:bg-[#5B4C3E] p-4 border-black  uppercase">View Full Menu</button>
        </div>
      </section>

      {/* Call us Section  */}
      <section>
        <div className='bg-black h-32 md:h-64 flex items-center justify-center '>
          <p className='font-Raleway text-center text-xl md:text-3xl text-white'>Call Us: +88 0192345678910</p>
        </div>
      </section>

      {/* Chef Recomended Section  */}
      <section className='my-5 py-5'>
        <p className='text-yellow-300 italic text-center underline underline-offset-16 decoration-gray-700  decoration-wavy'>
          --Should Try--
        </p>
        <h3 className='text-center  text-3xl uppercase my-8 text-orange-400 font-light underline underline-offset-16 decoration-gray-700  decoration-wavy'>
          Chef Recommended
        </h3>

        <Chef></Chef>
      </section>
    </section>
  )
}

export default Home

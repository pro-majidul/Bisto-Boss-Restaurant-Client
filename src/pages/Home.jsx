import React from 'react'
import Banner from '../components/banner/Banner'
import Category from '../components/category/Category'

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section className='md:my-10 md:py-10 py-5 my-5 '>
        <p className='text-yellow-300 italic text-center underline underline-offset-16 decoration-gray-700  decoration-wavy'>
          --From 11:00am to 10:00pm--
        </p>
        <h3 className='text-center  text-3xl uppercase my-8 text-orange-400 font-light underline underline-offset-16 decoration-gray-700  decoration-wavy'>
          Order online{' '}
        </h3>

        <div className='py-5 my-5'>
          <Category></Category>
        </div>
      </section>
    </div>
  )
}

export default Home

import React from 'react'
import bgImage1 from '../assets/home/chef-service.jpg'

const Bistro = () => {
  return (
    <div>
      <div
        className={`hero min-h-[calc(80vh-320px)]`}
        style={{
          backgroundImage: `url(${bgImage1})`,
          opacity: 1,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className='hero-content bg-white w-10/12 mx-auto m-6  p-6 text-center'>
          <div className='max-w-4xl py-5'>
            <h1 className='mb-5 md:text-5xl text-2xl font-normal font-Cinzel text-black'>
              Bistro Boss
            </h1>
            <p className='mb-5'>
              Competently conceptualize optimal methods of empowerment without
              cross functional sources. Quickly synthesize worldwide web
              services rather than parallel core competencies. Objectively
              evisculate enterprise-wide technologies rather than seamless
              testing procedures. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bistro

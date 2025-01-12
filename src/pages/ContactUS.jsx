import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';
import Parallax from '../shared/ParallasCard';
import contactImg from '../assets/contact/banner.jpg'
import Section from '../shared/Section';
import LocationCard from '../components/locationCard';
import { FaLocationArrow } from 'react-icons/fa';
import { toast } from 'react-toastify';


const ContactUS = () => {



    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_eafjio7', 'template_6hn9vvd', form.current, {
                publicKey: 'zTJh8Dk6Sk51W-Uy8',
            })
            .then(
                () => {
                    // console.log('SUCCESS!');
                    toast.success('Message Send Successfully')
                    
                },
                (error) => {
                    // console.log('FAILED...', error.text);
                    toast.error(`${error.text}`)
                },
            );
    };

    return (
        <section className='mb-5 pb-5'>
            <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>

            <div>
                <Parallax title='Contact Us' img={contactImg} subTitle='Would you like to try a dish?'></Parallax>
            </div>
            <div className='my-5 py-5 md:my-10 md:py-10'>
                <Section subHeading='Visite US' heading='Our Location'></Section>
                <br />
                <LocationCard></LocationCard>

            </div>
            <div className='my-5 py-5 md:my-10 md:py-10'>
                <Section subHeading='Send Us a Message' heading='Contact Form'></Section>
            </div>
            <div className='bg-[#F3F3F3] p-16' >
                <form ref={form} onSubmit={sendEmail} className='w-full space-y-3'>
                    <div className='flex w-full gap-8 justify-center items-center'>
                        <div className='w-full'>
                            <label htmlFor="name" className="block mb-2 text-sm">Name*</label>
                            <input type="text" name="form_name" id="name" placeholder="Enter Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="email" className="block mb-2 text-sm">Email*</label>
                            <input type="email" name="form_email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm">Phone*</label>
                        <input type="phone" name="phone" id="phone" placeholder="Enter Your Phone Number" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>

                    <div className='pt-4'>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea rows="5" name='message' className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"></textarea>
                        </label>
                    </div>
                    <div className='flex items-center justify-center  pt-12'>
                        <button className=" bg-gradient-to-r from-amber-800 to-amber-600 text-white px-4 flex items-center py-3 gap-2 ">Send Message <FaLocationArrow /></button>
                    </div>
                </form>

            </div>

        </section>
    );
};

export default ContactUS;
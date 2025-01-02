import React from 'react';
import { Helmet } from 'react-helmet-async';
import Parallax from '../shared/ParallasCard';
import contactImg from '../assets/contact/banner.jpg'
import Section from '../shared/Section';
import LocationCard from '../components/locationCard';


const ContactUS = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>

            <div>
                <Parallax title='Contact Us' img={contactImg} subTitle='Would you like to try a dish?'></Parallax>
            </div>
            <div className='my-5 py-5 md:my-10 md:py-10'>
                <Section subHeading='Visite US' heading='Our Location'></Section>
                <LocationCard></LocationCard>

            </div>

        </div>
    );
};

export default ContactUS;
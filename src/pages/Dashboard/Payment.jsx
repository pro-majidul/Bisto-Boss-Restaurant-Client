import React from 'react';
import Section from '../../shared/Section';

import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';



//added publisher key in here
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Stricke_key)
const Payment = () => {
    return (
        <div>
            <Section heading='Payment' subHeading='Please Payment for buy'></Section>
            <Elements stripe={stripePromise} >
                <CheckOutForm></CheckOutForm>
            </Elements>

        </div>
    );
};

export default Payment;
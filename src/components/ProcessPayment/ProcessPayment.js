import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';


const ProcessPayment = () => {
    const stripePromise = loadStripe('pk_test_51Hf18MBKGbmc8Bw8G2dYSdcRH0gpOumO382grbGBwxriXz4jCFWnD6bUFWwTJjmeogWQp1ZSVJ6f9OBQfqi7LhFQ00E3aCygMF');

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default ProcessPayment;
import React, { useState } from 'react';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';



const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess(null)
        } else {
            setPaymentSuccess(paymentMethod)
            setPaymentError(null);
        }


    };

    return (
        <div>
            <p style={{ color: 'red', fontSize: '14px' }}> {paymentError} </p>
            {paymentSuccess && <p style={{ color: 'green', fontSize: '14px' }}> Payment Successfully done</p>}
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" className="btn btn-rounded btn-danger mt-3" disabled={!stripe}>
                    Pay
                    </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
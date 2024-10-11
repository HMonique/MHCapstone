import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('sk_test_51Q7hS507RpII5u9jNxRV56Pf3j7x7hHTJlvf8kdPprt17zOvYsZsA6MErbnryk2OKAVxyZaLJeBL4K6rnY9tVva000KuvdD60t');

const StripeProvider = ({ children }) => {
    return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
// import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe('pk_test_51Q7hS507RpII5u9jBo8GT0XHS1hwTUqVq3y215jSdrx47M0UMVbWsnMNX5bqBH6YT1PeLEsuKuUxaLFm2BHMxU0P00HbxXCQI7');

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret, setClientSecret] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });

//     if (error) {
//       console.error(error);
//     } else if (paymentIntent.status === 'succeeded') {
//       console.log('Payment succeeded!');
//     }
//   };

//   const createPaymentIntent = async () => {
//     const response = await fetch('/api/payment/create-payment-intent', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ amount: 1000 }), // Amount in cents
//     });
//     const data = await response.json();
//     setClientSecret(data.clientSecret);
//   };

//   return (
//     <Elements stripe={stripePromise}>
//       <form onSubmit={handleSubmit}>
//         <CardElement />
//         <button type="submit" disabled={!stripe || !elements}>
//           Pay
//         </button>
//       </form>
//       <button onClick={createPaymentIntent}>Create Payment Intent</button>
//     </Elements>
//   );
// };

// export default PaymentForm;
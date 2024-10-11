// import React from 'react'
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'


// const Checkout = () => { 
//     const stripe = useStripe()
//     const elements = useElements()
    
//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             return;
//         }

//         const CardElement = elements.getElement(CardElement);

//         const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', CardElement });
        
//         if (error) {
//           console.error(error);          
//         } else {
//             console.log(paymentMethod);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <CardElement />
//             <button type="submit" disabled={!stripe}>Pay</button>
//         </form>
//     );
// };
   
// export default Checkout
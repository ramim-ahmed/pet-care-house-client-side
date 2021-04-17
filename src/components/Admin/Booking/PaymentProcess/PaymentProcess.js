import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentCard from './PaymentCard';

const stripePromise = loadStripe('pk_test_51IgrMbAx5hd9qibWQT1pt98Lx7HVnNadLJBizFsQiKRVVnDdcv91mDZXatJ04oon8MKjyc9hnOJSr0EaY7OYQ2cv00jkAMb5Zp');

const PaymentProcess = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
             <PaymentCard handlePayment = {handlePayment}/>
        </Elements>
    );
};

export default PaymentProcess;
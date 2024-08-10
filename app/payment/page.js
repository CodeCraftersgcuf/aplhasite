'use client';
import React from 'react';
import './payment.css';
import NoHeaderWrapper from '@/components/NoHeaderWrapper';
import PaymentDetails from '@/components/Payment-subcomponents/PaymentDetails';
import OrderCheckout from '@/components/Payment-subcomponents/OrderCheckout';
const payment = () => {
  const hanldeSubmit = async (formData) => {
    const inputs = Object.fromEntries(formData.entries());
    const options = formData.getAll('options');
    const data = { inputs, options };
    console.log(data);
  };

  const hanldeApply = (formData) => {
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <NoHeaderWrapper>
      <div className="bg-white h-full w-full">
        <div className="flex xl:flex-nowrap flex-wrap justify-start ms-9 me-9 lg:ms-24">
          <PaymentDetails onSubmit={hanldeSubmit} />
          <OrderCheckout onApply={hanldeApply} />
        </div>
      </div>
    </NoHeaderWrapper>
  );
};

export default payment;

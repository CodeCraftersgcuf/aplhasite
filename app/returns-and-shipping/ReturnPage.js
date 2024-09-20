'use client';
import WithHeaderWrapper from '@/components/WithHeaderWrapper';
import React from 'react';

const ReturnsAndShipping = ({ responseData }) => {
  return (
    <WithHeaderWrapper categories={responseData && responseData}>
      <div className="mt-24 p-6 md:p-8 text-gray-800 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Returns & Shipping Policy
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          Returns & Warranties
        </h2>
        <p className="mb-4">
          Defective items may be returned within 30 days of the delivery date
          (some exclusions apply, e.g., E-Liquids).
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          Shipping & Delivery
        </h2>
        <p className="mb-4">
          We strive for timely shipping but cannot guarantee timeframes.
          Processing takes 1-2 business days.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          Incorrect/Damaged/Missing Products
        </h2>
        <p className="mb-4">Claims must be made within 7 days of delivery.</p>
      </div>
    </WithHeaderWrapper>
  );
};

export default ReturnsAndShipping;

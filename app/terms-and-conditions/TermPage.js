'use client';
import WithHeaderWrapper from '@/components/WithHeaderWrapper';
import React from 'react';

const TermsAndConditions = ({ responseData }) => {
  return (
    <WithHeaderWrapper categories={responseData && responseData}>
      <div className="mt-24 p-6 md:p-8 text-gray-800 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
        <h1 className="text-gray-800 text-2xl md:text-3xl font-semibold text-center mb-6">
          HYBRID TERMS AND CONDITIONS
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4">
          By accessing and using Pang3a.com ("the Site"), you accept and agree
          to be bound by the terms and provisions of this agreement. In order to
          purchase products from the Site, you must be 21 years old or older.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          2. Intellectual Property
        </h2>
        <p className="mb-4">
          All content included on the Site, such as text, graphics, logos,
          images, is the property of Pang3a LLC and protected by copyright laws.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          3. Limitations of Liability
        </h2>
        <p className="mb-4">
          Pang3a LLC is not liable for any damages that may occur from the use
          of our site or from any information, content, materials, products
          included on the Site.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          4. User Responsibilities
        </h2>
        <p className="mb-4">
          Users agree not to use the Site for any illegal activities and to
          comply with all applicable laws and regulations while using the Site.
          All customers are responsible for reporting, collecting, and remitting
          any applicable taxes.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          5. Termination
        </h2>
        <p className="mb-4">
          Pang3a LLC reserves the right to terminate access to the Site for
          users who violate these Terms.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          6. Shipping and Delivery
        </h2>
        <p className="mb-4">
          We will make our best effort to ship items in a timely manner but
          cannot guarantee any shipping timeframes due to external forces that
          may cause delays in shipping. Processing time for orders can take 24
          to 48 hours (1 to 2 Business Days).
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          7. Incorrect/Damaged/Missing Products
        </h2>
        <p className="mb-4">
          Claims for incorrect, damaged, or missing products must be made within
          seven days of the delivery date as indicated by your tracking
          information.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          8. Returns and Warranties
        </h2>
        <p className="mb-4">
          Defective items may be returned within thirty days of the delivery
          date as indicated by your tracking information. Please note that some
          items, including but not limited to E-Liquids, are not returnable.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          9. Privacy Policy
        </h2>
        <p className="mb-4">
          Your privacy is important to us. Your information is used internally
          and is never sold or shared with any other companies.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          10. Disclaimer of Warranties; Limitation of Liability
        </h2>
        <p className="mb-4">
          We disclaim all warranties, including, but not limited to, implied
          warranties of merchantability and fitness for a particular purpose. We
          will not be liable for any damages of any kind arising from the use of
          the Site.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          11. Changes to Terms & Conditions
        </h2>
        <p className="mb-4">
          We reserve the right, at our sole discretion, to update, change or
          replace any part of these Terms & Conditions. It is your
          responsibility to check our website periodically for changes. Your
          continued use of or access to our website following the posting of any
          changes constitutes acceptance of those changes.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          12. Governing Law
        </h2>
        <p className="mb-4">
          Any claim relating to Pang3a LLC's website shall be governed by the
          laws of the State of [Your State] without regard to its conflict of
          law provisions.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          13. Questions about Terms of Use
        </h2>
        <p className="mb-4">
          Please send any questions about Terms of Use to us at{' '}
          <a
            href="mailto:support@pang3a.com"
            className="text-gray-600 underline"
          >
            support@pang3a.com
          </a>
          .
        </p>

        <p className="mt-4">
          Pang3a LLC
          <br />
          [Your Business Address]
          <br />
          [Customer Support Contact Information]
          <br />✉{' '}
          <a
            href="mailto:support@pang3a.com"
            className="text-gray-600 underline"
          >
            Support@Pang3a.com
          </a>
        </p>

        <p className="mt-4 text-gray-600 italic">
          Please note: This is a hypothetical hybrid version of the Terms &
          Conditions, incorporating elements from both sets of terms provided.
          The legal language should be adjusted to fit your specific business
          model, and you should consult with your own legal counsel before using
          this as your official Terms & Conditions.
        </p>
      </div>
    </WithHeaderWrapper>
  );
};

export default TermsAndConditions;

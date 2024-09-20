'use client';

import WithHeaderWrapper from '@/components/WithHeaderWrapper';
import React from 'react';

const PrivacyPolicy = ({ responseData }) => {
  return (
    <WithHeaderWrapper categories={responseData && responseData}>
      <div className="mt-24 p-6 md:p-8 text-gray-800 shadow-md rounded-lg max-w-3xl mx-auto">
        <h1 className="text-2xl text-gray-800 md:text-3xl font-semibold text-center mb-6">
          Privacy Policy
        </h1>
        <p className="mb-4">
          This Privacy Policy elucidates how Pang3a LLC collects, uses, and
          safeguards any information you provide when using this website. Pang3a
          LLC is dedicated to ensuring your privacy is thoroughly protected.
          When asked to provide identifiable information while using this
          website, you can rest assured that it will be utilized in accordance
          with this Privacy Policy.
        </p>
        <p className="mb-6">
          We may periodically update this policy. Please check this page
          occasionally to ensure you agree with any changes. This policy is
          effective from June 25, 2023.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-2">We may collect the following information:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Name, address, telephone number, email address.</li>
          <li>
            Transaction information and payment details (credit card or debit
            card data is not stored).
          </li>
          <li>Details of your company during new account setup.</li>
          <li>
            Verification of business license or business status, as we only ship
            to verified businesses.
          </li>
          <li>Contact information including shipping and billing addresses.</li>
          <li>IP addresses for security purposes.</li>
          <li>Demographic information such as postal code.</li>
          <li>
            Other relevant information gathered through customer surveys and
            offers.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          2. Use of Information
        </h2>
        <p className="mb-2">
          The collected information is essential for providing a superior
          service. We use this data for:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Processing your orders and returns.</li>
          <li>Enhancing our products and services.</li>
          <li>
            Sending you periodic emails and SMS messages about new products,
            offers, and other information that may interest you.
          </li>
          <li>
            Conducting market research and customizing our website based on your
            interests.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          3. Protection of Information
        </h2>
        <p className="mb-4">
          We implement robust physical, electronic, and managerial measures to
          safeguard your information and prevent unauthorized access or
          disclosure.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">4. Cookies</h2>
        <p className="mb-4">
          We use cookies to provide a tailored browsing experience by analyzing
          web traffic and tracking your site preferences. You can choose to
          accept or decline cookies. Most web browsers automatically accept
          cookies, but you can modify your browser setting to decline them if
          you prefer.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          5. Your Rights
        </h2>
        <p className="mb-4">
          You can opt out of our marketing communications at any time.
          Furthermore, you can request the details of personal information we
          hold about you or ask us to correct any information you believe is
          incorrect or incomplete.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          6. Third-Party Websites
        </h2>
        <p className="mb-4">
          Our website may contain links to other websites. Please note that we
          do not exercise control over these sites, therefore, we cannot be
          responsible for the protection and privacy of any information you
          provide while visiting such sites.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          7. Contact Information
        </h2>
        <p className="mb-4">
          For any concerns about this policy or your personal information,
          please contact us at{' '}
          <a href="tel:949-229-0030" className="text-gray-600 underline">
            949-229-0030
          </a>{' '}
          or{' '}
          <a href="mailto:hi@pang3a.com" className="text-gray-600 underline">
            hi@pang3a.com
          </a>
          .
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          8. Policy Amendments
        </h2>
        <p className="mb-4">
          We reserve the right to modify this privacy policy at any time. Any
          changes will be reflected here, and we'll notify you by revising the
          date at the top of the policy and, when appropriate, provide
          additional notice.
        </p>

        <p>By using our website, you consent to our Privacy Policy.</p>
      </div>
    </WithHeaderWrapper>
  );
};

export default PrivacyPolicy;

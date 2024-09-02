import React from "react";
import Image from "next/image";
import PaymentTypeButtons from "./paymentDetails-subcomponents.jsx/PaymentTypeButtons";
import Link from "next/link";
import EmailSection from "./paymentDetails-subcomponents.jsx/EmailSection";
import DeliverySection from "./paymentDetails-subcomponents.jsx/DeliverySection";
import "@/app/payment/payment.css";
import Heading from "./paymentDetails-subcomponents.jsx/Heading";
import paypalWhite from "../../assets/paypal-white.svg";
import locksymbol from "../../assets/locksymbol1.png";
import shopImg from "../../assets/shop-img.png";
import pang3a from "@assets/Pang3aBlack.png";
import CreditCardInput from "./payment-radios/CreditCardInput";
import PaypalInput from "./payment-radios/PaypalInput";
import CheckBox from "./paymentDetails-subcomponents.jsx/CheckBox";
import FooterLinks from "./paymentDetails-subcomponents.jsx/FooterLinks";
import { RadioProvider } from "@/store/paymentTypeContext";

const PaymentDetails = ({ onReviewOrder }) => {
  return (
    // <div className="w-full lg:w-1/2">
    <div className="max-w-[710px] extrasmall:w-screen flex flex-wrap justify-center lg:justify-end ">
      <div className=" lg:p-[38px]  payment-insde  pe-12 sm:ps-0 sm:me-0 extrasmall:w-full extrasmall:pe-0 extrasmall:p-4 extrasmall:pr-4 sm:p-4">
        {/* <div className=" lg:p-[38px]  payment-insde  extrasmall:max-w-[300px]  pe-12 sm:ps-0 sm:me-0 sm:max-w-full"> */}
        <div className="w-[150px] h-[22px]  mb-[2.6rem]">
          <Image
            className="w-[350px] object-contain"
            src={pang3a}
            alt="Logo Here"
          />
        </div>

        <div className="flex  gap-3 items-center  mt-3 justify-center lg:flex-nowrap flex-wrap  ">
          <p className="text-center text-[#707070] text-[13px] font-normal">
            Express checkout
          </p>
        </div>

        <PaymentTypeButtons />

        <div className="or-sec flex justify-center mt-4">
          <p className="text-center text-[#707070] text-[13px]">OR</p>
        </div>

        <div className="flex justify-between  items-center mt-5">
          <Heading>CONTACT</Heading>
          <div>
            <Link
              href="/user/login"
              className="underline text-[13px] text-[#707070]"
            >
              Log in
            </Link>
          </div>
        </div>

        <div
          // action={onSubmit}
          className="flex flex-col sm:max-w-[650px] md:max-w-[700px] lg:max-w-[800px] "
        // className="flex flex-col  max-w-[500px] sm:max-w-[650px] md:max-w-[700px] lg:max-w-[800px] "
        >
          <EmailSection />
          <Heading>DELIVERY</Heading>

          <DeliverySection
            childType={"delivery"}
          />
          <div className="mt-8">
            <Heading>SHIPPING</Heading>

            <div className="bg-gray-100 text-gray-600 p-4 rounded-md mt-2 text-sm">
              Enter your shipping address to view available shipping methods.
            </div>
          </div>

          {/* Payment Section */}
          <div className="mt-8">
            <Heading>PAYMENT</Heading>
            <div className="text-sm text-gray-600 mt-2">
              All transactions are secure and encrypted.
            </div>

            {/* Payment Options Section */}
            <div className="mt-4">
              <CreditCardInput />
              <PaypalInput />
              <Heading>REMEMBER ME</Heading>
              <CheckBox value={"Remember me"} childType={'contact'} />

              <div className="flex justify-between  items-center">
                <div className="flex justify-start gap-2 items-center">
                  <Image src={locksymbol} alt="locksymbol"></Image>
                  <span className="text-xs">Secure and encrypted</span>
                </div>
                <Image src={shopImg} alt="shopImg"></Image>
              </div>
            </div>

            {/* PayPal Button Section */}
            <div className="mt-6 extrasmall:w-full md:max-w-[500px]">
              <button
                className="paypal-btn text-white py-4 px-6 rounded-md w-full text-lg flex flex-wrap justify-center items-center "
                type="submit"
              >
                <span>Pay with &nbsp; </span>
                <span>
                  <Image
                    src={paypalWhite}
                    alt="paypal"
                    className="paypalWhite"
                  ></Image>
                </span>
              </button>
              <button
                className="review-order-btn text-white py-4 px-6 rounded-md w-full text-lg mt-6"
                onClick={onReviewOrder}
              >
                Review order
              </button>
            </div>
          </div>
        </div>
        {/* Footer Links Section */}
        <FooterLinks />
      </div>
    </div>
    // </div>
  );
};

export default PaymentDetails;

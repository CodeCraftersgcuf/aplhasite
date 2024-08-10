import React from 'react'
import Image from 'next/image'
import PaymentTypeButtons from './PaymentTypeButtons'
import Link from 'next/link'
import EmailSection from './EmailSection'
import DeliverySection from './DeliverySection'
import '@/app/payment/payment.css'

//symbols imports
import alphaletelogo from '../../assets/alphalete-logo.png';

import paypalWhite from '../../assets/paypal-white.svg';
import locksymbol from '../../assets/locksymbol1.png';
import elo from '../../assets/elo.svg';
import discover from '../../assets/discover.svg';
import bank from '../../assets/bank.svg';
import unionpay from '../../assets/unionpay.svg';
import isymbol from '../../assets/i_symbol.png';
import shopImg from '../../assets/shop-img.png';
import phoneImage from '../../assets/phoneImage.png';
import shareSymbol from '../../assets/shareSymbol.png';
import visaico from '../../assets/visa.svg';
import mastercardico from '../../assets/mastercard.svg';
import masterredcardico from '../../assets/redmaster.svg';
import bluecard from '../../assets/bluecard.svg';

const PaymentDetails = ({ onSubmit }) => {
    return (
        <div className="payment-main flex flex-wrap justify-start lg:justify-end ">
            <div className=" lg:p-[38px]  payment-insde max-w-[700px]">
                <div className="w-[150px] h-[22px]  mb-[2.6rem]">
                    <Image
                        className="w-[150px] h-[22px] object-contain"
                        src={alphaletelogo}
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
                    <div>
                        <h1 className="input-heading text-black">CONTACT</h1>
                    </div>
                    <div>
                        <Link href="/user/login" className="underline text-[13px] text-[#707070]">
                            Log in
                        </Link>
                    </div>
                </div>

                <form action={onSubmit} className='flex flex-col'>
                    {/* Email Section */}
                    <EmailSection />

                    {/* Delivery Section */}
                    <div className="text-black mb-3 input-heading">DELIVERY</div>

                    <DeliverySection />
                    {/* Shipping Method Section */}
                    <div className="mt-8">
                        <div className="input-heading text-black text-[1rem]">
                            SHIPPING METHOD
                        </div>

                        <div className="bg-gray-100 text-gray-600 p-4 rounded-md mt-2 text-sm">
                            Enter your shipping address to view available shipping
                            methods.
                        </div>
                    </div>

                    {/* Payment Section */}
                    <div className="mt-8">
                        <div className="input-heading text-black">PAYMENT</div>
                        <div className="text-sm text-gray-600 mt-2">
                            All transactions are secure and encrypted.
                        </div>

                        {/* Payment Options Section */}
                        <div className="mt-4">
                            {/* Credit Card Option */}
                            <div className="flex items-center space-x-2 p-4 rounded-md1  ">
                                <div className="flex justify-between w-full">
                                    <label className="cursor-pointer text-[13px] flex items-center gap-3 space-x-2">
                                        <input
                                            type="radio"
                                            name="payment"
                                            className="h-4 w-4"
                                        />
                                        Credit card
                                    </label>
                                    <div className="flex items-center space-x-2 hover-div relative">
                                        {/* Add your icons here */}
                                        <Image src={visaico} alt="Visa" className="h-5" />
                                        <Image
                                            src={mastercardico}
                                            alt="MasterCard"
                                            className="h-5"
                                        />
                                        <Image
                                            src={masterredcardico}
                                            alt="MasterCard"
                                            className="h-5"
                                        />
                                        <Image src={bluecard} alt="BlueCard" className="h-5" />
                                        <span className="four-plus ps-2 pe-2 text-gray-500 rounded-md">
                                            +4
                                        </span>
                                        <div className="four-plus-div flex flex-wrap items-center ps-3 pe-3 rounded-md">
                                            <Image src={elo} alt="BlueCard" className="h-5" />
                                            <Image src={bank} alt="BlueCard" className="h-5" />
                                            <Image
                                                src={discover}
                                                alt="BlueCard"
                                                className="h-5"
                                            />
                                            <Image
                                                src={unionpay}
                                                alt="BlueCard"
                                                className="h-5"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-phone-div flex flex-col  pt-5 pb-4">
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="border ms-[17px] me-[17px] border-gray-300 w-[545px] in-p mobile-phone-input rounded-md pl-5"
                                    placeholder="Mobile phone number"
                                />
                                <Image
                                    className="phoneImage"
                                    src={phoneImage}
                                    alt="phoneImage"
                                ></Image>
                                <div className="ps-5 pe-5">
                                    <p className="text-red text-[13px] pt-3">
                                        The specified phone number does not match the expected
                                        pattern.
                                    </p>
                                    <p className="text-gray-500 text-[13px] pt-4 pe-5">
                                        Next time you check out here or on other stores powered
                                        by Shopify, you’ll receive a code by text message to
                                        securely purchase with Shop Pay.
                                    </p>
                                    <p className="text-gray-500 text-[12px] pt-5 flex felx-wrap">
                                        By continuing, you agree to Shop Pay’s&nbsp;
                                        <a href="#" className="flex items-center gap-1">
                                            <ins>Privacy Policy</ins>
                                            <Image src={shareSymbol} alt="shareSymbol"></Image>
                                        </a>
                                        &nbsp; and &nbsp;
                                        <a href="#" className="flex items-center gap-1">
                                            <ins>Terms of Service</ins>
                                            <span>
                                                <Image src={shareSymbol} alt="shareSymbol"></Image>
                                            </span>
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>

                            {/* PayPal Option */}
                            <div className="flex items-center space-x-2 p-4 border rounded-md ">
                                <div className="flex justify-between w-full">
                                    <label className="cursor-pointer text-[13px] flex items-center gap-3 space-x-2">
                                        <input
                                            type="radio"
                                            name="payment"
                                            className="h-4 w-4"
                                        />
                                        PayPal
                                    </label>
                                    <div class="w-[100px] h-[20px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            preserveAspectRatio="xMidYMid"
                                            viewBox="0 0 196 50"
                                            role="img"
                                            aria-label="PayPal"
                                            class="RULId"
                                        >
                                            <g clip-path="url(#paypal-logo_svg__a)">
                                                <path
                                                    fill="#253B80"
                                                    fill-rule="evenodd"
                                                    d="M62.268 11.182h10.816c3.62 0 6.346 1 7.884 2.893 1.4 1.723 1.863 4.183 1.379 7.315-1.074 7.157-5.186 10.769-12.31 10.769h-3.425c-.738 0-1.37.563-1.483 1.33l-1.18 7.837c-.116.767-.745 1.33-1.485 1.33H57.3c-.555 0-.979-.516-.892-1.09l4.375-29.055c.115-.766.745-1.33 1.485-1.33Zm5.634 14.678c2.867 0 5.833 0 6.424-4.066.217-1.428.043-2.462-.525-3.158-.952-1.166-2.794-1.166-4.748-1.166h-.748c-.442 0-.822.338-.89.797L66.27 25.86zM100.235 21.664h5.179c.554 0 .976.518.887 1.09l-2.799 18.571c-.117.767-.743 1.33-1.485 1.33h-4.665c-.552 0-.976-.516-.89-1.093l.232-1.507s-2.558 3.106-7.17 3.106c-2.686 0-4.945-.812-6.523-2.76-1.721-2.12-2.425-5.158-1.93-8.336.952-6.37 5.84-10.912 11.564-10.912 2.496 0 4.996.57 6.118 2.275l.362.55.23-1.517a.91.91 0 0 1 .89-.797m-7.884 15.74c2.996 0 5.344-2.08 5.844-5.18.226-1.501-.087-2.863-.876-3.839-.788-.966-1.984-1.478-3.454-1.478-2.95 0-5.338 2.15-5.804 5.223-.244 1.507.047 2.86.812 3.812.772.958 1.974 1.463 3.478 1.463Z"
                                                    clip-rule="evenodd"
                                                ></path>
                                                <path
                                                    fill="#253B80"
                                                    d="M132.999 21.663h-5.204c-.497 0-.963.259-1.245.69l-7.179 11.079-3.042-10.646c-.192-.666-.779-1.123-1.443-1.123h-5.114c-.622 0-1.054.636-.856 1.25l5.733 17.625-5.39 7.97c-.424.629.003 1.492.736 1.492h5.198c.493 0 .955-.252 1.235-.676l17.312-26.178c.414-.626-.011-1.483-.741-1.483"
                                                ></path>
                                                <path
                                                    fill="#179BD7"
                                                    fill-rule="evenodd"
                                                    d="M139.415 11.182h10.818c3.62 0 6.345 1 7.88 2.893 1.4 1.723 1.867 4.183 1.381 7.315-1.075 7.157-5.186 10.769-12.312 10.769h-3.423c-.738 0-1.369.563-1.483 1.33l-1.242 8.237c-.08.537-.521.93-1.037.93h-5.551c-.552 0-.976-.516-.889-1.09l4.375-29.055c.115-.766.744-1.33 1.483-1.33Zm5.642 14.678c2.869 0 5.835 0 6.425-4.066.216-1.428.044-2.462-.524-3.158-.952-1.166-2.796-1.166-4.748-1.166h-.748c-.444 0-.821.338-.889.797l-1.146 7.593zM177.383 21.663h5.176c.555 0 .979.52.894 1.09l-2.801 18.572c-.116.767-.745 1.33-1.484 1.33h-4.664c-.555 0-.979-.516-.892-1.093l.231-1.508s-2.557 3.107-7.169 3.107c-2.687 0-4.942-.812-6.524-2.76-1.72-2.12-2.421-5.158-1.928-8.336.953-6.37 5.84-10.912 11.563-10.912 2.496 0 4.995.57 6.116 2.275l.364.55.229-1.518a.91.91 0 0 1 .889-.797m-7.881 15.742c2.995 0 5.347-2.081 5.844-5.181.229-1.501-.084-2.863-.877-3.84-.787-.965-1.983-1.477-3.454-1.477-2.949 0-5.334 2.149-5.804 5.222-.24 1.508.048 2.862.813 3.813.772.957 1.977 1.463 3.478 1.463"
                                                    clip-rule="evenodd"
                                                ></path>
                                                <path
                                                    fill="#179BD7"
                                                    d="m188.67 11.979-4.44 29.588c-.087.573.337 1.09.889 1.09h4.463c.742 0 1.371-.563 1.485-1.33l4.378-29.055c.087-.573-.337-1.092-.889-1.092h-4.998c-.441.002-.82.34-.888.799"
                                                ></path>
                                                <path
                                                    fill="#253B80"
                                                    d="m11.493 48.304.827-5.504-1.842-.045H1.68L7.794 2.141a.54.54 0 0 1 .17-.318.5.5 0 0 1 .327-.126h14.834c4.925 0 8.324 1.073 10.098 3.193.832.994 1.362 2.032 1.618 3.176.27 1.2.274 2.632.011 4.38l-.019.128v1.12l.832.494c.7.39 1.258.835 1.685 1.345.711.85 1.172 1.93 1.366 3.211.2 1.317.134 2.885-.194 4.66-.38 2.04-.994 3.818-1.822 5.273-.763 1.34-1.734 2.452-2.887 3.314-1.1.818-2.408 1.44-3.887 1.837-1.433.391-3.067.588-4.859.588h-1.154c-.826 0-1.628.312-2.257.87a3.7 3.7 0 0 0-1.177 2.2l-.087.496-1.46 9.7-.067.357c-.018.112-.048.169-.092.207a.24.24 0 0 1-.152.058z"
                                                ></path>
                                                <path
                                                    fill="#179BD7"
                                                    d="M36.451 12.703q-.066.445-.152.911c-1.956 10.523-8.65 14.158-17.197 14.158h-4.353c-1.045 0-1.926.795-2.089 1.876l-2.228 14.805L9.8 48.65c-.106.709.416 1.349 1.099 1.349h7.72c.913 0 1.69-.696 1.834-1.64l.076-.412 1.453-9.662.094-.53c.142-.948.92-1.644 1.834-1.644h1.155c7.479 0 13.334-3.181 15.045-12.387.715-3.845.345-7.056-1.547-9.314-.572-.681-1.283-1.246-2.113-1.707Z"
                                                ></path>
                                                <path
                                                    fill="#222D65"
                                                    d="M34.4 11.847a15 15 0 0 0-1.902-.442c-1.173-.199-2.459-.293-3.836-.293H17.034c-.286 0-.558.068-.802.19-.536.27-.934.802-1.03 1.453l-2.475 16.413-.07.479c.162-1.08 1.043-1.876 2.089-1.876h4.352c8.548 0 15.241-3.637 17.197-14.158q.087-.466.152-.91a10 10 0 0 0-1.608-.712 15 15 0 0 0-.438-.144Z"
                                                ></path>
                                                <path
                                                    fill="#253B80"
                                                    d="M15.205 12.756a1.93 1.93 0 0 1 1.031-1.451c.245-.123.516-.19.802-.19h11.627c1.378 0 2.663.094 3.837.292a15 15 0 0 1 2.342.585q.867.3 1.609.711c.582-3.889-.005-6.536-2.012-8.934C32.228 1.13 28.235 0 23.125 0H8.29C7.247 0 6.356.795 6.195 1.877L.015 42.91c-.121.812.477 1.544 1.258 1.544h9.159l2.3-15.284z"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="paypal-logo_svg__a">
                                                    <path fill="#fff" d="M0 0h195.456v50H0z"></path>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="input-heading text-black text-[1rem] mt-4">
                                REMEMBER ME
                            </div>
                            <div className="flex flex-wrap flex-col items-start justify-center mb-4 border border-gray-300 pt-[17px] rounded-md">
                                <div className="">
                                    <label className="cursor-pointer text-[13px] flex items-center gap-3 space-x-2 mb-4 ps-[17px] pe-[17px]">
                                        <input
                                            type="checkbox"
                                            name='options'
                                            className="border-gray-100 h-4 w-4 save-num-chk"
                                            id="save-num-chk"
                                            value='Remember me'
                                        />
                                        Save my information for a faster checkout
                                    </label>
                                </div>

                                <div className="mobile-phone-div flex flex-col bg-gray pt-5 pb-4">
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="border ms-[17px] me-[17px] border-gray-300 w-[545px] in-p mobile-phone-input rounded-md pl-5"
                                        placeholder="Mobile phone number"
                                    />
                                    <Image
                                        className="phoneImage"
                                        src={phoneImage}
                                        alt="phoneImage"
                                    ></Image>
                                    <div className="ps-5 pe-5">
                                        <p className="text-red text-[13px] pt-3">
                                            The specified phone number does not match the expected
                                            pattern.
                                        </p>
                                        <p className="text-gray-500 text-[13px] pt-4 pe-5">
                                            Next time you check out here or on other stores
                                            powered by Shopify, you’ll receive a code by text
                                            message to securely purchase with Shop Pay.
                                        </p>
                                        <p className="text-gray-500 text-[12px] pt-5 flex felx-wrap">
                                            By continuing, you agree to Shop Pay’s&nbsp;
                                            <a href="#" className="flex items-center gap-1">
                                                <ins>Privacy Policy</ins>
                                                <Image src={shareSymbol} alt="shareSymbol"></Image>
                                            </a>
                                            &nbsp; and &nbsp;
                                            <a href="#" className="flex items-center gap-1">
                                                <ins>Terms of Service</ins>
                                                <span>
                                                    <Image
                                                        src={shareSymbol}
                                                        alt="shareSymbol"
                                                    ></Image>
                                                </span>
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between  items-center">
                                <div className="flex justify-start gap-2 items-center">
                                    <Image src={locksymbol} alt="locksymbol"></Image>
                                    <span className="text-xs">Secure and encrypted</span>
                                </div>
                                <Image src={shopImg} alt="shopImg"></Image>
                            </div>
                        </div>

                        {/* PayPal Button Section */}
                        <div className="mt-6">
                            <button
                                className="paypal-btn text-white py-4 px-6 rounded-md w-full text-lg flex flex-wrap justify-center items-center "
                                type='submit'
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
                            <button className="review-order-btn text-white py-4 px-6 rounded-md w-full text-lg mt-6">
                                Review order
                            </button>
                        </div>
                    </div>
                </form>
                {/* Footer Links Section */}
                <div className="flex justify-start space-x-4 text-sm mt-10 border-t-2">
                    <a href="#" className="text-gray-600 mt-3 underline">
                        Refund policy
                    </a>
                    <a href="#" className="text-gray-600 mt-3 underline">
                        Privacy policy
                    </a>
                    <a href="#" className="text-gray-600 mt-3 underline">
                        Terms of service
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PaymentDetails

import React, { useState } from 'react';
import logo from '@assets/Pang3aBlack.png'
import Image from 'next/image';

const AgeVerificationModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };
    const handleVerify = () => {
        //add verification logic
        handleClose();
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                >
                    <div className="relative bg-white rounded-lg shadow-md w-full max-w-lg mx-4 sm:mx-0 p-8">
                        <button
                            className='absolute top-4 right-4 text-gray-600 text-lg'
                            onClick={handleClose}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="px-6 py-4">
                            <div className="flex justify-center h-10 w-full">
                                <Image src={logo} width={170} height={200} alt="logo" />
                                {/* <h1 className="text-4xl font-bold">

                                    <span className="text-black">Pang</span>
                                    <span className="text-yellow-500">3</span>
                                    <span className="text-black">a</span>
                                </h1> */}
                            </div>
                            <h2 className="text-3xl text-black font-bold text-center mt-6">Welcome to our site</h2>
                            <p className="text-gray-600 text-center mt-4">Please, verify your age to enter</p>
                            <div className="flex justify-center mt-6">
                                <button
                                    className=" text-black font-extrabold py-2 px-6 rounded-full border border-black shadow-sm hover:bg-slate-300"
                                    onClick={handleVerify}

                                >
                                    I am 18 or older
                                </button>
                            </div>
                            <p className="text-gray-600 text-sm mt-4">
                                By entering this site you are agreeing to the Terms of Use and Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AgeVerificationModal;

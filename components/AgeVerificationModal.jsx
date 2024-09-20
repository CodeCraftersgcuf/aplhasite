import React, { useState } from 'react';
import logo from '@assets/Pang3aBlack.png'
import Image from 'next/image';
import { AnimatePresence, motion, useAnimate } from 'framer-motion'


const AgeVerificationModal = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [scope, animate] = useAnimate();


    const handleShake = () => {
        animate('#modal', { x: [-10, 0, 10, 0, -10, 0] }, { transition: { duration: 0.1 } });
    }
    const handleClose = () => {
        setIsOpen(false);
    };
    const handleVerify = () => {
        //add verification logic
        handleClose();
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center"
                        ref={scope}
                    >
                        <motion.div
                            className="relative bg-white border-2 border-gray-400 rounded-xl shadow-md w-full max-w-lg mx-4 sm:mx-0 p-8"
                            id="modal"
                            initial={{ opacity: 0, scale: 0.5, y: '20%' }}
                            animate={{ opacity: 1, scale: 1, y: '0%' }}
                            transition={{ duration: 0.5 }}
                            exit={{ opacity: 0, scale: 0.5, y: '20%' }}
                        >
                            <button
                                className='absolute top-4 right-4 text-gray-600 text-lg'
                                onClick={handleShake}

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
                                        className=" text-black font-extrabold py-2 px-6 rounded-full border border-black shadow-sm hover:bg-slate-100"
                                        onClick={handleVerify}

                                    >
                                        I am 18 or older
                                    </button>
                                </div>
                                <p className="text-gray-600 text-sm mt-4">
                                    By entering this site you are agreeing to the Terms of Use and Privacy Policy.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AgeVerificationModal;

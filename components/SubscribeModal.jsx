import React, { useState } from 'react';
import CustomAuthInput from './auth-input-subcomponents/CustomAuthInput';
import AuthInputButton from './auth-input-subcomponents/AuthInputButton';
import { useSelector } from 'react-redux';
import { isEmail, isNotEmpty } from '@/helpers/validationsFuncitons';

const SubscribeModal = () => {
    const [isOpen, setIsOpen] = useState(true);
    const data = useSelector((state) => state.authInputFn.subscribe)


    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            handleClose();
        }
    };
    // const submitAction = (formData) => {
    //     const data = Object.fromEntries(formData.entries())
    //     console.log(data)
    // }
    const hanldeSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 modal-backdrop"
                    onClick={handleOutsideClick}
                >
                    <div className="bg-white flex flex-col gap-3 rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-0 p-6">
                        <div className='flex flex-col'>
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg text-black font-bold">UNLOCK</h2>
                                <button
                                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
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
                            </div>
                            <p className="text-gray-700 text-3xl">10% OFF</p>

                        </div>
                        <div className='w-full h-[1px] bg-gray-300'></div>
                        <form onSubmit={hanldeSubmit} className="flex flex-col gap-2">
                            <CustomAuthInput
                                validFn={(value) => !isNotEmpty(value) || !isEmail(value)}
                                id='email'
                                type="email"
                                placeholder='liam@acme.com'
                                error={'Enter a valid email'}
                                childType={'subscribe'}
                            />
                            <div className='w-full h-[1px] bg-gray-300'></div>

                            <CustomAuthInput
                                validFn={(value) => !isNotEmpty(value)}
                                id='phone'
                                type="text"
                                placeholder='(123) 123-1234'
                                error={'Enter a valid phone number'}
                                childType={'subscribe'}
                            />
                            <div className='w-full h-[1px] bg-gray-300'></div>
                            <AuthInputButton>Subscribe</AuthInputButton>
                        </form>
                        <p className="text-gray-500 text-xs mt-2">
                            By signing up via text you agree to receive recurring automated marketing messages and recurring cart reminders at the phone number provided. Consent is not a condition of purchase. Reply STOP to unsubscribe, HELP for help. Msg & data rates may apply. View Privacy & Terms of Service.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default SubscribeModal;
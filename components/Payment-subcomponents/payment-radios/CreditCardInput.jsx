import React from 'react'
import Image from 'next/image'
import visaico from "@assets/visa.svg";
import mastercardico from "@assets/mastercard.svg";
import masterredcardico from "@assets/redmaster.svg";
import bluecard from "@assets/bluecard.svg";
import elo from "@/assets/elo.svg";
import discover from "@/assets/discover.svg";
import bank from "@/assets/bank.svg";
import unionpay from "@/assets/unionpay.svg";
import InputElement from '../paymentDetails-subcomponents.jsx/InputElement';
import { isNotEmpty } from '@/helpers/validationsFuncitons';
import { useRadio } from '@/store/paymentTypeContext';
import { motion, AnimatePresence } from 'framer-motion'

const CreditCardInput = () => {
    const { selectedPaymentOption, setSelectedPaymentOption } = useRadio()
    console.log(selectedPaymentOption)
    return (
        <div className="flex flex-col items-center space-x-2 p-4 rounded-md1">
            <div className="flex justify-between w-full">
                <label className="cursor-pointer text-[13px] flex items-center gap-3 space-x-2">
                    <input
                        type="radio"
                        name="creditCard"
                        className="h-4 w-4"
                        checked={selectedPaymentOption === 'creditCard'}
                        onChange={(e) => setSelectedPaymentOption(e.target.name)} />
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
                        <Image src={discover} alt="BlueCard" className="h-5" />
                        <Image src={unionpay} alt="BlueCard" className="h-5" />
                    </div>
                </div>
            </div>
            <AnimatePresence>
                <motion.div
                    className={`w-full ${selectedPaymentOption === 'creditCard' ? 'mt-4' : 'mt-0'}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: selectedPaymentOption === 'creditCard' ? 'auto' : 0, opacity: selectedPaymentOption === 'creditCard' ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    exit={{ height: 0, opacity: 0 }}
                >
                    <InputElement
                        childType={'creditCard'}
                        validFn={(value) => !isNotEmpty(value)}
                        type="number"
                        id="cardNumber"
                        error="Invalid Card number" />
                    <InputElement
                        childType={'creditCard'}
                        validFn={(value) => !isNotEmpty(value)}
                        type="text"
                        id="expirationDate"
                        error="Invalid expiration date" />
                    <InputElement
                        childType={'creditCard'}
                        validFn={(value) => !isNotEmpty(value)}
                        type="number"
                        id="CVC"
                        error="invalid CVC" />
                    <InputElement
                        childType={'creditCard'}
                        validFn={(value) => !isNotEmpty(value)}
                        type="text"
                        id="name"
                        error="Name on card is required" />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default CreditCardInput

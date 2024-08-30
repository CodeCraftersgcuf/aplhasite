import { useState } from 'react'
import Select from './Select'
import useInput from '@/hooks/useInput'
import { isEmail, isNotEmpty, isPasswordValid, hasMinLength, optionalInput } from '@/helpers/validationsFuncitons'
import InputElement from './InputElement'
import CheckBox from './CheckBox'
const DeliverySection = ({ childType }) => {
    return (
        <div className="">
            {/* Country/Region Section */}

            <div className="drop-down-div flex flex-col space-y-2 mb-4">
                <span className="country-span text-gray-400 text-[12px]">
                    Country/Region
                </span>

                <Select />
            </div>

            {/* Name Section */}
            <div className="flex space-x-4 mb-4 extrasmall:flex-col extrasmall:space-x-0 extrasmall:mb-0">
                <InputElement
                    childType={childType}
                    validFn={(value) => !isNotEmpty(value)}
                    type="text"
                    id="firstName"
                    error="First name is required" />
                <InputElement
                    childType={childType}
                    validFn={(value) => !isNotEmpty(value)}
                    type="text"
                    id="lastName"
                    error="Last name is required" />

                {/* <div className="flex flex-col space-y-2 w-1/2 extrasmall:w-full extrasmall:mb-4">
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="border border-gray-300  in-p rounded-md "
                        placeholder="Last name"
                    />
                </div> */}
            </div>

            {/* Company Section */}

            <InputElement
                childType={childType}
                validFn={(value) => !optionalInput(value)}
                type="text"
                id="company"
                error="company is required" />
            {/* Address Section */}
            <InputElement
                childType={childType}
                validFn={(value) => !isNotEmpty(value)}
                type="text"
                id="lastName"
                error="Last name is required" />
            <InputElement
                childType={childType}
                validFn={(value) => !isNotEmpty(value)}
                type="text"
                id="address"
                error="Address is required" />


            {/* Apartment, Suite, etc. Section */}
            <InputElement
                childType={childType}
                validFn={(value) => !optionalInput(value)}
                type="text"
                id="apartment"
                error="apartment is required" />


            {/* City and Postcode Section */}
            <div className="flex space-x-4 mb-4 extrasmall:flex-col extrasmall:items-start extrasmall:space-x-0 extrasmall:mb-0">
                <InputElement
                    childType={childType}
                    validFn={(value) => !isNotEmpty(value)}
                    type="text"
                    id="city"
                    error="city name is required" />
                <InputElement
                    childType={childType}
                    validFn={(value) => !optionalInput(value)}
                    type="number"
                    id="postalCode"
                    error="Postal Code is required" />
            </div>

            {/* Phone Section */}
            <InputElement
                childType={childType}
                validFn={(value) => !isNotEmpty(value)}
                type="tel"
                id="phone"
                error="Phone is required" />

            {/* News and Offers Section */}
            {/* <div className="flex items-center space-x-2 mb-4 border border-gray-300 p-2 rounded-md">
                <label className="text-[13px] flex items-center gap-3 space-x-2">
                    <input
                        type="checkbox"
                        name='options'
                        value='Text me with news and offers'
                        className="border-gray-100 h-4 w-4" />
                    Text me with news and offers
                </label>
            </div> */}
            <CheckBox value="Text me with news and offers" childType={childType} />
        </div>
    )
}

export default DeliverySection

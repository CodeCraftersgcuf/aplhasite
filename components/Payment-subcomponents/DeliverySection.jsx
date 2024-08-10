import React from 'react'
import Select from './Select'

const DeliverySection = () => {
    return (
        <>
            {/* Country/Region Section */}

            <div className="drop-down-div flex flex-col space-y-2 mb-4">
                <span className="country-span text-gray-400 text-[12px]">
                    Country/Region
                </span>

                <Select />
            </div>

            {/* Name Section */}
            <div className="flex space-x-4 mb-4">
                <div className="flex flex-col space-y-2 w-1/2">
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="border border-gray-300 in-p rounded-md "
                        placeholder="First name"
                    />
                </div>
                <div className="flex flex-col space-y-2 w-1/2">
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="border border-gray-300  in-p rounded-md "
                        placeholder="Last name"
                    />
                </div>
            </div>

            {/* Company Section */}
            <div className="flex flex-col space-y-2 mb-4">
                <input
                    type="text"
                    id="company"
                    name="company"
                    className="border border-gray-300  in-p rounded-md "
                    placeholder="Company (optional)"
                />
            </div>

            {/* Address Section */}
            <div className="flex flex-col space-y-2 mb-4">
                <input
                    type="text"
                    id="address"
                    name="address"
                    className="border border-gray-300  in-p rounded-md "
                    placeholder="Address"
                />
            </div>

            {/* Apartment, Suite, etc. Section */}
            <div className="flex flex-col space-y-2 mb-4">
                <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    className="border border-gray-300  in-p rounded-md "
                    placeholder="Apartment, suite, etc. (optional)"
                />
            </div>

            {/* City and Postcode Section */}
            <div className="flex space-x-4 mb-4">
                <div className="flex flex-col space-y-2 w-1/2">
                    <input
                        type="text"
                        id="city"
                        name="city"
                        className="border border-gray-300  in-p rounded-md "
                        placeholder="City"
                    />
                </div>
                <div className="flex flex-col space-y-2 w-1/2 mb-4">
                    <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        className="border border-gray-300  in-p rounded-md "
                        placeholder="Postcode"
                    />
                </div>
            </div>

            {/* Phone Section */}
            <div className="flex flex-col space-y-2 mb-4">
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="border border-gray-300  in-p rounded-md "
                    placeholder="Phone"
                />
            </div>

            {/* News and Offers Section */}
            <div className="flex items-center space-x-2 mb-4 border border-gray-300 p-2 rounded-md">
                <label className="text-[13px] flex items-center gap-3 space-x-2">
                    <input
                        type="checkbox"
                        name='options'
                        value='Text me with news and offers'
                        className="border-gray-100 h-4 w-4" />
                    Text me with news and offers
                </label>
            </div>

        </>
    )
}

export default DeliverySection

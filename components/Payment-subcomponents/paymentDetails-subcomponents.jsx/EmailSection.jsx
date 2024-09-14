import React from 'react'
import InputElement from './InputElement'
import { isNotEmpty, isEmail } from '@/helpers/validationsFuncitons'
import CheckBox from './CheckBox'

const EmailSection = ({ isLogin, email }) => {
    return (
        <>
            {isLogin ?
                <div className="relative flex flex-col space-y-2 w-1/2 extrasmall:w-full extrasmall:mb-4">
                    <input
                        type="email"
                        id="email" // Set a unique id or keep it as per your requirement
                        name="email"
                        value={email} // Pre-filled email value
                        readOnly // Make input unchangeable
                        className={`border placeholder:text-gray-500 text-gray-800 border-gray-300 bg-gray-200 rounded-md transition-all duration-200 ease-in-out pt-[27px] px-[10px] pb-1`}
                    // placeholder="Email"
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-3 top-1 text-sm text-gray-500 pointer-events-none transition-all duration-200 ease-in-out"
                    >
                        Email
                    </label>
                    {/* No error message here as `hasError` is not relevant for a read-only field */}
                </div>
                :
                <InputElement validFn={(value) => !isNotEmpty(value) || !isEmail(value)}
                    type="email"
                    id="email"
                    error="Enter a valid Email"
                    childType={'contact'}
                />
            }
            <CheckBox value='Email me with news and offers' childType={'contact'} />
        </>
    )
}

export default EmailSection

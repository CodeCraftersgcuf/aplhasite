import React from 'react'
import InputElement from './InputElement'
import { isNotEmpty, isEmail } from '@/helpers/validationsFuncitons'
import CheckBox from './CheckBox'

const EmailSection = () => {
    return (
        <>
            <InputElement validFn={(value) => !isNotEmpty(value) || !isEmail(value)}
                type="email"
                id="email"
                error="Enter a valid Email"
                childType={'contact'}
            />
            <CheckBox value='Email me with news and offers' childType={'contact'} />
            {/* <label className="flex items-center space-x-2 pt-4 pb-4 ">
                <input
                    type="checkbox"
                    name='options'
                    className="h-4 w-4 email-check"
                    value='Email me with news and offers'
                />
                <span className="text-sm">Email me with news and offers</span>
            </label> */}
            {/* </div> */}
        </>
    )
}

export default EmailSection

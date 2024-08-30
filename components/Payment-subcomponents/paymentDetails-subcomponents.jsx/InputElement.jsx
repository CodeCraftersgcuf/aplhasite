import React, { useEffect } from 'react'
import { isNotEmpty } from '@/helpers/validationsFuncitons'
import useInput from '@/hooks/useInput'
import { useDispatch } from 'react-redux'
import { paymentActions } from '@/store/slices/paymentInputs'

const InputElement = ({ validFn, type, id, error, childType }) => {
    const dispatch = useDispatch()
    const { setValueInBillingAddress, setValueInCreditCardDetails, setValueInDeliveryDetails, setValueInContact } = paymentActions
    const { enteredValue, handleChange, handleBlur, hasError } = useInput('', (value) => validFn(value))

    useEffect(() => {
        childType === 'delivery' && dispatch(setValueInDeliveryDetails({ key: id, value: enteredValue }))
        childType === 'billing' && dispatch(setValueInBillingAddress({ key: id, value: enteredValue }))
        childType === 'creditCard' && dispatch(setValueInCreditCardDetails({ key: id, value: enteredValue }))
        childType === 'contact' && dispatch(setValueInContact({ key: id, value: enteredValue }))
    }, [enteredValue])

    return (
        <div className="relative flex flex-col space-y-2 w-1/2 extrasmall:w-full extrasmall:mb-4">
            <input
                type={type}
                id={id}
                name={id}
                value={enteredValue}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border placeholder:text-gray-500 text-gray-800 ${hasError ? 'border-red-500' : 'border-gray-300'} rounded-md transition-all duration-200 ease-in-out ${enteredValue ? "pt-[27px] px-[10px] pb-1" : "in-p"}`}
                placeholder={!enteredValue ? `${id.charAt(0).toUpperCase() + id.slice(1)}` : ""}
            />
            {enteredValue && (
                <label
                    htmlFor={id}
                    className="absolute left-3 top-1 text-sm text-gray-500 pointer-events-none transition-all duration-200 ease-in-out"
                >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                </label>
            )}
            {hasError && <p className="text-sm text-red-500">{error}</p>}
        </div>
    )
}

export default InputElement

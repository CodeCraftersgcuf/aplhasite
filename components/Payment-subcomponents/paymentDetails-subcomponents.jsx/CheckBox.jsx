import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { paymentActions } from '@/store/slices/paymentInputs';

const CheckBox = ({ value, childType, }) => {
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(false);
    const { setValueInContact, setValueInDeliveryDetails } = paymentActions
    useEffect(() => {
        childType === 'contact' && dispatch(setValueInContact({ key: value, value: isChecked }))
        childType === 'delivery' && dispatch(setValueInDeliveryDetails({ key: value, value: isChecked }))
    }, [isChecked])
    // Handle the checkbox change
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        console.log(event.target.value)
    };
    return (
        <div className="flex items-center space-x-2 mb-4 border border-gray-300 p-2 rounded-md">
            <label className="text-[13px] flex items-center gap-3 space-x-2">
                <input
                    type="checkbox"
                    name="options"
                    value={value}
                    className="border-gray-100 h-4 w-4"
                    checked={isChecked} // Bind the state to the checkbox
                    onChange={handleCheckboxChange} // Update the state on change
                />
                {value}
            </label>
        </div>
    )
}

export default CheckBox
import React from 'react'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const ViewPasswordIco = ({ showPassword, setShowPassword }) => {
    return (
        <div className='absolute right-0 w-8 bottom-[1px] hover:cursor-pointer text-2xl'>
            {showPassword ? <IoMdEyeOff onClick={() => setShowPassword(false)} /> : <IoMdEye onClick={() => setShowPassword(true)} />}
        </div>
    )
}

export default ViewPasswordIco

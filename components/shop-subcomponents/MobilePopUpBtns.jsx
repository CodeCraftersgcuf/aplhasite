import React from 'react'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const MobilePopUpBtns = ({ isStyles, setStyles, setShowPopUp }) => {
    return (
        <div className='fixed left-0 bottom-10 z-20 flex justify-center items-center gap-6 w-full lg:hidden'>
            <div className="border border-gray-500 bg-black rounded-full w-fit p-1 flex justify-between items-center">
                <span
                    className={`inline-block text-white text-[11px] rounded-full px-7 py-2 hover:cursor-pointer ${isStyles ? 'bg-gray-700' : ''}`}
                    onClick={() => setStyles(true)}
                >
                    Styles
                </span>
                <span
                    className={`inline-block text-white text-[11px] rounded-full px-7 py-2 hover:cursor-pointer ${!isStyles ? 'bg-gray-700' : ''}`}
                    onClick={() => setStyles(false)}
                >
                    Flavors
                </span>
            </div>
            <div
                className='rounded-full overflow-hidden bg-black p-5'
                onClick={() => setShowPopUp(true)}
            >
                <HiAdjustmentsHorizontal className='text-2xl text-white' />
            </div>
        </div>

    )
}

export default MobilePopUpBtns

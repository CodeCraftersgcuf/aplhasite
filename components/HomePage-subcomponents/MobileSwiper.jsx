import React, { useState } from 'react'
import MobileProductSlide from '@/components/shop-subcomponents/MobileProductSlide'
import { DUMMY_ITEMS } from '@/utils'


const MobileSwiper = ({ data }) => {
    const [bgClicked, setBgClicked] = useState(false)
    return (
        <div className='w-screen flex gap-4 overflow-x-scroll scrollbar-hide px-6 lg:hidden'
            onClick={() => setBgClicked(true)}
        >
            {data.map((product, index) => (
                <div key={index} className='w-7/12 max-w-[230px] flex-shrink-0'>
                    <MobileProductSlide
                        vertical={true}
                        product={product}
                        bgClicked={bgClicked}
                        setBgClicked={setBgClicked}
                    />
                </div>
            ))}
            {/* {DUMMY_ITEMS.map((product, index) => (
                <div key={index} className='w-7/12 max-w-[230px] flex-shrink-0'>
                    <MobileProductSlide
                        vertical={true}
                        product={product}
                        bgClicked={bgClicked}
                        setBgClicked={setBgClicked}
                    />
                </div>
            ))} */}
        </div>
    )
}

export default MobileSwiper

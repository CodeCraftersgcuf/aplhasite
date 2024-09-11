import React, { useState } from 'react'
import LargeSwiperCardSkeleton from '../HomePage-subcomponents/LargeSwiperCardSkeleton'

const DummyProductSlide = ({ maxW }) => {
    const [maxWidth, setMaxWidth] = useState(maxW)
    console.log(maxW)
    return (
        <div className={`w-full !max-w-[${maxWidth}] ps-12`}>
            <div className='w-full mt-[30px] overflow-hidden relative'
                style={{ aspectRatio: '7/12' }}
            >
                <LargeSwiperCardSkeleton />
                {/* <div className="mt-[30px] relative w-full h-full">
            </div> */}
            </div>
        </div>
    )
}

export default DummyProductSlide

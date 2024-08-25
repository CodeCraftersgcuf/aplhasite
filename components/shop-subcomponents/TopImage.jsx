import React from 'react'
import Image from 'next/image'

const TopImage = () => {
    return (
        <div className='relative w-full h-[20vh] md:h-[30vh] lg:h-[40vh] overflow-hidden'>
            <Image
                className='absolute'
                src="https://alphalete.uk/cdn/shop/collections/m_sweater_b79c3787-15cf-4367-9f68-e29eb75bcf56_2500x1050_crop_center.jpg?v=1679098832"
                alt="image"
                layout="fill"
                objectFit="cover"
            />
        </div>
    )
}

export default TopImage

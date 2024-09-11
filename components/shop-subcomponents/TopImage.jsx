import React from 'react'
import Image from 'next/image'
import shopHero from '@assets/Shop.jpeg';

const TopImage = () => {
    return (
        <div className='relative w-full h-[30vh] md:h-[30vh] lg:h-[40vh] overflow-hidden'>
            <Image
                className='absolute'
                src={shopHero}
                alt="image"
                layout="fill"
                objectFit="cover"
                priority={true}
            />
        </div>
    )
}

export default TopImage

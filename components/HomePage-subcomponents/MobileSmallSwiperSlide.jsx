import Image from 'next/image';
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const MobileSmallSwiperSlide = ({ product }) => {
    const images = product?.item_data?.ecom_image_uris
    let imagesArray;
    if (images) {
        imagesArray = Object.values(images)
    }
    return (
        <div className="relative">
            <div
                className='relative w-full rounded-xl overflow-hidden flex items-center justify-center'
                style={{ aspectRatio: '4/5', backgroundColor: '#eeecec' }}
            >
                <Image
                    layout='responsive'
                    height={5}
                    width={4}
                    className="rounded-xl object-cover"
                    src={images && imagesArray[0]}
                    alt={`Slide`}
                />
            </div>
            <p className="absolute font-normal w-6 h-6 flex p-1 bg-slate-300 bg-opacity-45 justify-center items-center bottom-1 right-1 text-black text-xs rounded-full"
            // onClick={() => { setShowQuantity(true) }}
            >
                <FaPlus />
            </p>

        </div>
    )
}

export default MobileSmallSwiperSlide

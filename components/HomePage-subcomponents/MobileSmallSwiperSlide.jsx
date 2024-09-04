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
                className='relative w-full aspect-w-4 aspect-h-5 rounded-xl overflow-hidden'
            >
                <img
                    className="rounded-xl object-cover"
                    src={images && imagesArray[0]}
                    alt={`Slide`}
                />
            </div>
            <p className="absolute w-6 h-6 flex justify-center items-center bottom-0 right-0 text-black text-xs"
            // onClick={() => { setShowQuantity(true) }}
            >
                <FaPlus />
            </p>

        </div>
    )
}

export default MobileSmallSwiperSlide

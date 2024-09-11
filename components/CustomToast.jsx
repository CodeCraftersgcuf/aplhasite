import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import Image from 'next/image'; // Assuming you are using Next.js; otherwise, use <img />


const CustomToast = ({ product, quantity, adding, removing }) => {
    const images = product?.item_data?.ecom_image_uris
    const productPrice = product?.item_data?.variations[0]?.item_variation_data.price_money.amount / 100
    const productName = product?.item_data?.name
    const productType = product?.item_data?.product_type

    return (
        <div className="flex items-center bg-white p-4 border border-gray-300 rounded-lg shadow">
            {/* Image on the left */}
            <div className="flex-shrink-0 mr-3 h-16 overflow-hidden rounded-lg" style={{ aspectRatio: '4/5' }}>
                <Image
                    className='rounded-lg'
                    src={images && images[0]}
                    alt="image"
                    layout='responsive'
                    height={5} // Maintain aspect ratio
                    width={4}  // Maintain aspect ratio
                    objectPosition='center'
                    objectFit='cover'

                />
                {/* <img src={images && images[0]} alt="icon" className='rounded-lg object-cover' /> */}
                {/* <Image src={product.image[0]} alt="Icon" fill={true} className="rounded-md" /> */}
            </div>

            {/* Text in the middle */}
            <div className="flex-grow">
                <p className="font-bold text-black">{adding ? 'Added to Bag' : 'Removed from Bag'}</p>
                <p className="font-normal text-gray-400 text-sm max-w-96">{`${quantity ? quantity : ''} ${productName ? productName : ''}-${productType ? productType : ''}`}</p>
            </div>

            {/* Check icon on the right */}
            <div className="flex-shrink-0 ml-4 items-center">
                {adding && <FaCheckCircle className="text-black w-8 h-8" />}
                {removing && <IoIosCloseCircle className="text-black w-8 h-8" />}

            </div>
        </div>
    )
}

export default CustomToast;
import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import Image from 'next/image'; // Assuming you are using Next.js; otherwise, use <img />

const CustomToast = ({ product, quantity, adding, removing }) => (
    <div className="flex items-center bg-white p-4 border border-gray-300 rounded shadow">
        {/* Image on the left */}
        <div className="flex-shrink-0 mr-3">
            <Image src={product.image[0]} alt="Icon" width={40} height={40} className="rounded" />
            {/* <div className='w-12 h-16 rounded'>
            </div> */}
        </div>

        {/* Text in the middle */}
        <div className="flex-grow">
            <p className="font-bold text-black">{adding ? 'Added to Bag' : 'Removed from Bag'}</p>
            <p className="font-normal text-gray-400 text-sm">{`${quantity ? quantity : ''} ${product.name}-${product.color}`}</p>
        </div>

        {/* Check icon on the right */}
        <div className="flex-shrink-0 ml-4 items-center">
            {adding && <FaCheckCircle className="text-black w-8 h-8" />}
            {removing && <IoIosCloseCircle className="text-black w-8 h-8" />}

        </div>
    </div>
);

export default CustomToast;
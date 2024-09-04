import React, { useRef, useEffect } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { MdDelete, MdModeEdit } from "react-icons/md";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const MobileOrdersManagement = ({ addedItems, removeItem, onDecrement, onIncrement, height, topMargin, isOpen }) => {
    const lastElementRef = useRef();
    const containerRef = useRef(); // Ref to the container for managing scrolling
    const router = useRouter();

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        // Cleanup the class when component unmounts
        return () => {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    useEffect(() => {
        if (addedItems.length > 0) {
            lastElementRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [addedItems]);

    return (
        <div
            ref={containerRef}
            style={{ height: height }} // Set the height dynamically
            className={`mt-[54px] w-screen flex flex-col overflow-y-scroll scrollbar-hide text-white bg-black border border-slate-200 justify-between lg:hidden`}
        >
            {addedItems.length === 0 && <div className='flex h-72 text-gray-400 text-xl justify-center items-center'>No items in bag</div>}
            {addedItems.length > 0 && addedItems.map((item, index) => (
                //    const images = product?.item_data?.ecom_image_uris
                // const productPrice = product?.item_data?.variations[0]?.item_variation_data.price_money.amount
                // const productName = product?.item_data?.name
                // const productType = product?.item_data?.product_type
                <div key={index} className='h-[16rem] flex flex-col p-4 border border-b-slate-200'>
                    <div className='flex gap-4 p-4'>
                        <div className='w-24 max-h-[7.5rem] overflow-hidden border border-gray-400 rounded-lg'>
                            <img className='rounded-lg max-h-fit'
                                src={item.product?.item_data?.ecom_image_uris ? item.product?.item_data?.ecom_image_uris[0] : ''}
                                alt="image" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span>{item.product?.item_data?.name}</span>
                            <span className='text-sm text-gray-400'>
                                {`${item.product?.item_data?.product_type}`}
                                {/* {`${item.product.color} - ${item.size}`} */}
                            </span>
                            <span>
                                {`$${item.product?.item_data?.variations[0]?.item_variation_data.price_money.amount}`}
                            </span>
                            <span className='text-sm font-normal p-[0.15rem] border border-gray-400 w-12 text-center'>NEW</span>
                        </div>
                    </div>
                    <span className="block mx-auto w-[276px] h-px bg-gray-300"></span>
                    <div className='flex justify-between items-center p-4'>
                        <div className=" w-fit flex items-center space-x-2 px-[0.1rem] py-[0.1rem] rounded-full border border-gray-400">
                            <button
                                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-red-400 transition"
                                onClick={() => removeItem(item)}
                            >
                                <MdDelete className="text-gray-600 w-6" />
                            </button>
                            <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition">
                                <MdModeEdit className="text-gray-600 w-6" />
                            </button>
                        </div>
                        <span>{`$${(item.quantity * item.product?.item_data?.variations[0]?.item_variation_data.price_money.amount).toFixed(2)}`}</span>
                        <div className=" w-fit flex items-center space-x-2 px-[0.1rem] py-[0.1rem] rounded-full border border-gray-400">
                            <button
                                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition"
                                onClick={() => onDecrement(item)}
                            >
                                <FaMinus className="text-gray-600 w-3" />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition"
                                onClick={() => onIncrement(item)}
                            >
                                <FaPlus className="text-gray-600 w-3" />
                            </button>
                        </div>
                    </div>
                    {index === addedItems.length - 1 && <div ref={lastElementRef} />}
                </div>
            ))}
        </div>
    )
}

export default MobileOrdersManagement;

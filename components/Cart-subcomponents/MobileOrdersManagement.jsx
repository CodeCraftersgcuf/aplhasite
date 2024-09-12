import React, { useRef, useEffect } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { MdDelete, MdModeEdit } from "react-icons/md";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { itemsActions } from '@/store/slices/cartItems';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { CgDetailsMore } from "react-icons/cg";
import Image from 'next/image';

const MobileOrdersManagement = ({ addedItems, height, topMargin, isOpen }) => {
    const dispatch = useDispatch()
    const itemAddIndicator = useSelector(state => state.itemsFn.added)
    const lastElementRef = useRef();
    const containerRef = useRef(); // Ref to the container for managing scrolling
    const router = useRouter();

    const handleRemoveItem = (item) => {
        dispatch(itemsActions.removeItem(item))
    }
    const handleDecrement = (item) => {
        if (item.quantity === 1) {
            handleRemoveItem(item)
            return
        }
        dispatch(itemsActions.decrement(item))
    }
    const handleIncrement = (item) => {
        dispatch(itemsActions.increment(item))
    }

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
    }, [itemAddIndicator]);

    return (
        <div
            ref={containerRef}
            style={{ height: height }} // Set the height dynamically
            className={` w-screen flex h-full flex-col overflow-y-scroll scrollbar-hide text-black bg-white border border-slate-200 justify-between lg:hidden`}
        >
            {addedItems.length === 0 && <div className='flex h-72 text-gray-400 text-xl justify-center items-center'>No items in bag</div>}
            {addedItems.length > 0 && addedItems.map((item, index) => (
                //    const images = product?.item_data?.ecom_image_uris
                // const productPrice = product?.item_data?.variations[0]?.item_variation_data.price_money.amount
                // const productName = product?.item_data?.name
                // const productType = product?.item_data?.product_type
                <div key={index} className='flex flex-col p-4 border border-b-slate-200'>
                    <div className='flex gap-4 p-4'>
                        <div style={{ aspectRatio: '4/5' }} className='max-w-32 overflow-hidden border border-gray-400 flex items-center rounded-lg'>
                            {/* <div className='w-24 max-h-[7.5rem] overflow-hidden border border-gray-400 rounded-lg'> */}
                            <Image className='rounded-lg'
                                src={item.product?.item_data?.ecom_image_uris ? item.product?.item_data?.ecom_image_uris[0] : ''}
                                alt="image"
                                layout='responsive'
                                height={5}
                                width={4}
                                objectPosition='center'
                                objectFit='cover'
                            />

                        </div>
                        <div className='flex flex-col gap-2 text-xs'>
                            <span>{item.product?.item_data?.name}</span>
                            <span className='text-gray-400'>
                                {`${item.product?.item_data?.product_type}`}
                                {/* {`${item.product.color} - ${item.size}`} */}
                            </span>
                            <span>
                                {`$${((item.product?.item_data?.variations[0]?.item_variation_data.price_money.amount) / 100).toFixed(2)}`}
                            </span>
                            <span className='text-xs text-gray-500 font-normal p-[0.15rem] border-[1px] border-gray-400 w-12 rounded-md text-center shadow-md'>NEW</span>
                        </div>
                    </div>
                    <span className="block mx-auto w-[276px] h-px bg-gray-300"></span>
                    <div className='flex justify-between items-center p-4'>
                        <div className=" w-fit flex items-center space-x-2 px-[0.1rem] py-[0.1rem] rounded-full border border-gray-400">
                            <button
                                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-red-400 transition"
                                onClick={() => handleRemoveItem(item)}
                            >
                                <MdDelete className="text-gray-600 w-6" />
                            </button>
                            <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition">
                                <CgDetailsMore className="text-gray-600 w-6" />
                            </button>
                        </div>
                        <span>{`$${((item.quantity * item.product?.item_data?.variations[0]?.item_variation_data.price_money.amount) / 100).toFixed(2)}`}</span>
                        <div className=" w-fit flex items-center space-x-2 px-[0.1rem] py-[0.1rem] rounded-full border border-gray-400">
                            <button
                                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition"
                                onClick={() => handleDecrement(item)}
                            >
                                <FaMinus className="text-gray-600 w-3" />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition"
                                onClick={() => handleIncrement(item)}
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

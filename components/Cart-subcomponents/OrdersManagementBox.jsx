import React, { useRef, forwardRef, useEffect } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { MdDelete, MdModeEdit } from "react-icons/md";
import { motion } from 'framer-motion';
import { totalPrice } from '@/helpers/totalPrice';
import { useRouter } from 'next/navigation';



const cartPricingOverflow = [1, 2, 3, 4, 5]

const OrdersManagementBox = ({ addedItems, removeItem, onDecrement, onIncrement }) => {
    const lastElementRef = useRef()
    const router = useRouter()
    const handleSubmit = () => {
        //submit order to backend
        return router.push('/payment')
    }

    useEffect(() => {
        lastElementRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [addedItems])

    return (
        <motion.div className='hidden lg:flex lg:flex-col lg:w-3/12 md-[430px] text-black border border-gray-400 justify-between'>
            <div className='flex items-center justify-center h-20 border-b border-gray-400'>
                YOUR BAG
            </div>
            <div className='h-full overflow-y-scroll scrollbar-hide'>
                {addedItems.length === 0 && <div className='flex min-h-96 text-gray-400 text-xl justify-center items-center h-full'>No items in bag</div>}
                {addedItems.length > 0 && addedItems.map((item, index) => (
                    //    const images = product?.item_data?.ecom_image_uris
                    // const productPrice = product?.item_data?.variations[0]?.item_variation_data.price_money.amount
                    // const productName = product?.item_data?.name
                    // const productType = product?.item_data?.product_type
                    <div key={index} className='h-[auto] overflow-clip flex flex-col p-4 border border-b-gray-400'>
                        <div className='flex gap-4 p-4'>
                            <div
                                className=' max-w-[7.5rem] overflow-hidden border border-gray-400 rounded-lg flex items-center'
                                style={{ aspectRatio: '4/5' }}
                            >
                                <img className='rounded-lg object-fit'
                                    src={item.product?.item_data?.ecom_image_uris ? item.product?.item_data?.ecom_image_uris[0] : ''}
                                    alt="image" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-[12px]'>{item.product?.item_data?.name}</span>
                                <span className='text-xs text-gray-400'>
                                    {`${item.product?.item_data?.product_type}`}
                                    {/* {`${item.product.color} - ${item.size}`} */}
                                </span>
                                <span>
                                    {`$${item.product?.item_data?.variations[0]?.item_variation_data.price_money.amount}`}
                                </span>
                                <span className='text-xs font-normal p-[0.15rem] border-[2px] border-gray-400 w-12 rounded-md text-center'>NEW</span>
                            </div>
                        </div>
                        <span class="block mx-auto w-[276px] h-px bg-gray-300"></span>
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
            <div className='flex flex-col'>
                <div className='flex items-center justify-center h-12 border-t border-gray-400'>
                    Free Standard Shipping Unlocked
                </div>
                <div className='flex flex-col gap-3 border-y h-32 border-b border-gray-400 py-4 '>
                    <div className='flex justify-between px-6'>
                        <span>Total:</span>
                        <span>{`$${addedItems.length === 0 ? 0 : totalPrice(addedItems)}`}</span>
                    </div>
                    <div className='flex justify-center items-center'>
                        <motion.button
                            className='text-white text-[0.75rem] font-bold py-2 px-24 rounded-full bg-green-400'
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            onClick={handleSubmit}

                        >
                            CHECKOUT
                        </motion.button>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default OrdersManagementBox

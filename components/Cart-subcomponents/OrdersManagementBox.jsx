import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { MdDelete, MdModeEdit } from "react-icons/md";
import { motion } from 'framer-motion';
import { totalPrice } from '@/helpers/totalPrice';
import { useRouter } from 'next/navigation';


const cartPricingOverflow = [1, 2, 3, 4, 5]

const OrdersManagementBox = ({ addedItems, removeItem, onDecrement, onIncrement }) => {
    const router = useRouter()
    const handleSubmit = () => {
        //submit order to backend
        return router.push('/payment')
    }
    return (
        <div className='flex  flex-col lg:w-3/12 md-[430px] text-black border border-black justify-between'>
            <div className='flex items-center justify-center h-20 border-b border-black'>
                YOUR BAG
            </div>
            <div className='h-full overflow-y-scroll scrollbar-hide'>
                {addedItems.length === 0 && <div className='flex text-gray-400 text-xl justify-center items-center h-full'>No items in bag</div>}
                {addedItems.length > 0 && addedItems.map((item, index) => (
                    <div key={index} className='h-[16rem] overflow-clip flex flex-col p-4 border border-b-black'>
                        <div className='flex gap-4 p-4'>
                            <div className='w-24 max-h-[7.5rem] overflow-hidden border border-gray-400 rounded-lg'>
                                <img className='rounded-lg max-h-fit'
                                    src={item.product.image[0]}
                                    alt="image" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span>{item.product.name}</span>
                                <span className='text-sm text-gray-400'>
                                    {`${item.product.color} - ${item.size}`}
                                </span>
                                <span>
                                    {`£${item.product.price}`}
                                </span>
                                <span className='text-sm font-normal p-[0.15rem] border border-gray-400 w-12 text-center'>NEW</span>
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
                            <span>{`£${(item.quantity * item.product.price).toFixed(2)}`}</span>
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
                    </div>
                ))}

            </div>
            <div className='flex flex-col'>
                <div className='flex items-center justify-center h-12 border-t border-black'>
                    Free Standard Shipping Unlocked
                </div>
                <div className='flex flex-col gap-3 border-y h-32 border-b border-black py-4 '>
                    <div className='flex justify-between px-6'>
                        <span>Total:</span>
                        <span>{`£${addedItems.length === 0 ? 0 : totalPrice(addedItems)}`}</span>
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
        </div>
    )
}

export default OrdersManagementBox

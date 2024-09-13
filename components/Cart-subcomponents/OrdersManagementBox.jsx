import React, { useRef, forwardRef, useState, useEffect } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { MdDelete, MdModeEdit } from "react-icons/md";
import { AnimatePresence, motion } from 'framer-motion';
import { totalPrice } from '@/helpers/totalPrice';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import { CgDetailsMore } from "react-icons/cg";
import { modalActions } from '@/store/slices/openModel';
import { useDispatch } from 'react-redux';



const cartPricingOverflow = [1, 2, 3, 4, 5]

const OrdersManagementBox = ({ addedItems, removeItem, onDecrement, onIncrement, isOpen }) => {
    const dispatch = useDispatch()
    // const [isImgLoading, setIsImgLoading] = useState(true)
    const itemAddIndicator = useSelector(state => state.itemsFn.added)
    const lastElementRef = useRef()
    const router = useRouter()
    const handleSubmit = () => {
        //submit order to backend
        router.push('/payment')
        dispatch(modalActions.closeModal())
    }
    // useEffect(() => {
    //     // Reset image loading state when cart is opened
    //     if (isOpen) {
    //         setIsImgLoading(true);
    //     }
    // }, [isOpen]);

    useEffect(() => {
        lastElementRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [itemAddIndicator])

    const handleNavigateDetails = (item) => {
        router.push('/product-details/' + item.product.id)
        dispatch(modalActions.closeModal())
    }

    return (
        <motion.div className='hidden lg:flex lg:flex-col lg:w-3/12 md-[430px] text-black border border-gray-400 justify-between'>
            <div className='flex items-center justify-center h-20 border-b border-gray-400'>
                YOUR BAG
            </div>
            <motion.div className='h-full overflow-y-scroll scrollbar-hide'>
                {addedItems.length === 0 && <div className='flex min-h-96 text-gray-400 text-xl justify-center items-center h-full'>No items in bag</div>}
                <AnimatePresence>
                    {addedItems.length > 0 && addedItems.map((item, index) => (
                        //    const images = product?.item_data?.ecom_image_uris
                        // const productPrice = product?.item_data?.variations[0]?.item_variation_data.price_money.amount
                        // const productName = product?.item_data?.name
                        // const productType = product?.item_data?.product_type
                        <motion.div
                            key={item.product.id}
                            className='h-[auto] overflow-clip flex flex-col p-4 border border-b-gray-400'
                            layout
                            initial={{ opacity: 0 }} // Initial state (optional)
                            animate={{ opacity: 1 }}  // Animation in
                            exit={{ opacity: 0 }}
                        >
                            <div className='flex gap-4 p-4'>
                                <div
                                    className='max-w-[6.5rem] min-w-[6.5rem] overflow-hidden border border-gray-400 rounded-lg flex items-center'
                                    style={{ aspectRatio: '4/5' }}
                                >
                                    <Image
                                        className='rounded-lg'
                                        src={item.product?.item_data?.ecom_image_uris ? item.product?.item_data?.ecom_image_uris[0] : ''}
                                        alt="image"
                                        layout='responsive'
                                        height={5} // Maintain aspect ratio
                                        width={4}  // Maintain aspect ratio
                                        objectPosition='center'
                                        objectFit='cover'
                                    // onLoadingComplete={() => {
                                    //     setIsImgLoading(false)
                                    //     console.log('loaded')
                                    // }}

                                    />
                                    {/* )} */}
                                </div>

                                {/* {isImgLoading && <div className='w-7.5rem h-full'>
                                        <Skeleton height={'100%'} width={'100%'} />
                                    </div>} */}
                                <div className='flex flex-col gap-1'>
                                    <span className='text-[12px]'>{item.product?.item_data?.name}</span>
                                    <span className='text-xs text-gray-400'>
                                        {`${item.product?.item_data?.product_type}`}
                                        {/* {`${item.product.color} - ${item.size}`} */}
                                    </span>
                                    <span>
                                        {`$${(item.product?.item_data?.variations[0]?.item_variation_data.price_money.amount / 100).toFixed(2)}`}
                                    </span>
                                    <span className='text-xs text-gray-500 font-normal p-[0.15rem] border-[1px] border-gray-400 w-12 rounded-md text-center shadow-md'>NEW</span>
                                </div>
                            </div>
                            <span class="block mx-auto w-[276px] h-px bg-gray-300"></span>
                            <div className='flex justify-between items-center p-4'>
                                <div className=" w-fit flex items-center space-x-2 px-[0.1rem] py-[0.1rem] rounded-full border border-gray-400">
                                    <button
                                        className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-red-400 transition"
                                        onClick={() => removeItem(item)}
                                        title='Remove Item'
                                    >
                                        <MdDelete className="text-gray-600 w-6" />
                                    </button>
                                    <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition"
                                        title='View Details'
                                        onClick={() => handleNavigateDetails(item)}
                                    >
                                        <CgDetailsMore className="text-gray-600 w-6" />
                                    </button>
                                </div>
                                <span>{`$${((item.quantity * item.product?.item_data?.variations[0]?.item_variation_data.price_money.amount) / 100).toFixed(2)}`}</span>
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
                        </motion.div>
                    ))}
                </AnimatePresence>

            </motion.div>
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

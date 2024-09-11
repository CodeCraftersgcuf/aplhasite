'use client';
import '@/app/styles/main.scss';
import { useEffect, useRef, useState } from 'react';
import { modalActions } from '@/store/slices/openModel';
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion"
import MobileOrdersManagement from './Cart-subcomponents/MobileOrdersManagement';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { totalPrice } from '@/helpers/totalPrice';



const MobileCart = ({ isOpen, products }) => {
    const router = useRouter()
    const cartDiv = useRef()
    const upperDiv = useRef()
    const [height, setHeight] = useState(0)
    const [topMargin, setTopMargin] = useState(0)
    const addedItems = useSelector((state) => state.itemsFn.items)
    // const stateMessage = useSelector((state) => state.itemsFn.message)
    const dispatch = useDispatch()
    const closeDiv = (e) => {
        if (e.target.id === 'modal-background') {
            dispatch(modalActions.closeModal())
        }
    };

    useEffect(() => {
        setTopMargin(upperDiv.current?.clientHeight)
        setHeight(cartDiv.current?.clientHeight - 245)
    }, [])
    // console.log(height)

    const handleSubmit = () => {
        //submit order to backend
        return router.push('/payment')
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}  // Start from below the screen
            animate={{ opacity: isOpen ? 1 : 0 }} // Slide up when open, slide down when closing
            exit={{ opacity: 0 }} // Exit with slide down and fade out
            transition={{ duration: 0.3 }} // Animation duration
            id="modal-background"
            className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-[100]"
            onClick={closeDiv}
        >
            <motion.div
                className='fixed  bottom-0 main-card-res w-screen h-[80vh] '
                ref={cartDiv}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={{
                    top: 0,
                    bottom: 1
                }}
                onDragEnd={(e, info) => {
                    if (info.offset.y > 100) {
                        dispatch(modalActions.closeModal())
                    }
                }}
                initial={{ y: '100%' }}
                animate={{ y: isOpen ? '0%' : '100%' }}
                transition={{ duration: 0.3 }}
                exit={{ y: '100%' }}
            >
                <div className="relative h-full w-full flex flex-col bg-white text-black pt-10 rounded-t-2xl">
                    <div className='bg-white rounded-t-2xl absolute w-full top-0 '>
                        <div className=' w-[50px] h-[5px] mx-auto my-[15px] bg-gray-500 rounded-[3px] hover:cursor-pointer'></div>
                    </div>
                    <div
                        className='w-full h-auto flex flex-col'
                    >
                        <div
                            ref={upperDiv}
                            className='w-full flex items-center justify-center h-16 border border-slate-200'>
                            YOUR BAG
                        </div>
                    </div>
                    <MobileOrdersManagement
                        addedItems={addedItems}
                        height={height}
                        topMargin={topMargin}
                        isOpen={isOpen}
                    />
                    {/* <ExtraItems
                        addItem={handleAddItem}
                    /> */}
                    <div className=' w-full flex flex-col bg-white'>
                        <div className='flex items-center justify-center h-12 border border-slate-200'>
                            Free Standard Shipping Unlocked
                        </div>
                        <div className='flex flex-col gap-3 border-y h-32 border border-slate-200 py-4 '>
                            <div className='flex justify-between px-6'>
                                <span>Total:</span>
                                <span>{`$${addedItems.length === 0 ? 0 : totalPrice(addedItems)}`}</span>
                            </div>
                            <div className='flex justify-center items-center'>
                                <motion.button
                                    className='text-black text-[0.75rem] font-bold py-4 px-24 rounded-full bg-green-400'
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
            </motion.div>
            {/* <Toaster position='bottom-center' /> */}
        </motion.div>
    )
}

export default MobileCart
'use client';
import '@/app/styles/main.scss';
import { useEffect, useRef, useState } from 'react';
import { modalActions } from '@/store/slices/openModel';
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion"
import ExtraItems from './Cart-subcomponents/ExtraItems';
import OrdersManagementBox from './Cart-subcomponents/OrdersManagementBox';
import { itemsActions } from '@/store/slices/cartItems';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import CustomToast from './CustomToast';
import { useRouter } from 'next/navigation';
import notify from '@/helpers/notify';


const DesktopCart = ({ isOpen, products }) => {
    const dataArray = Object.values(products);
    const reversedDataArray = dataArray.reverse();
    const splicedDataArray = reversedDataArray.splice(0, 30);
    // const [addedItems, setAddedItems] = useState([])
    const addedItems = useSelector((state) => state.itemsFn.items)
    const dispatch = useDispatch()
    // console.log(stateMessage)
    // useEffect(() => {
    //     setAddedItems(addedItemsRedux)
    // }, [addedItemsRedux])
    const closeDiv = (e) => {
        if (e.target.id === 'modal-background') {
            dispatch(modalActions.closeModal())
        }
    };
    const handleRemoveItem = (item) => {
        dispatch(itemsActions.removeItem(item))
        notify({ product: item.product, adding: false, removing: true })
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

    const handleAddItem = ({ product, quantity = 1 }) => {
        dispatch(itemsActions.addItem({ product, quantity }))
        notify({ product, quantity, adding: true, removing: false })
    };

    return (
        <motion.div
            initial={{ y: "100%", opacity: 0 }}  // Start from below the screen
            animate={{ y: isOpen ? "0%" : "100%", opacity: isOpen ? 1 : 0 }} // Slide up when open, slide down when closing
            exit={{ y: "100%", opacity: 0 }} // Exit with slide down and fade out
            transition={{ duration: 0.3 }} // Animation duration
            id="modal-background"
            className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-[100]"
            onClick={closeDiv}
        >
            <div className='main-card-res w-screen h-[90vh]  md:flex-row flex justify-between bg-white text-black '>
                <ExtraItems
                    addItem={handleAddItem}
                    products={splicedDataArray}
                />
                <OrdersManagementBox
                    addedItems={addedItems}
                    removeItem={handleRemoveItem}
                    onDecrement={handleDecrement}
                    onIncrement={handleIncrement}
                />
            </div>
            {/* <Toaster position='bottom-center' /> */}
        </motion.div>
    )
}

export default DesktopCart
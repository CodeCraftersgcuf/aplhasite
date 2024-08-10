'use client';
import '@/app/styles/main.scss';
import { useEffect, useRef, useState } from 'react';
import { modalActions } from '@/store/openModel';
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion"
import ExtraItems from './Cart-subcomponents/ExtraItems';
import OrdersManagementBox from './Cart-subcomponents/OrdersManagementBox';
import { itemsActions } from '@/store/cartItems';
import { useSelector } from 'react-redux';
import CustomToast from './customToast';


const Cart = ({ isOpen }) => {
    const addedItems = useSelector((state) => state.itemsFn.items)
    const stateMessage = useSelector((state) => state.itemsFn.message)
    const dispatch = useDispatch()
    console.log(stateMessage)
    const closeDiv = (e) => {
        if (e.target.id === 'modal-background') {
            dispatch(modalActions.closeModal())
        }
    };
    // if (stateMessage === 'itemAdded') {
    //     toast(<CustomToast message="Item added to cart" smallText={'This item was added to your cart'} />, {
    //         className: 'added-toast',
    //         position: 'bottom-center',
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         draggable: true,
    //     })
    //     // dispatch(itemsActions.resetMessage())
    // }
    const handleRemoveItem = (item) => {
        dispatch(itemsActions.removeItem(item))
    }
    const handleDecrement = (item) => {
        dispatch(itemsActions.decrement(item))
    }
    const handleIncrement = (item) => {
        dispatch(itemsActions.increment(item))
    }


    const handleAddItem = ({ product, size }) => {
        dispatch(itemsActions.addItem({ product, size, quantity: 1 }))
    };

    return (
        <motion.div
            initial={{ y: "20%", opacity: 0 }}  // Start from below the screen
            animate={{ y: isOpen ? "0%" : "20%", opacity: isOpen ? 1 : 0 }} // Slide up when open, slide down when closing
            exit={{ y: "20%", opacity: 0 }} // Exit with slide down and fade out
            transition={{ duration: 0.5 }} // Animation duration
            id="modal-background"
            className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-[100]"
            onClick={closeDiv}
        >
            <div className='main-card-res w-screen h-[90vh]  md:flex-row flex justify-between bg-white text-black '>
                <ExtraItems addItem={handleAddItem} />
                <OrdersManagementBox
                    addedItems={addedItems}
                    removeItem={handleRemoveItem}
                    onDecrement={handleDecrement}
                    onIncrement={handleIncrement}
                />
            </div>
        </motion.div>
    )
}

export default Cart
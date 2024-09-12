import React, { useState, useEffect } from 'react'
import PopUpAnimeButtons from './PopUpAnimeButtons';
import { motion, easeInOut, AnimatePresence } from 'framer-motion';
import { PASCAL_CATEGORIES } from '@/utils';


const ShopPopUp = ({ setStyles, isStyles, showPopUp, setShowPopUp }) => {

    const handleDragEnd = (e, info) => {
        if (info.offset.y > 70) { // If dragged down more than 50px
            setShowPopUp(false);
        }
    };

    return (
        <>
            <AnimatePresence>
                {showPopUp &&
                    <motion.div
                        class="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-30 block"
                        onClick={() => setShowPopUp(false)}
                    >
                        <motion.div
                            onClick={(e) => { e.stopPropagation() }}
                            className='fixed z-20 w-screen h-[80%] left-0 bottom-0  bg-white rounded-t-xl overflow-hidden'
                            drag="y" // Enable vertical dragging
                            dragConstraints={{ top: 0, bottom: 0 }} // Set constraints for dragging
                            onDragEnd={handleDragEnd}
                            dragElastic={{
                                top: 0,
                                bottom: 1
                            }}
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "100%" }}
                            transition={{ duration: 0.3, ease: easeInOut }}
                        >
                            <div className=' sticky top-0 w-[50px] h-[5px] mx-auto my-[15px] bg-gray-500 rounded-[3px] hover:cursor-pointer'></div>
                            <div className={`bg-white h-full text-lg text-black py-8 px-8 overflow-scroll`}>
                                <div className='flex flex-col'>
                                    <input
                                        type="text"
                                        placeholder='Search for categories'
                                        className='w-full font-semibold h-12 bg-white text-black focus:outline-none placeholder:text-gray-400'
                                    />
                                    <div className='w-full h-[1px] bg-gray-200 my-[16px]'></div>
                                </div>
                                <div className='flex flex-col overflow-scroll scrollbar-hide'>
                                    {PASCAL_CATEGORIES.map((product, index) => (
                                        <PopUpAnimeButtons
                                            key={index}
                                            name={product.category}
                                            options={product.subCategories}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default ShopPopUp

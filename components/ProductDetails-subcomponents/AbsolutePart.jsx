import React, { useState } from 'react'
import AnimatingButton from './AnimatingButton'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { itemsActions } from '@/store/cartItems'
import { DUMMY_ITEMS } from '@/utils'

const buttonSizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']

const AbsolutePart = ({ product }) => {
    console.log(product)
    const dispatch = useDispatch()
    const [selectedImage, setSelectedImage] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)
    const onAddItem = ({ product, size }) => {
        const item = DUMMY_ITEMS.find((item) => item.id === product.id)
        dispatch(itemsActions.addItem({ product: item, size, quantity: 1 }))
    }

    return (
        <>
            {product && <div className='product-page-det-card absolute bg-white p-4 top-[5%] right-[4.5rem] z-50 w-[24rem] h-[33rem] border border-gray-400 rounded-lg overflow-scroll scrollbar-hide'>
                <div className='flex flex-col gap-3 w-full text-black justify-between'>
                    <div className='flex flex-col gap-1 border-b pb-3 border-gray-400'>
                        <div className='flex items-center justify-center h-10'>
                            {product.name}
                        </div>
                        <div className='flex justify-between text-sm'>
                            <span>Flex Short</span>
                            <span>{`$${product.price}`}</span>
                        </div>
                        <span className='text-xs text-gray-400'>{product.qualities[0]}</span>
                        <span className='text-xs font-normal p-[0.15rem] border border-gray-400 w-12 text-center'>NEW</span>
                    </div>
                    <span className='text-xs text-gray-400'>{`${product.availableColors.length} colors available`}</span>
                    <div className='flex gap-1'>
                        {product.images.map((image, index) => (
                            <div
                                key={index}
                                className={`w-14 border border-gray-400 rounded-lg  hover:cursor-pointer ${selectedImage === image ? 'scale-105 border-2' : ''}`}
                                onClick={() => setSelectedImage(image)}
                            >
                                <img className='rounded-lg'
                                    src={image}
                                    alt="image" />
                            </div>
                        ))}

                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex justify-between text-[12px]'>
                            <span>Sizes guide</span>
                            <span className='text-gray-400'>Sizes not available?</span>
                        </div>
                        <div className=" w-fit flex items-center space-x-2 px-[0.1rem] py-[0.1rem]">
                            {buttonSizes.map((size, index) => (
                                <button
                                    key={size}
                                    className={`flex items-center justify-center w-8 h-8 text-gray-600 text-[10px]  rounded-lg hover:bg-gray-200 transition ${selectedSize === size ? 'bg-gray-200' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}

                        </div>

                        <div className='flex justify-center items-center'>
                            <motion.button
                                className={` text-white bg-black text-[0.75rem] font-bold py-2 px-24 rounded-full ${selectedSize ? 'hover:cursor-pointer' : 'cursor-not-allowed'}`}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 800, damping: 10 }}
                                animate={selectedSize ? 'hover' : 'disabled'}
                                disabled={!selectedSize}
                                onClick={() => onAddItem({ product, size: selectedSize })}
                            >
                                {selectedSize ? `Add ${selectedSize} To Bag` : 'Select Size'}
                            </motion.button>
                        </div>
                    </div>

                    <div className='flex flex-col text-sm'>

                        <div className='flex flex-col gap-3 border-y border-b border-gray-400 py-4 '>
                            <div className=' px-6'>
                                <ul className='flex flex-col gap-1 list-disc'>
                                    {product.qualities.map((quality, index) => (
                                        <li key={index} className='text-xs text-gray-400'>
                                            {quality}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex flex-col'>
                                <ul className="p-2 border-y list-disc font-semibold">
                                    <AnimatingButton name={'Description'} detail={product.description} />
                                    <AnimatingButton name={'Fit Suggestions'} detail={product.fitSuggestions} />
                                    <AnimatingButton name={'Materials and Washing Directions'} detail={product.washingDirections} />
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>}
            {!product && <div className='product-page-det-card absolute bg-white p-4 top-[5%] right-[4.5rem] z-50 w-[24rem] h-[33rem] border border-gray-400 rounded-lg overflow-scroll scrollbar-hide'>
                <p className='text-center text-3xl'>No Product Found</p>
            </div>}
        </>
    )
}

export default AbsolutePart

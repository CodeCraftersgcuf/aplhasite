import React, { useEffect, useState } from 'react'
import AnimatingButton from './AnimatingButton'
import { motion } from 'framer-motion'

// const buttonSizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']

const AbsolutePart = ({ product, centerSlide, addItem }) => {
    const [selectedImage, setSelectedImage] = useState(null)
    // const [selectedSize, setSelectedSize] = useState(null)


    const handleSelectedImage = (index) => {
        setSelectedImage(index)
        centerSlide(index)
    }

    return (
        <>
            {product && <div className='w-full lg:absolute lg:w-[24rem] lg:h-[33rem] bg-white p-4 top-[5%] right-[4.5rem] z-50 lg:border border-gray-400 lg:rounded-lg overflow-scroll scrollbar-hide'>
                {/* {product && <div className='product-page-det-card absolute bg-white p-4 top-[5%] right-[4.5rem] z-50 w-[24rem] h-[33rem] border border-gray-400 rounded-lg overflow-scroll scrollbar-hide'> */}
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
                                className={`w-14 border border-gray-400 rounded-lg  hover:cursor-pointer ${selectedImage === index ? 'scale-105 border-2' : ''}`}
                                onClick={() => handleSelectedImage(index)}
                            >
                                <img className='rounded-lg'
                                    src={image}
                                    alt="image" />
                            </div>
                        ))}

                    </div>
                    <div className='flex flex-col gap-1'>

                        <div className='flex justify-center items-center'>
                            <motion.button
                                className={` text-white bg-black text-[0.75rem] font-bold py-2 px-24 rounded-full hover:cursor-pointer`}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 800, damping: 10 }}
                                onClick={() => addItem({ product })}
                            >
                                Add To Bag
                            </motion.button>
                        </div>
                    </div>

                    <div className='flex flex-col text-sm'>

                        <div className='flex flex-col gap-3 lg:border-y border-gray-400 py-4 '>
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

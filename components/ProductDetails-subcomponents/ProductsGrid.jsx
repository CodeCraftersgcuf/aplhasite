import React, { useState } from 'react'
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import '@/app/styles/main.scss';
import { DUMMY_ITEMS } from '@/utils';
import ProductSlide from './ProductSlide';


const ProductsGrid = ({ addItem }) => {
    const [women, setWomen] = useState(true)

    return (
        <div className='w-full h-1/2 bg-white py-6 mt-20 lg:mt-0'>
            <div className='w-full flex flex-col overflow-x-auto scrollbar-hide'>
                <div className="sliders sm:mt-20 lg:mt-0">
                    <div className="slider-buttons ">
                        <span
                            onClick={() => setWomen(true)}
                            className={`${women ? 'bg-gray' : 'txt-black'}`}
                        >
                            Recommended
                        </span>
                        <span
                            onClick={() => setWomen(false)}
                            className={!women ? 'bg-gray' : 'txt-black'}
                        >
                            Recently viewed
                        </span>
                    </div>

                    <div className='grid p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6  lg:grid-cols-3'>
                        {DUMMY_ITEMS.map((product, index) => (
                            <ProductSlide
                                key={index}
                                product={product}
                                addItem={addItem}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsGrid

import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import '@/app/styles/main.scss';
// import { DUMMY_ITEMS } from '@/utils';
import ProductSlide from '@/components/ProductDetails-subcomponents/ProductSlide';
import DummyProductSlide from '../ProductDetails-subcomponents/DummyProductSlide';
import HomeProductSlide from '../HomeProductSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import '@/app/styles/main.scss';


const slides2 = [1, 2, 3, 4, 5, 6, 7, 8]

const ExtraItems = ({ addItem, products, isLoading }) => {
    const [recommended, setRecommended] = useState(true);
    const router = useRouter()

    function handleNavigateToDetails(product) {
        return router.push('/product-details/' + product.id)
    }

    return (
        <div className='main-card-res-none lg:w-9/12 flex md:items-center md:w-[550px] sm:w-[400px]  flex-col overflow-x-auto scrollbar-hide border border-t-gray-400'>
            <div className="sliders w-full">
                <div className="slider-buttons !mt-[30px]">
                    <span
                        onClick={() => setRecommended(true)}
                        className={`${recommended ? 'bg-gray-300' : 'txt-black'}`}
                    >
                        Recommended
                    </span>
                    <span
                        onClick={() => setRecommended(false)}
                        className={!recommended ? 'bg-gray-300' : 'txt-black'}
                    >
                        Recently viewed
                    </span>
                </div>

                <div className='grid pl-4 pr-14 lg:grid-cols-3 2xl:grid-cols-4 '>
                    {isLoading && slides2.map((slide, index) => (
                        <DummyProductSlide key={Math.random()} maxW='250px' />
                    ))}
                    {!isLoading && products.map((product, index) => (
                        <SwiperSlide key={product.id}>
                            <div
                                className="slider-items lg:ps-12 md:ps-8 sm:ps-4 ps-0"
                            >
                                <div
                                    className="slider-item"
                                // style={{ aspectRatio: '7/11' }}
                                >
                                    <HomeProductSlide
                                        key={product.id}
                                        product={product}
                                    //   onAddItem={onAddItem}
                                    //   handleNavigateDetails={handleNavigateDetails}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    {/* {!isLoading && products.map((product, index) => (
                        <ProductSlide
                            key={product.id}
                            product={product}
                            addItem={addItem}
                            handleNavigateToDetails={handleNavigateToDetails}
                        />
                    ))} */}

                </div>
            </div>
        </div>
    )
}

export default ExtraItems

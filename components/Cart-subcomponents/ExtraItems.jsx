import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import '@/app/styles/main.scss';
import { DUMMY_ITEMS } from '@/utils';
import ProductSlide from '@/components/ProductDetails-subcomponents/ProductSlide';



const slides2 = [1, 2, 3, 4, 5, 6, 7, 8]

const ExtraItems = ({ addItem }) => {
    const [recommended, setRecommended] = useState(true);
    const router = useRouter()

    function handleNavigateToDetails(product) {
        return router.push('/product-details?id=' + product.id)
    }

    return (
        <div className='main-card-res-none lg:w-9/12 flex md:items-center md:w-[550px] sm:w-[400px]  flex-col overflow-x-auto scrollbar-hide'>
            <div className="sliders">
                <div className="slider-buttons ">
                    <span
                        onClick={() => setRecommended(true)}
                        className={`${recommended ? 'bg-gray' : 'txt-black'}`}
                    >
                        Recommended
                    </span>
                    <span
                        onClick={() => setRecommended(false)}
                        className={!recommended ? 'bg-gray' : 'txt-black'}
                    >
                        Recently viewed
                    </span>
                </div>

                <div className='grid p-6 sm:grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6'>
                    {DUMMY_ITEMS.map((product, index) => (
                        <ProductSlide
                            key={index}
                            product={product}
                            addItem={addItem}
                            handleNavigateToDetails={handleNavigateToDetails}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ExtraItems

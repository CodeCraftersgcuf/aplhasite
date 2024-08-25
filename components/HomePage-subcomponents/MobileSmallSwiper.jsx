import React from 'react';
import MobileProductSlide from '@/components/shop-subcomponents/MobileProductSlide';
import { DUMMY_ITEMS } from '@/utils';
import MobileSmallSwiperSlide from './MobileSmallSwiperSlide';

const MobileSmallSwiper = () => {
    return (
        <div className='w-screen flex flex-col gap-2 px-6 overflow-x-scroll scrollbar-hide lg:hidden'>
            <div className='flex gap-2 '>
                {DUMMY_ITEMS.slice(0, Math.ceil(DUMMY_ITEMS.length / 2)).map((product, index) => (
                    <div key={index} className='w-3/12 max-w-[150px] flex-shrink-0'>
                        <MobileSmallSwiperSlide
                            key={index}
                            product={product}
                        />
                    </div>
                ))}
            </div>
            <div className='flex gap-2'>
                {DUMMY_ITEMS.slice(Math.ceil(DUMMY_ITEMS.length / 2)).map((product, index) => (
                    <div key={index} className='w-3/12 max-w-[150px] flex-shrink-0'>
                        <MobileSmallSwiperSlide
                            key={index}
                            product={product}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileSmallSwiper;

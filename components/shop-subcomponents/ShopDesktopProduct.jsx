import React from 'react';
import ProductSlide from '../ProductDetails-subcomponents/ProductSlide';
import { memo } from 'react';
import DummyProductSlide from '../ProductDetails-subcomponents/DummyProductSlide';
import HomeProductSlide from '../HomeProductSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import '@/app/styles/main.scss';

const slides2 = [1, 2, 3, 4, 5, 6, 7, 8];
const ShopDesktopProduct = ({ addItem, products, isLoading }) => {
    return (
        <div className="sliders w-4/5 hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {isLoading && slides2.map((slide, index) => (
                <DummyProductSlide key={index} maxW={'250px'} />
            ))}
            {!isLoading && products.map((product, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="slider-items lg:ps-12 md:ps-8 sm:ps-4 ps-0"
                    >
                        {/* <SkeletonTheme color="#d3d3e0" highlightColor="#e1e1e1" /> */}
                        <div
                            className="slider-item !max-w-[300px]"
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
        </div>
    );
};

// Custom comparison function to avoid unnecessary re-renders
const areEqual = (prevProps, nextProps) => {
    // Shallow compare the products and addItem prop
    return (
        prevProps.addItem === nextProps.addItem &&
        prevProps.products === nextProps.products
    );
};

export default memo(ShopDesktopProduct, areEqual);

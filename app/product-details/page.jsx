'use client'
import React, { useRef, useState, useEffect } from 'react';
import AbsolutePart from '@/components/ProductDetails-subcomponents/AbsolutePart';
import DetailsSwiper from '@/components/ProductDetails-subcomponents/DetailsSwiper';
import WithHeaderWrapper from '@/components/WithHeaderWrapper';
import ProductsGrid from '@/components/ProductDetails-subcomponents/ProductsGrid';
import { DUMMY_DETAILS, DUMMY_ITEMS } from '@/utils.js'
import { itemsActions } from '@/store/slices/cartItems';
import { useDispatch } from 'react-redux';
import notify from '@/helpers/notify';
import ShopProductMobile from '@/components/shop-subcomponents/ShopProductMobile';
import SliderButtons from '@/components/HomePage-subcomponents/SliderButtons';


export default function DetailsPage() {
    const dispatch = useDispatch()
    const swiperRef = useRef(null);
    const [product, setProduct] = useState(null)



    const handleAddItem = ({ product, quantity = 1 }) => {
        const item = DUMMY_ITEMS.find((item) => item.id === product.id)
        dispatch(itemsActions.addItem({ product: item, quantity }))
        notify({ product: item, quantity, adding: true, removing: false })
    };

    const handleCenterSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            const slideWidth = swiper.slides[index].offsetWidth;
            const halfContainerWidth = swiper.width / 2;
            const slidePosition = swiper.slides[index].offsetLeft + slideWidth / 2;

            // Calculate the translateX value to center the slide
            const translateX = slidePosition - halfContainerWidth;

            swiper.setTranslate(-translateX); // Manually set the translate to center the slide
            swiper.updateProgress(); // Update Swiper's internal state
        }
    };

    useEffect(() => {
        const url = new URL(window.location.href);
        const id = url.searchParams.get('id');
        console.log(id)
        const loadedProduct = DUMMY_DETAILS.find((product) => product.id === +id);
        setProduct(loadedProduct)
    }, [])
    return (
        <WithHeaderWrapper>
            <div className='lg:h-[87vh] relative apni-class-main'>
                <DetailsSwiper
                    productImages={product && product.images}
                    ref={swiperRef}
                />
                <AbsolutePart
                    addItem={handleAddItem}
                    product={product}
                    centerSlide={handleCenterSlide}
                />
            </div>
            <ProductsGrid
                addItem={handleAddItem}
            />
            <div className='px-6 pt-8'>
                <div className='sliders'>
                    <SliderButtons />
                </div>
                <ShopProductMobile />
            </div>
        </WithHeaderWrapper>
    );
}

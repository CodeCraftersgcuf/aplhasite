'use client'
import React, { useRef, useState, useEffect } from 'react';
import AbsolutePart from '@/components/ProductDetails-subcomponents/AbsolutePart';
import DetailsSwiper from '@/components/ProductDetails-subcomponents/DetailsSwiper';
import WithHeaderWrapper from '@/components/WithHeaderWrapper';
import ProductsGrid from '@/components/ProductDetails-subcomponents/ProductsGrid';
import { DUMMY_DETAILS, DUMMY_ITEMS } from '@/utils.js'
import CustomToast from '@/components/CustomToast';
import toast, { Toaster } from 'react-hot-toast';
import { itemsActions } from '@/store/cartItems';
import { useDispatch } from 'react-redux';


export default function DetailsPage() {
    const dispatch = useDispatch()
    const swiperRef = useRef(null);
    const [product, setProduct] = useState(null)

    const handleAddItem = ({ product, size }) => {
        const item = DUMMY_ITEMS.find((item) => item.id === product.id)
        dispatch(itemsActions.addItem({ product, size, quantity: 1 }))
        notify({ product: item, size, adding: true, removing: false })
    };

    const notify = ({ product, size, adding, removing }) => {
        toast.custom((t) => (
            <CustomToast
                product={product}
                size={size}
                adding={adding}
                removing={removing}
            />
        ), {
            duration: 2000

        }
        )
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
            <Toaster position="bottom-center" />
            <div className='h-[87vh] relative'>
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
        </WithHeaderWrapper>
    );
}

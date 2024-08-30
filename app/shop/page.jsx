'use client'
import WithHeaderWrapper from '@/components/WithHeaderWrapper'
import ProductSlide from '@/components/ProductDetails-subcomponents/ProductSlide';
import { DUMMY_ITEMS, vapeProducts } from '@/utils';
import '@/app/styles/main.scss';
import { useEffect, useState } from 'react';
import { itemsActions } from '@/store/slices/cartItems';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import MobilePopUpBtns from '@/components/shop-subcomponents/MobilePopUpBtns';
import { useRef } from 'react';
import './shop.css'
import ShopPopUp from '@/components/shop-subcomponents/ShopPopUp';
import ShopSidebar from '@/components/shop-subcomponents/ShopSidebar';
import ShopDesktopProduct from '@/components/shop-subcomponents/ShopDesktopProduct';
import ShopProductMobile from '@/components/shop-subcomponents/ShopProductMobile';
import { useSelector } from 'react-redux';
import notify from '@/helpers/notify';
import TopImage from '@/components/shop-subcomponents/TopImage';


const slides = Array.from({ length: 15 }, (_, index) => index + 1)
const ShopPage = () => {
    const device = useSelector(state => state.deviceFn.deviceType)
    const [showPopUp, setShowPopUp] = useState(false)
    // const [isScrolled, setIsScrolled] = useState(false)
    const [isStyles, setStyles] = useState(true)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     const totalScroll = document.documentElement.scrollHeight

    //     const addThreshold = 300; // Scroll position at or above which the class is added
    //     // const removeThreshold = 315; // Scroll position below which the class is removed

    //     const footerStart = 322//667.5

    //     const checkInitialScroll = () => {
    //         const scrollY = window.scrollY;
    //         console.log(window.scrollY, footerStart)

    //         // Add class if the initial scroll position is beyond addThreshold
    //         // if (scrollY >= addThreshold + 10) {
    //         //     return
    //         // }

    //         if (scrollY >= addThreshold && scrollY < footerStart) {
    //             setIsScrolled(true);
    //         } else if (scrollY < addThreshold) {
    //             setIsScrolled(false);
    //         } else if (scrollY >= footerStart) {
    //             setIsScrolled(false);
    //         }
    //     };

    //     window.addEventListener("scroll", checkInitialScroll);

    //     // Initial check to handle cases where the initial scroll position is beyond addThreshold
    //     checkInitialScroll();

    //     return () => {
    //         window.removeEventListener("scroll", checkInitialScroll);
    //     };
    // }, []);


    const addItem = ({ product, quantity = 1 }) => {
        const item = DUMMY_ITEMS.find((item) => item.id === product.id)
        // console.log(item)
        dispatch(itemsActions.addItem({ product: item, quantity }))
        notify({ product: item, quantity, adding: true, removing: false })
    }

    // console.log(showPopUp)
    function isFullyScrolled(div) {
        return div.scrollTop + div.clientHeight >= div.scrollHeight;
    }


    // Usage example
    // useEffect(() => {
    //     scrolledDiv.current.addEventListener('scroll', () => {
    //         if (isFullyScrolled(scrolledDiv.current)) {
    //             console.log('The div is fully scrolled!');
    //             setIsScrolled(false);
    //         }
    //     });

    // }, [scrolledDiv.current]);

    // console.log(isScrolled)


    return (
        <WithHeaderWrapper>
            <div className='w-full bg-white'>

                <TopImage />
                <div className={`flex bg-black lg:bg-white px-8 w-full`}>

                    <ShopSidebar
                        isStyles={isStyles}
                        setStyles={setStyles}
                    />
                    <ShopDesktopProduct
                        addItem={addItem}
                    />
                    <ShopProductMobile
                        addItem={addItem}
                        showPopUp={showPopUp}
                    />
                    <MobilePopUpBtns
                        isStyles={isStyles}
                        setStyles={setStyles}
                        setShowPopUp={setShowPopUp}
                    />


                    {(device === 'mobile' || device === 'tablet') && <ShopPopUp
                        showPopUp={showPopUp}
                        setShowPopUp={setShowPopUp}
                        setStyles={setStyles}
                        isStyles={isStyles}
                    />}
                </div>
            </div>
        </WithHeaderWrapper>
    )
}

export default ShopPage


{/* {<div className='relative w-full h-[50vh] overflow-hidden'>
<Image
className='absolute'
src="https://alphalete.uk/cdn/shop/collections/m_sweater_b79c3787-15cf-4367-9f68-e29eb75bcf56_2500x1050_crop_center.jpg?v=1679098832"
alt="image"
layout="fill"
objectFit="cover"
/>
</div>} */}
{/* <div className={`flex ${isScrolled ? 'fixed top-[52px]' : ''} z-50 bg-white px-8 w-full`}> */ }

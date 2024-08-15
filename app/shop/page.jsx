'use client'
import WithHeaderWrapper from '@/components/WithHeaderWrapper'
import ProductSlide from '@/components/ProductDetails-subcomponents/ProductSlide';
import { DUMMY_ITEMS, vapeProducts } from '@/utils';
import '@/app/styles/main.scss';
import AnimeButtons from '@/components/shop-subcomponents/SideBarAnimatedButtons';
import { useEffect, useState } from 'react';
import { itemsActions } from '@/store/cartItems';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import CustomToast from '@/components/CustomToast';
import Image from 'next/image';
import { BsWindowDesktop } from 'react-icons/bs';


const slides = Array.from({ length: 15 }, (_, index) => index + 1)
const ShopPage = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isStyles, setStyles] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const totalScroll = document.documentElement.scrollHeight

        const addThreshold = 300; // Scroll position at or above which the class is added
        const removeThreshold = 315; // Scroll position below which the class is removed

        const footerStart = totalScroll - 670 - 1030//667.5

        const checkInitialScroll = () => {
            const scrollY = window.scrollY;
            console.log(window.scrollY, footerStart)

            // Add class if the initial scroll position is beyond addThreshold
            if (scrollY >= addThreshold && scrollY < footerStart) {
                setIsScrolled(true);
            } else if (scrollY <= removeThreshold) {
                setIsScrolled(false);
            } else {
                if (scrollY >= footerStart) {
                    setIsScrolled(false)
                }
            }
        };

        window.addEventListener("scroll", checkInitialScroll);

        // Initial check to handle cases where the initial scroll position is beyond addThreshold
        checkInitialScroll();

        return () => {
            window.removeEventListener("scroll", checkInitialScroll);
        };
    }, []);


    const notify = ({ product, quantity, adding, removing }) => {
        toast.custom((t) => (
            <CustomToast
                product={product}
                quantity={quantity}
                adding={adding}
                removing={removing}
            />
        ), {
            duration: 2000
        }
        )
    };

    const addItem = ({ product, quantity = 1 }) => {
        const item = DUMMY_ITEMS.find((item) => item.id === product.id)
        console.log(item)
        dispatch(itemsActions.addItem({ product: item, quantity }))
        notify({ product: item, quantity, adding: true, removing: false })
    }

    return (
        <WithHeaderWrapper>
            <Toaster position='bottom-center' />
            <div className='w-full bg-white'>
                {<div className='relative w-full h-[50vh] overflow-hidden'>
                    <Image
                        className='absolute'
                        src="https://alphalete.uk/cdn/shop/collections/m_sweater_b79c3787-15cf-4367-9f68-e29eb75bcf56_2500x1050_crop_center.jpg?v=1679098832"
                        alt="image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>}
                <div className={`flex  bg-white px-8 w-full`}>
                    <div className='relative w-1/5 bg-white py-[29px] pr-4 overflow-hidden'>
                        <div className={`bg-white h-full ${isScrolled ? 'fixed top-[81px]' : 'absolute'} `}>
                            <div className='flex flex-col'>
                                <p className='text-[12px] text-gray-700'>Trending</p>
                                <h1 className='text-[20px] text-gray-700'>ALL PRODUCTS</h1>
                                <p className='text-[12px] text-gray-700'>230 Products</p>
                                <div className="border border-gray-500 rounded-full w-fit mt-2 p-1 flex justify-between items-center">
                                    <span
                                        className={`inline-block text-gray-800 text-[10px] rounded-full px-3 py-1 hover:cursor-pointer ${isStyles ? 'bg-gray-300' : ''}`}
                                        onClick={() => setStyles(true)}
                                    >
                                        Styles
                                    </span>
                                    <span
                                        className={`inline-block text-gray-800 text-[10px] rounded-full px-3 py-1 hover:cursor-pointer ${!isStyles ? 'bg-gray-300' : ''}`}
                                        onClick={() => setStyles(false)}
                                    >
                                        Flavors
                                    </span>
                                </div>
                                <div className='w-full h-[1px] bg-gray-300 mt-4'></div>
                                <input
                                    type="text"
                                    placeholder='Search for categories'
                                    className='w-full h-4 my-[16px] text-gray-800 focus:outline-none placeholder:text-gray-400'
                                />
                                <div className='w-full h-[1px] bg-gray-300 mb-[8px]'></div>
                            </div>
                            <div className='flex h-full flex-col overflow-scroll scrollbar-hide'>
                                {vapeProducts.map((product, index) => (
                                    <AnimeButtons
                                        name={product.productName}
                                        options={product.options}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='w-4/5 grid grid-cols-3 gap-6'>
                        {/* <div className="slider-buttons "> */}
                        {DUMMY_ITEMS.map((product, index) => (
                            <div className="sliders">
                                <ProductSlide
                                    key={index}
                                    product={product}
                                    addItem={addItem}
                                    bigItemClass={true}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </WithHeaderWrapper>
    )
}

export default ShopPage

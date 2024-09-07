import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { itemsActions } from '@/store/slices/cartItems';
import { useDispatch } from 'react-redux';
import notify from '@/helpers/notify';
import { DUMMY_ITEMS } from '@/utils';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import LargeSwiperCardSkeleton from '../HomePage-subcomponents/LargeSwiperCardSkeleton';


let totalImages = 0
const MobileProductSlide = ({ product, vertical, bgClicked, setBgClicked }) => {
    const [showQuantity, setShowQuantity] = useState(false)
    const [loadedImagesCount, setLoadedImagesCount] = useState(0);
    const [imageLoading, setImageLoading] = useState(true);
    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch()
    const router = useRouter()

    //handling product Data
    const images = product?.item_data?.ecom_image_uris
    let imagesArray;
    if (images) {
        imagesArray = Object.values(images)
    }
    const productPrice = product?.item_data?.variations[0]?.item_variation_data.price_money.amount
    const productName = product?.item_data?.name
    const productType = product?.item_data?.product_type
    const inventoryAlert = product?.item_data?.variations[0]?.item_variation_data.location_overrides[0]?.inventory_alert_type

    if (images) {
        totalImages = Object.keys(images).length
    }
    // console.log(totalImages)
    const handleImageLoad = () => {
        setLoadedImagesCount((prevCount) => {
            const newCount = prevCount + 1;
            if (newCount === totalImages) {
                setImageLoading(false); // Set loading to false when all images are loaded
            }
            return newCount;
        });
    };

    // console.log(product)
    const handleAddItem = ({ product, quantity = 1 }) => {
        // const item = DUMMY_ITEMS.find((item) => item.id === product.id)
        dispatch(itemsActions.addItem({ product, quantity }))
        notify({ product, quantity, adding: true, removing: false })
    }

    const handleSlideClick = () => {
        // console.log(product.id)
        const itemId = product.item_data?.variations[0]?.id
        console.log(product.item_data?.variations[0]?.id)
        if (!showQuantity) {
            router.push('/product-details/' + product.id)
        }
    }
    useEffect(() => {
        if (bgClicked) {
            if (showQuantity) {
                setShowQuantity(false)
            }
            setBgClicked(false)
        }
    }, [bgClicked])



    return (
        <div className='max-h-full overflow-hidden' style={{ aspectRatio: '3/5' }}>
            {imageLoading && <LargeSwiperCardSkeleton maxHeight='100%' maxWidth='100%' />}
            <div
                className='relative flex flex-col'
            // onClick={handleSlideClick}
            >
                <Swiper
                    direction={vertical ? 'vertical' : 'horizontal'}
                    // loop={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    // freeMode={true}
                    // freeModeSticky={true}
                    navigation={false}
                    modules={[FreeMode, Navigation]}
                    style={{ width: '100%', aspectRatio: '4/5', height: 'auto' }}

                // className="mySwiper"
                >
                    {images && imagesArray.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className='w-full h-full rounded-xl overflow-hidden relative'
                                onClick={handleSlideClick}
                            >
                                <Image
                                    layout='fill'
                                    objectFit='cover'
                                    objectPosition='center'
                                    quality={50}
                                    onLoad={() => {
                                        handleImageLoad()
                                        // console.log('loaded image')
                                    }}
                                    loading='lazy'
                                    // onClick={() => handleNavigateDetails(product)}
                                    className="hover:cursor-pointer"
                                    src={image}
                                    alt={'product image'}
                                />
                                <p className="absolute w-12 h-12 flex justify-center items-center bottom-0 right-0 text-black"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        // setBgClicked(true)
                                        setShowQuantity(true)

                                    }}
                                >
                                    <FaPlus />
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='flex flex-col bg-black py-2 gap-1'>
                    <h5 className="text-[10px] text-slate-100">{productName && productName}</h5>
                    {/* <p className="text-[8px] text-gray-300">
                    {productType} <span> 4 colors</span>
                </p> */}
                    <p className="text-[10px] text-gray-400">${productPrice && productPrice}</p>
                    <p className="text-[8px] text-red-600">{inventoryAlert && inventoryAlert}</p>
                </div>

                <AnimatePresence>
                    {showQuantity &&
                        <motion.div
                            onClick={(e) => { e.stopPropagation() }}
                            className="absolute left-0 flex justify-center w-full h-auto bottom-[68px] z-[6]"
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: '100%' }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className='w-[87%] h-auto bg-black border border-[#3d3d3d] rounded-lg p-2.5'>
                                <div className='flex justify-between text-[10px] text-slate-100 py-1'>
                                    <p className='text-[8px] '>QUICK ADD</p>
                                    <FaPlus
                                        onClick={() => {
                                            if (quantity > 0) {
                                                handleAddItem({ product, quantity });
                                            }
                                        }}
                                    // className={`plus ${quantity === 0 ? 'hover:cursor-not-allowed' : ''}`}
                                    // className='plus'

                                    />
                                </div>
                                <div className="separator"></div>
                                <div className="flex justify-center items-center text-[10px] text-slate-100 gap-3 py-2">
                                    <p
                                        onClick={() => {
                                            if (quantity > 0) {
                                                setQuantity(quantity - 1)
                                            }
                                        }}
                                        className='bg-gray-700 rounded-full p-1'
                                    >
                                        <FaMinus />
                                    </p>
                                    <div>{quantity}</div>
                                    <p
                                        onClick={() => { setQuantity(quantity + 1) }}
                                        className='bg-gray-700 rounded-full p-1'
                                    >
                                        <FaPlus />
                                    </p>
                                </div>
                            </div>
                        </motion.div>}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default MobileProductSlide;

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { FreeMode, Grid, Navigation, Pagination } from 'swiper/modules';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { FaPlus, FaMinus } from 'react-icons/fa6';
import '@/app/styles/main.scss';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import LargeSwiperCardSkeleton from './HomePage-subcomponents/LargeSwiperCardSkeleton';


const suggestionsImages = [
    'https://www.nuro.la/uploads/1/4/3/6/143644655/s864328628968731809_p7_i3_w3000.png',
    'https://www.nuro.la/uploads/1/4/3/6/143644655/s864328628968731809_p14_i3_w3000.png',
    'https://www.nuro.la/uploads/1/4/3/6/143644655/s864328628968731809_p15_i3_w3000.png',
    'https://www.nuro.la/uploads/1/4/3/6/143644655/s864328628968731809_p18_i3_w3000.png'
];

let totalImages = 0
const HomeProductSlide = ({ product, onAddItem, handleNavigateDetails }) => {
    const [imageLoading, setImageLoading] = useState(true)
    const [loadedImagesCount, setLoadedImagesCount] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const images = product?.item_data?.ecom_image_uris
    const productPrice = product?.item_data?.variations[0]?.item_variation_data.price_money.amount
    const productName = product?.item_data?.name
    const productType = product?.item_data?.product_type
    const inventoryAlert = product?.item_data?.variations[0]?.item_variation_data.location_overrides[0]?.inventory_alert_type
    // console.log(inventoryAlert)
    // console.log(imageLoading)

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

    return (
        <>
            <div className='h-[400px] overflow-hidden'>
                {images && imageLoading &&
                    <LargeSwiperCardSkeleton maxWidth={278} maxHeight={400} />
                }
                <div className="item-image-box">
                    <Swiper
                        className="imageSwiper"
                        cssMode={true}
                        // direction='horizontal'
                        slidesPerView={1}
                        navigation={true}
                        modules={[Navigation]}
                    >
                        <div className="button-overlay prev-button-overlay">
                            <GrFormPrevious />
                        </div>
                        {images && Object.keys(images).map((key, imgIndex) => (
                            <SwiperSlide
                                className="imageSlide"
                                key={imgIndex}
                                onClick={() => handleNavigateDetails(product)}
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
                                    src={images[key]}
                                    alt={'product image'}
                                />
                            </SwiperSlide>
                        ))}
                        <div className="button-overlay next-button-overlay">
                            <GrFormNext />
                        </div>
                    </Swiper>
                    <p className="new">NEW</p>
                    <p className="plus">
                        <FaPlus />
                    </p>
                </div>
                <div className="item-info">
                    <h5 className="hide">{productName && productName}</h5>
                    <p className="hide">{`$${productPrice.toFixed(2)}`}</p>
                    <p className="hide ">
                        {inventoryAlert && inventoryAlert}
                    </p>
                    {/* <p className="hide">
                {productType && productType} <span> 4 colors</span>
            </p> */}
                    <div className="item-sizes-box">
                        <div>
                            <p>QUICK ADD</p>
                            <FaPlus
                                className="plus"
                                onClick={() => {
                                    if (quantity > 0) {
                                        onAddItem({ product, quantity })
                                    }
                                }
                                }
                            />
                        </div>
                        <div className="separator"></div>
                        <div className="item-sizes">
                            <p
                                onClick={() => {
                                    if (quantity > 0) {
                                        setQuantity(quantity - 1)
                                    }
                                }
                                }
                            >
                                <FaMinus />
                            </p>
                            <div>{quantity}</div>
                            <p
                                onClick={
                                    () => setQuantity(quantity + 1)
                                }
                            >
                                <FaPlus />
                            </p>
                        </div>
                    </div>
                    <div className="item-images">
                        {suggestionsImages.map((image, imgIndex) => (
                            <img key={imgIndex} src={image} alt="image" />
                        ))}
                        {/* {images && Object.keys(images).map((image, imgIndex) => (
                    <img key={imgIndex} src={image} alt="image" />
                ))} */}
                    </div>
                </div>
            </div>
        </>


    )
}

export default HomeProductSlide

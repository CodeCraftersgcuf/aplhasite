import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { FreeMode, Grid, Navigation, Pagination } from 'swiper/modules';
import HomeProductSlide from '../HomeProductSlide';
// import { DUMMY_ITEMS } from '@/utils';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const slides = Array.from({ length: 40 }, (_, index) => index + 1);
// const images = [
//     'https://cdn.shopify.com/s/files/1/1752/8007/products/TrilogyCropHoodieCelestialBlue4_400x.jpg',
//     'https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400',
// ];

// const images = product?.item_data?.ecom_image_uris

const DesktopSmallSwiper = ({ data }) => {
    const router = useRouter()

    const swiperRef2 = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleNavigateDetails = (product) => {
        return router.push('/product-details/' + product.id);
    };

    return (
        <div className="hidden lg:block">
            <Swiper
                grid={{
                    rows: 2,
                    fill: 'row',
                }}
                spaceBetween={12}
                onBeforeInit={(swiper) => {
                    swiperRef2.current = swiper;
                }}
                navigation={true}
                freeMode={true}
                modules={[Grid, Navigation, FreeMode]}
                className="mySwiper2"
                breakpoints={{
                    220: {
                        slidesPerView: 1,
                    },
                    320: {
                        slidesPerView: 1,
                    },
                    390: {
                        slidesPerView: 2,
                    },
                    520: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 4,
                    },
                    808: {
                        slidesPerView: 5,
                    },
                    1024: {
                        slidesPerView: 6,
                    },
                    1200: {
                        slidesPerView: 7,
                    },
                    1366: {
                        slidesPerView: 8,
                    },
                    // 1400: {
                    //     slidesPerView: 10,
                    // },
                    1450: {
                        slidesPerView: 9,
                    },
                    1500: {
                        slidesPerView: 10,
                    },
                    1600: {
                        slidesPerView: 11,
                    },
                    1700: {
                        slidesPerView: 11,
                    },
                }}
            >
                <button
                    onClick={() => swiperRef2.current?.slidePrev()}
                    className="swiper-button-prev swiper-button-prev2"
                >
                    <GrFormPrevious />
                </button>
                {data.map((product, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="item-image-box hover:cursor-pointer"
                            onClick={() => handleNavigateDetails(product)}
                            style={{ maxWidth: '312px', height: 'auto', aspectRatio: '4/5', display: 'flex', justifyContent: 'center', alignItems: 'center', }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            title='View product details'
                        >
                            <Image
                                className='object-cover'
                                objectFit='cover'
                                // objectPosition='center'
                                layout='responsive'
                                height={5}
                                width={4}
                                // height={190}
                                // width={150}
                                src={product.item_data.ecom_image_uris ? product?.item_data?.ecom_image_uris?.length > 1 ? hoveredIndex === index ? product?.item_data?.ecom_image_uris['1'] : product?.item_data?.ecom_image_uris['0'] : product?.item_data?.ecom_image_uris['0'] : ''}
                                alt="product image"
                            />
                            {/* <img
                                className="item-image"
                                src={product.item_data.ecom_image_uris ? product?.item_data?.ecom_image_uris?.length > 1 ? hoveredIndex === index ? product?.item_data?.ecom_image_uris['1'] : product?.item_data?.ecom_image_uris['0'] : product?.item_data?.ecom_image_uris['0'] : ''}
                                alt="product image"
                            /> */}
                            <p className="plus">
                                <FaPlus />
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
                <button
                    onClick={() => swiperRef2.current?.slideNext()}
                    className="swiper-button-next"
                >
                    <GrFormNext />
                </button>
            </Swiper>
        </div>
    )
}

export default DesktopSmallSwiper

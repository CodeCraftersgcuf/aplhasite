import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { FreeMode, Grid, Navigation, Pagination } from 'swiper/modules';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { FaPlus, FaMinus } from 'react-icons/fa6';
import '@/app/styles/main.scss';

const suggestionsImages = [
    'https://www.nuro.la/uploads/1/4/3/6/143644655/s864328628968731809_p7_i3_w3000.png',
    'https://www.nuro.la/uploads/1/4/3/6/143644655/s864328628968731809_p14_i3_w3000.png',
    'https://www.nuro.la/uploads/1/4/3/6/143644655/s864328628968731809_p15_i3_w3000.png',
    'https://www.nuro.la/uploads/1/4/3/6/143644655/s864328628968731809_p18_i3_w3000.png'
];

const HomeProductSlide = ({ product, onAddItem, handleNavigateDetails }) => {
    const [quantity, setQuantity] = useState(0)
    const images = product?.item_data?.ecom_image_uris
    const productPrice = product?.item_data?.variations[0]?.item_variation_data.price_money.amount
    const productName = product?.item_data?.name
    const productType = product?.item_data?.product_type
    const inventoryAlert = product?.item_data?.variations[0]?.item_variation_data.location_overrides[0]?.inventory_alert_type
    console.log(inventoryAlert)



    return (
        <>
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
                        <SwiperSlide className="imageSlide" key={imgIndex}>
                            <img
                                onClick={() => handleNavigateDetails(product)}
                                className="item-image hover:cursor-pointer"
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
                <p className="hide !text-gray-400">{`$${productPrice.toFixed(2)}`}</p>
                <p className="!text-red-600 text-[10px] ">
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
        </>
    )
}

export default HomeProductSlide

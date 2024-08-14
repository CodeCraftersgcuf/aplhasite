import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { FreeMode, Grid, Navigation, Pagination } from 'swiper/modules';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { FaPlus, FaMinus } from 'react-icons/fa6';
import '@/app/styles/main.scss';


const HomeProductSlide = ({ product, onAddItem, handleNavigateDetails }) => {
    const [quantity, setQuantity] = useState(0)

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
                    {product.image.map((image, imgIndex) => (
                        <SwiperSlide className="imageSlide" key={imgIndex}>
                            <img
                                onClick={() => handleNavigateDetails(product)}
                                className="item-image hover:cursor-pointer"
                                src={image}
                                alt={image.alt}
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
                <h5 className="hide">{product.name}</h5>
                <p className="hide">
                    Gliese <span> 4 colors</span>
                </p>
                <p className="hide">{`$${product.price.toFixed(2)}`}</p>
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
                    {product.image.map((image, imgIndex) => (
                        <img key={imgIndex} src={image} alt="image" />
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomeProductSlide

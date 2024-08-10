import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../../app/styles/swiper6.scss';
import { FreeMode, Pagination } from 'swiper/modules';

const DetailsSwiper = ({ productImages }) => {
  return (
    <Swiper
      slidesPerView={1}  // Default for small screens
      spaceBetween={0}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {productImages && productImages.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt="product"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default DetailsSwiper

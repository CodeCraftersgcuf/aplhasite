import React, { forwardRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../../app/styles/swiper6.scss';
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';

const DetailsSwiper = forwardRef(({ productImages }, ref) => {
  return (
    <Swiper
      ref={ref}
      slidesPerView={1} // Default for small screens
      spaceBetween={0}
      freeMode={true}
      loop={true}
      modules={[FreeMode, Pagination]}
      className="mySwiper apni-class"
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
      {productImages &&
        productImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='w-full' style={{ aspectRatio: '4/5', position: 'relative', width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#eeecec', borderRadius: '10px' }}>
              <Image
                layout='responsive'
                height={5}
                width={4}
                src={image}
                alt="product"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
})

export default DetailsSwiper

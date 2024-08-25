import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { FreeMode, Grid, Navigation, Pagination } from 'swiper/modules';
import HomeProductSlide from '../HomeProductSlide';
import { DUMMY_ITEMS } from '@/utils';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';


const DesktopLargeSwiper = ({ onAddItem, handleNavigateDetails }) => {

  const swiperRef = useRef(null);
  return (
    <div className="hidden lg:block">
      <Swiper
        freeMode={true}
        direction="horizontal"
        modules={[FreeMode]}
        className="mySwiper test ms-[30px]"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          500: {
            slidesPerView: 1,
            centeredSlides: true, // Center the slide for screen width 500px and below
          },
          510: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          920: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 4.5,
          },
          1300: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 5.5,
          },
          1600: {
            slidesPerView: 7.5,
          },
        }}
      >
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="swiper-button-prev swiper-button-prev2"
        >
          <GrFormPrevious />
        </button>
        {DUMMY_ITEMS.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="slider-items lg:ps-12 md:ps-8 sm:ps-4 ps-0"
            // style={
            //       index === 0 ? { paddingLeft: "50px", zIndex: '100' } : {}
            //     }
            >
              <div className="slider-item">
                <HomeProductSlide
                  key={index}
                  product={item}
                  onAddItem={onAddItem}
                  handleNavigateDetails={handleNavigateDetails}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* {!women &&
              DUMMY_ITEMS.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="slider-items lg:ps-10 sm:ps-4"
                    style={
                      index === 0 ? { margin: '30px 20px', zIndex: '100' } : {}
                    }
                  >
                    <div className="slider-item">
                      <div
                        className="item-image-box"
                        onClick={() => hanldeNavigateDetails(item)}
                      >
                        <Swiper
                          className="imageSwiper"
                          cssMode={true}
                          // onBeforeInit={(swiper) => {
                          //   innerSwiperRef.current = swiper;
                          // }}
                          slidesPerView={1}
                          navigation={true}
                          modules={[Navigation]}
                        >
                          <div className="button-overlay prev-button-overlay">
                            <GrFormPrevious />
                          </div>
                          {item.image.map((image, imgIndex) => (
                            <SwiperSlide className="imageSlide" key={imgIndex}>
                              <img
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
                        <h5 className="hide">{item.name}</h5>
                        <p className="hide">
                          Gliese <span> 4 colors</span>
                        </p>
                        <p className="hide">{`£${item.price.toFixed(2)}`}</p>
                        <div className="item-sizes-box">
                          <div>
                            <p>QUICK ADD</p>
                            <FaPlus className="plus" />
                          </div>
                          <div className="separator"></div>
                          <div className="item-sizes">
                            {buttonSizes.map((size, index) => (
                              <p onClick={() => addItem({ item, size })}>
                                {size}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className="item-images">
                          {item.image.map((image, imgIndex) => (
                            <img key={imgIndex} src={image} alt="image" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))} */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="swiper-button-next swip-btn-next"
        >
          <GrFormNext />
        </button>
      </Swiper>
    </div>
  )
}

export default DesktopLargeSwiper

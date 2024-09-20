'use client';
import Hero from '@assets/Top-banner.png';
import '@/app/styles/main.scss';
import { useRouter } from 'next/navigation';
import React, { useRef, useState, useEffect } from 'react';
import firstImg from '@assets/Nuro-1ml-Hybrid-GOAT-with deivce-min.png';
import secondImg from '@assets/Candy 5ml pack open-Jolly dub-broad spec 01-min.png';
import thirdImg from '@assets/Nuro 3ml-black-with device-Sativa-Berryland-min.png';
import SubscribeModal from '@/components/SubscribeModal';
import { setDeviceType } from '@/store/slices/currentDevice';
import AgeVerificationModal from '@/components/AgeVerificationModal';
import { useSelector } from 'react-redux';
import WithHeaderWrapper from '@/components/WithHeaderWrapper';
import { itemsActions } from '@/store/slices/cartItems';
import { useDispatch } from 'react-redux';
import PreFooter from '@/components/HomePage-subcomponents/PreFooter';
import TopContainer from '@/components/HomePage-subcomponents/TopContainer';
import SliderHeading from '@/components/HomePage-subcomponents/SliderHeading';
import SliderButtons from '@/components/HomePage-subcomponents/SliderButtons';
import DesktopLargeSwiper from '@/components/HomePage-subcomponents/DesktopLargeSwiper';
import LowerContainer from '@/components/HomePage-subcomponents/LowerContainer';
import DesktopSmallSwiper from '@/components/HomePage-subcomponents/DesktopSmallSwiper';
import MobileSwiper from '@/components/HomePage-subcomponents/MobileSwiper';
import MobileSmallSwiper from '@/components/HomePage-subcomponents/MobileSmallSwiper';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCart from '@/components/MobileCart';
import DesktopCart from '@/components/DesktopCart';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';

const topSmallBanners = [
  {
    url: firstImg,
    // url: 'https://www.nuro.la/uploads/1/4/3/6/143644655/s864328628968731809_p7_i3_w3000.png',
    name: '1ML DISPOSABLES',
    subtitle: 'NURO',
    btn1: 'Essential Blend',
    btn2: 'Broad Spec',
  },
  {
    url: secondImg,
    // url: 'https://517992454425628599.square.site/uploads/1/4/6/0/146082605/s650997120377647197_p138_i1_w3000.png',
    name: '5ML DISPOSABLES',
    subtitle: 'CANDY',
    btn1: 'Broad Spec  ',
    btn2: 'Shop All',
  },
  {
    url: thirdImg,
    // url: 'https://517992454425628599.square.site/uploads/1/4/6/0/146082605/s650997120377647197_p14_i4_w1920.png',
    name: '3ML DISPOSABLES ',
    subtitle: 'NURO',
    btn1: 'Broad Spec',
    btn2: 'Shop All',
  },
  ,
];

const HomePage = ({ data }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [ageVerification, setageVerification] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setDeviceType());
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set device type on initial load

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);
  const isOpen = useSelector((state) => state.modalFn);
  const device = useSelector((state) => state.deviceFn.deviceType);
  const state = useSelector((state) => state.stateFn.currentState);
  // console.log(data);

  const innerSwiperRef = useRef();

  // const dataArray = Object.values(data.items);
  // const reversedDataArray = dataArray.reverse();
  const splicedDataArray = data.items;
  // const splicedDataArray = dataArray.splice(0, 30);
  // console.log(splicedDataArray);

  const handleNavigateDetails = (product) => {
    return router.push('/product-details/' + product.id);
  };
  const onAddItem = ({ product, quantity = 1 }) => {
    dispatch(itemsActions.addItem({ product, quantity }));
  };

  useEffect(() => {
    setageVerification(true);
    return () => {
      setageVerification(false);
    };
  }, []);
  console.log(state);
  return (
    // <WithHeaderWrapper>
    <>
      <Header fixed={true} white={true} categories={data.categories} />
      <Toaster position="bottom-center" />
      <div id="smooth-wrapper scrollbar-hide">
        <div id="smooth-content scrollbar-hide">
          <AnimatePresence>
            {isOpen &&
              (device === 'mobile' || device === 'tablet' ? (
                <MobileCart isOpen={isOpen} products={products} />
              ) : (
                <DesktopCart isOpen={isOpen} products={products} />
              ))}
          </AnimatePresence>
          <main className="home">
            {/* <Toaster position="bottom-center" /> */}
            <AnimatePresence>
              {ageVerification && <AgeVerificationModal />}
            </AnimatePresence>
            {/* {state === CURRENT_STATES.LOGOUT && <SubscribeModal />} */}
            <div className="relative max-w-[100%] h-dvh">
              <motion.div
                initial={{ scale: 1.05, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 2,
                  ease: [0.87, 0, 0.13, 1],
                }}
                className="absolute w-full h-full"
              >
                <Image
                  src={Hero}
                  alt="Hero"
                  layout="fill" // Ensures the image takes the full container size
                  objectFit="cover" // Makes sure the image covers the container
                  priority={true} // Optional: Prioritize loading of this image
                />
              </motion.div>

              <TopContainer />
            </div>
            {/* Upper new arrivals */}
            <SliderHeading />
            <div className="sliders overflow-x-hidden">
              <SliderButtons toggle={toggle1} setToggle={setToggle1} />
              <MobileSwiper data={splicedDataArray} />
              <DesktopLargeSwiper
                handleNavigateDetails={handleNavigateDetails}
                onAddItem={onAddItem}
                data={splicedDataArray}
              />
              <LowerContainer data={topSmallBanners} />
              <SliderHeading toggle={toggle2} />{' '}
              {/* Lower new arrivals || !mt-14 */}
              <SliderButtons toggle={toggle2} setToggle={setToggle2} />
              <DesktopSmallSwiper data={splicedDataArray} />
              <MobileSmallSwiper data={splicedDataArray} />
              {/* <BottomContainer /> */}
              {/* <LowerContainer data={topSmallBanners} videos={''} /> */}
              <PreFooter />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>

    // </WithHeaderWrapper>
  );
};

export default HomePage;

{
  /* <div className="topPage">
  <aside className="video-background">
    <video className="video-overlay min-w-[100%]" autoPlay muted loop>
      <source
        src="https://cdn.shopify.com/videos/c/o/v/331b4aa9d8cb4d3b984bd160fa65030b.mp4"
        type="video/webm"
      />
      Your browser does not support the video tag.
    </video>
  </aside>
  <div className="content">
    <h1>New Arrivals</h1>
    <p>Amplify Reimagined</p>
    <button className="button">Shop Women</button>
    <button className="button">Shop Men</button>
  </div>
</div> */
}
/* <Swiper
  className="mySwiper4 swiper-h"
  spaceBetween={50}
  pagination={{
    clickable: true,
  }}
  modules={[Pagination]}
>
  <SwiperSlide className="swiper-v2">
    <div className="shopLook shop1">
      <div className="shopLook-img">
        <img
          style={{ width: '100%', height: '100%' }}
          src="https://alphalete.uk/cdn/shop/files/4U8A0519_115c8311-a184-49e8-8c08-ed9fa1473b64_800x.jpg?v=1714234121"
        />
        <div className="point1 points"></div>
        <div className="point2 points"></div>
        <div className="point3 points"></div>
        <div className="point4 points"></div>
      </div>
    </div>
    <div className='vertical-container'> 
    <Swiper
      className="swiper-v"
      direction={'vertical'}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide className="swiper-part">
        <div className="slider-items">
          <div className="slider-item">
            <div className="item-image-box">
              <img
                className="item-image"
                src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                alt=""
              />
              <p className="new">NEW</p>
              <p className="plus">
                <FaPlus />
              </p>
            </div>
            <div className="item-info">
              <h5 className="hide">Amplify Gemini Bra</h5>
              <p className="hide">
                Gliese <span> 4 colors</span>
              </p>
              <p className="hide">£120.00</p>
              <div className="item-sizes-box">
                <div>
                  <p>QUICK ADD</p>
                  <FaPlus className="plus" />
                </div>
                <div className="separator"></div>
                <div className="item-sizes">
                  <p>XXS</p>
                  <p>XS</p>
                  <p>S</p>
                  <p>M</p>
                  <p>L</p>
                  <p>XL</p>
                  <p>XXL</p>
                </div>
              </div>
              <div className="item-images">
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-part">
        <div className="slider-items">
          <div className="slider-item">
            <div className="item-image-box">
              <img
                className="item-image"
                src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                alt=""
              />
              <p className="new">NEW</p>
              <p className="plus">
                <FaPlus />
              </p>
            </div>
            <div className="item-info">
              <h5 className="hide">Amplify Gemini Bra</h5>
              <p className="hide">
                Gliese <span> 4 colors</span>
              </p>
              <p className="hide">£120.00</p>
              <div className="item-sizes-box">
                <div>
                  <p>QUICK ADD</p>
                  <FaPlus className="plus" />
                </div>
                <div className="separator"></div>
                <div className="item-sizes">
                  <p>XXS</p>
                  <p>XS</p>
                  <p>S</p>
                  <p>M</p>
                  <p>L</p>
                  <p>XL</p>
                  <p>XXL</p>
                </div>
              </div>
              <div className="item-images">
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-part">
        <div className="slider-items">
          <div className="slider-item">
            <div className="item-image-box">
              <img
                className="item-image"
                src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                alt=""
              />
              <p className="new">NEW</p>
              <p className="plus">
                <FaPlus />
              </p>
            </div>
            <div className="item-info">
              <h5 className="hide">Amplify Gemini Bra</h5>
              <p className="hide">
                Gliese <span> 4 colors</span>
              </p>
              <p className="hide">£120.00</p>
              <div className="item-sizes-box">
                <div>
                  <p>QUICK ADD</p>
                  <FaPlus className="plus" />
                </div>
                <div className="separator"></div>
                <div className="item-sizes">
                  <p>XXS</p>
                  <p>XS</p>
                  <p>S</p>
                  <p>M</p>
                  <p>L</p>
                  <p>XL</p>
                  <p>XXL</p>
                </div>
              </div>
              <div className="item-images">
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </SwiperSlide>
  <SwiperSlide className="swiper-v2">
    <div className="shopLook shop1">
      <div className="shopLook-img">
        <img src="https://alphalete.uk/cdn/shop/files/aa24-apr13-01_800x.jpg?v=1713021766" />
        <div className="point5 points"></div>
        <div className="point6 points"></div>
        <div className="point7 points"></div>
        <div className="point8 points"></div>
        <div className="point9 points"></div>
      </div>
    </div>
    <Swiper
      className="swiper-v"
      direction={'vertical'}
      spaceBetween={50}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide className="swiper-part fst-swiper">
        <div className="slider-items">
          <div className="slider-item">
            <div className="item-image-box">
              <img
                className="item-image"
                src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                alt=""
              />
              <p className="new">NEW</p>
              <p className="plus">
                <FaPlus />
              </p>
            </div>
            <div className="item-info">
              <h5 className="hide">Amplify Gemini Bra</h5>
              <p className="hide">
                Gliese <span> 4 colors</span>
              </p>
              <p className="hide">£120.00</p>
              <div className="item-sizes-box">
                <div>
                  <p>QUICK ADD</p>
                  <FaPlus className="plus" />
                </div>
                <div className="separator"></div>
                <div className="item-sizes">
                  <p>XXS</p>
                  <p>XS</p>
                  <p>S</p>
                  <p>M</p>
                  <p>L</p>
                  <p>XL</p>
                  <p>XXL</p>
                </div>
              </div>
              <div className="item-images">
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-part">
        <div className="slider-items">
          <div className="slider-item">
            <div className="item-image-box">
              <img
                className="item-image"
                src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                alt=""
              />
              <p className="new">NEW</p>
              <p className="plus">
                <FaPlus />
              </p>
            </div>
            <div className="item-info">
              <h5 className="hide">Amplify Gemini Bra</h5>
              <p className="hide">
                Gliese <span> 4 colors</span>
              </p>
              <p className="hide">£120.00</p>
              <div className="item-sizes-box">
                <div>
                  <p>QUICK ADD</p>
                  <FaPlus className="plus" />
                </div>
                <div className="separator"></div>
                <div className="item-sizes">
                  <p>XXS</p>
                  <p>XS</p>
                  <p>S</p>
                  <p>M</p>
                  <p>L</p>
                  <p>XL</p>
                  <p>XXL</p>
                </div>
              </div>
              <div className="item-images">
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-part">
        <div className="slider-items">
          <div className="slider-item">
            <div className="item-image-box">
              <img
                className="item-image"
                src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                alt=""
              />
              <p className="new">NEW</p>
              <p className="plus">
                <FaPlus />
              </p>
            </div>
            <div className="item-info">
              <h5 className="hide">Amplify Gemini Bra</h5>
              <p className="hide">
                Gliese <span> 4 colors</span>
              </p>
              <p className="hide">£120.00</p>
              <div className="item-sizes-box">
                <div>
                  <p>QUICK ADD</p>
                  <FaPlus className="plus" />
                </div>
                <div className="separator"></div>
                <div className="item-sizes">
                  <p>XXS</p>
                  <p>XS</p>
                  <p>S</p>
                  <p>M</p>
                  <p>L</p>
                  <p>XL</p>
                  <p>XXL</p>
                </div>
              </div>
              <div className="item-images">
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </SwiperSlide>
</Swiper> */

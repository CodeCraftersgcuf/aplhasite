'use client'
/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import '../app/header.scss'
import { FaSearch } from "react-icons/fa";
import { SlBag } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { modalActions } from "@/store/openModel";
import { itemsActions } from "@/store/cartItems";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomToast from "./customToast";



const Header = () => {
  const dispatch = useDispatch()
  const addedItems = useSelector((state) => state.itemsFn.items)
  const stateMessage = useSelector((state) => state.itemsFn.message)
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false);

  if (stateMessage === 'itemAdded') {
    toast.success('Item added to cart', {
      className: 'added-toast',
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    })
    dispatch(itemsActions.resetMessage())
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check scroll position
    if (window.scrollY > 100) { // Change 100 to whatever scroll position you prefer
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const showCartModal = () => {
    dispatch(modalActions.openModal())
  }
  return (
    <>
      <header>
        {!isScrolled && (
          <div className='preheader'>
            <Swiper className="mySwiper" loop={true} autoplay={true}>
              <SwiperSlide><p>Free Domestic Shipping over £120 and 30 Day Returns</p></SwiperSlide>
              <SwiperSlide><p>Free Domestic Shipping over £120 and 30 Day Returns</p></SwiperSlide>
            </Swiper>
            <div className="example05">
              <Link href="/">Info</Link>
              <Link href="/">Login</Link>
            </div>
          </div>
        )}
        <div className="separator"></div>
        <div className="header">
  <h3
    className="hover:cursor-pointer"
    onClick={() => window.location.href = '/'}
  >
    ALPHALETE
  </h3>
  <div className="example05">
    <p
      style={{ padding: '0 10px', cursor: 'pointer' }}
      onClick={() => window.location.href = '/'}
    >
      MEN
    </p>
    <p
      style={{ cursor: 'pointer' }}
      onClick={() => window.location.href = '/'}
    >
      WOMEN
    </p>
  </div>
  <div>
    <FaSearch />
    <SlBag onClick={showCartModal} className="cart" />
    <p>{addedItems.length}</p>
    <RxHamburgerMenu color="white" className="burger" />
  </div>
</div>
        <ToastContainer />
      </header>
    </>
  );
};

export default Header;

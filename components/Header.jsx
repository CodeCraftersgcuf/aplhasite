"use client";
/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../app/header.scss";
import { FaSearch } from "react-icons/fa";
import { SlBag } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "@/store/slices/openModel";
import { itemsActions } from "@/store/slices/cartItems";
import PopUp from "@/components/Header-subcomponents/PopUp";
import Image from "next/image";
import pang3aBlack from "@assets/Pang3aBlack.png";
import pang3aWhite from "../assets/pang3a.png";
import _ from "lodash";
import DropDown from "@/components/Header-subcomponents/DropDown";
import headerPhoto from '@assets/headerPhoto.png'
import headerWhite from '@assets/headerWhite.png'

const Header = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [cartItemsNo, setCartItemsNo] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const addedItems = useSelector((state) => state.itemsFn.items);
  // const stateMessage = useSelector((state) => state.itemsFn.message);
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);



  //its because the normal state of redux causes hydration error
  useEffect(() => {
    setCartItemsNo(addedItems.length);
  }, [addedItems]);

  useEffect(() => {
    const addThreshold = 80; // Scroll position at or above which the class is added
    const removeThreshold = 30; // Scroll position below which the class is removed

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Add class if the initial scroll position is beyond addThreshold
      if (scrollY >= addThreshold) {
        setIsScrolled(true);
      } else if (scrollY <= removeThreshold) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check to handle cases where the initial scroll position is beyond addThreshold
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  const handleOpenPopUp = () => {
    setShowPopUp(true);
  };

  const showCartModal = () => {
    dispatch(modalActions.openModal());
  };

  return (
    <>
      <header
        className={`header-nav z-50 ${isScrolled ? "scrolled" : "transparent"}`}
        style={{ zIndex: 59 }} // Using a number instead of a string
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isScrolled && (
          <div className="preheader ">
            {/* <div className="mySwiper"> */}
            {/* <div className="swiper-wrapper"> */}
            {/* <div className="swiper-slide"> */}
            <p className="ps-7">
              Free Domestic Shipping over $120 and 30 Day Returns
            </p>
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}

            <div className="example05">
              <Link className="border-s-[1px] ms-1 border-gray-600" href="/">
                Info
              </Link>
              <Link className="border-s-[1px] ms-1 border-gray-600" href="/sign-in">
                Login
              </Link>
            </div>
          </div>
        )}
        <div className="separator"></div>
        <div className="header">
          <div className="flex h-full items-center gap-5">
            <Image
              onClick={() => (router.push("/"))}
              src={isHovered || isScrolled ? headerPhoto : headerWhite}
              alt="Logo Here"
              className="h-[22px] object-contain w-auto hover:cursor-pointer"
              title="Go to Home Page"
            />
            <div className="example05 flex items-center">
              <div
                style={{ cursor: "pointer" }}
                // onClick={() => (router.push(''))}
                className=" dropdown-trigger text-[11px] "
                onMouseOver={() => setShowDropdown(true)}
                onMouseOut={() => setShowDropdown(false)}
              >
                SHOP
              </div>
              {/* <p
                style={{ padding: "0 10px", cursor: "pointer" }}
                onClick={() => (window.location.href = "/")}
                className="text-[11px] text-gray-700 "
              >
                MEN
              </p> */}
            </div>
          </div>
          <div className="relative">
            {/* <FaSearch /> */}
            <div onClick={showCartModal} className="relative">
              <SlBag className="relative" />
              <p className="mt-[15px] w-[20px] absolute pr-0 top-2 right-0.5 bg-white !text-black border-0 rounded-full text-center cart-num hover:cursor-pointer">
                {cartItemsNo}
              </p>
            </div>
            <RxHamburgerMenu
              color="white"
              className={`burger ${isScrolled ? "scrolled" : ""}`}
              onClick={() => {
                if (!showPopUp) {
                  handleOpenPopUp()
                } else {
                  handleClosePopUp()
                }
              }}
            />
          </div>
        </div>
        <DropDown
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
        <PopUp
          showPopUp={showPopUp}
          handleClose={handleClosePopUp}
        />
      </header>
    </>
  );
};

export default Header;

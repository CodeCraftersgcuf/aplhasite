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
import { modalActions } from "@/store/openModel";
import { itemsActions } from "@/store/cartItems";
import Image from "next/image";
import pang3a from "@assets/Pang3aBlack.png";
import pang3aWhite from "../assets/pang3a.png";
import _ from "lodash";

const items = Array.from({ length: 5 }, (_, index) => index + 1);

const Header = () => {
  const dispatch = useDispatch();
  const addedItems = useSelector((state) => state.itemsFn.items);
  // const stateMessage = useSelector((state) => state.itemsFn.message);
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState( );

  useEffect(() => {
    const handleScroll = _.debounce(() => {
      setIsScrolled(window.scrollY >= 50); // Change > to >= to handle the case when exactly 30
    }, 200); // Debounce with a 200ms delay
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // Clean up debounce
    };
  }, []);

  const showCartModal = () => {
    dispatch(modalActions.openModal());
  };

  return (
    <>
      <header
        className={`header-nav z-50 ${isScrolled ? "scrolled" : "transparent"}`}
      >
        {!isScrolled && (
          <div className="preheader hover:bg-black">
            {/* <div className="mySwiper"> */}
            {/* <div className="swiper-wrapper"> */}
            {/* <div className="swiper-slide"> */}
            <p className="text-white ps-7">
              Free Domestic Shipping over $120 and 30 Day Returns
            </p>
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}

            <div className="example05">
              <Link className="border-s-[1px] ms-1 border-gray-600" href="/">
                Info
              </Link>
              <Link className="border-s-[1px] ms-1 border-gray-600" href="/">
                Login
              </Link>
            </div>
          </div>
        )}
        <div className="separator"></div>
        <div className="header">
          <div className="flex h-full items-center gap-5">
            <Image
              onClick={() => (window.location.href = "/")}
              src={pang3aWhite}
              alt="Logo Here"
              className="h-[22px] object-contain w-auto"
            />
            <div className="example05 flex items-center">
              <div
                style={{ cursor: "pointer" }}
                // onClick={() => (router.push(''))}
                className=" dropdown-trigger text-[11px] text-gray-700 "
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
            <FaSearch />
            <SlBag onClick={showCartModal} className="cart" />
            <p className="mt-[15px] w-[20px]  absolute pr-0 top-2 right-0.5 bg-white !text-black border-0 rounded-full text-center cart-num">
              {addedItems.length}
            </p>
            {/* <RxHamburgerMenu color="white" className="burger" /> */}
          </div>
        </div>
        {showDropdown && (
          <div
            className="dropdown-container"
            onMouseOver={() => setShowDropdown(true)}
            onMouseOut={() => setShowDropdown(false)}
          >
            <div className="left">
              <div className="grid">
                {items.map((item, index) => (
                  <div key={index} className="row">
                    <p className="first">Heading</p>
                    <p className="header-links">First</p>
                    <p className="header-links">Second</p>
                    <p className="header-links">Third</p>
                    <p className="header-links">Fourth</p>
                    <p className="header-links">Fifth</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div className="image-container">
                <img
                  src="https://alphalete.uk/cdn/shop/files/IceTankHeat2_2500x.jpg?v=1721064079"
                  alt="Image 1"
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/IceTankHeat5_2500x.jpg?v=1721064079"
                  alt="Image 2"
                />
                <img
                  src="https://alphalete.uk/cdn/shop/files/IceTankHeat5_2500x.jpg?v=1721064079"
                  alt="Image 3"
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

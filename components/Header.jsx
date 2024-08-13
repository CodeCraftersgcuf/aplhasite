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

const Header = () => {
  const dispatch = useDispatch();
  const addedItems = useSelector((state) => state.itemsFn.items);
  // const stateMessage = useSelector((state) => state.itemsFn.message);
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  // if (stateMessage === "itemAdded") {
  //   toast.success("Item added to cart", {
  //     className: "added-toast",
  //     position: "bottom-center",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     draggable: true,
  //   });
  //   dispatch(itemsActions.resetMessage());
  // }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showCartModal = () => {
    dispatch(modalActions.openModal());
  };

  return (
    <>
      <header
        className={`header-nav ${isScrolled ? "scrolled" : "transparent"}`}
      >
        {!isScrolled && (
          <div className="preheader z-20">
            <div className="mySwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <p>Free Domestic Shipping over £120 and 30 Day Returns</p>
                </div>
              </div>
            </div>

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
          <div className=" gap-5">
            <h3
              className="hover:cursor-pointer text-[14px]"
              onClick={() => (window.location.href = "/")}
            >
              ALPHALETE
            </h3>
            <div className="example05 flex items-center mt-1">
              <p
                style={{ cursor: "pointer" }}
                onClick={() => (window.location.href = "/")}
                className="text-[11px] text-gray-700 "
              >
                WOMEN
              </p>
              <p
                style={{ padding: "0 10px", cursor: "pointer" }}
                onClick={() => (window.location.href = "/")}
                className="text-[11px] text-gray-700 "
              >
                MEN
              </p>
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
      </header>
    </>
  );
};

export default Header;

'use client';
import WithHeaderWrapper from '@/components/WithHeaderWrapper';
import ProductSlide from '@/components/ProductDetails-subcomponents/ProductSlide';
import { DUMMY_ITEMS, vapeProducts } from '@/utils';
import '@/app/styles/main.scss';
import { useEffect, useState } from 'react';
import { itemsActions } from '@/store/slices/cartItems';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import MobilePopUpBtns from '@/components/shop-subcomponents/MobilePopUpBtns';
import { useRef } from 'react';
import './shop.css';
import ShopPopUp from '@/components/shop-subcomponents/ShopPopUp';
import ShopSidebar from '@/components/shop-subcomponents/ShopSidebar';
import ShopDesktopProduct from '@/components/shop-subcomponents/ShopDesktopProduct';
import ShopProductMobile from '@/components/shop-subcomponents/ShopProductMobile';
import { useSelector } from 'react-redux';
import notify from '@/helpers/notify';
import TopImage from '@/components/shop-subcomponents/TopImage';

const slides = Array.from({ length: 15 }, (_, index) => index + 1);
const ShopPage = ({ data }) => {
  const device = useSelector((state) => state.deviceFn.deviceType);
  const [showPopUp, setShowPopUp] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false)
  const [isStyles, setStyles] = useState(true);
  const dispatch = useDispatch();

  const dataArray = Object.values(data);
  const reversedDataArray = dataArray.reverse();
  const splicedDataArray = reversedDataArray.splice(0, 30);

  const addItem = ({ product, quantity = 1 }) => {
    const item = DUMMY_ITEMS.find((item) => item.id === product.id);
    // console.log(item)
    dispatch(itemsActions.addItem({ product: item, quantity }));
    notify({ product: item, quantity, adding: true, removing: false });
  };

  return (
    <WithHeaderWrapper>
      <div className="w-full bg-white">
        <TopImage />
        <div className={`flex bg-black lg:bg-white px-8 w-full`}>
          <ShopSidebar isStyles={isStyles} setStyles={setStyles} />
          <ShopDesktopProduct addItem={addItem} products={splicedDataArray} />
          <ShopProductMobile
            addItem={addItem}
            showPopUp={showPopUp}
            products={splicedDataArray}
          />
          <MobilePopUpBtns
            isStyles={isStyles}
            setStyles={setStyles}
            setShowPopUp={setShowPopUp}
          />

          {(device === 'mobile' || device === 'tablet') && (
            <ShopPopUp
              showPopUp={showPopUp}
              setShowPopUp={setShowPopUp}
              setStyles={setStyles}
              isStyles={isStyles}
            />
          )}
        </div>
      </div>
    </WithHeaderWrapper>
  );
};

export default ShopPage;

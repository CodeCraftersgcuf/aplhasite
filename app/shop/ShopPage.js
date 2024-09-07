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
import usePost from '@/hooks/usePost';
import categoryToId from '@/helpers/categoryToId';

const slides = Array.from({ length: 15 }, (_, index) => index + 1);
const ShopPage = ({ data }) => {
  const { isLoading, isSuccess, resData, isError, postData } = usePost();
  const device = useSelector((state) => state.deviceFn.deviceType);
  const selectedCategory = useSelector(
    (state) => state.categoryFn.selectedCategory
  );

  const [showPopUp, setShowPopUp] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false)
  const [isStyles, setStyles] = useState(true);
  const dispatch = useDispatch();

  const dataArray = Object.values(data);
  const reversedDataArray = dataArray.reverse();
  const splicedDataArray = reversedDataArray.splice(0, 30);
  // console.log(splicedDataArray);

  const addItem = ({ product, quantity = 1 }) => {
    // const item = DUMMY_ITEMS.find((item) => item.id === product.id);
    // console.log(item)
    dispatch(itemsActions.addItem({ product, quantity }));
    notify({ product, quantity, adding: true, removing: false });
  };

  useEffect(() => {
    if (selectedCategory !== 'null') {
      postData({
        url:
          'http://localhost:3000/api/search-by-category/' +
          categoryToId(selectedCategory),
        data: '',
      });
    }
  }, [selectedCategory]);
  console.log(selectedCategory);
  console.log(resData);
  return (
    <WithHeaderWrapper>
      <div className="w-full bg-white">
        <TopImage />
        <div className={`flex bg-black lg:bg-white px-8 w-full`}>
          <ShopSidebar isStyles={isStyles} setStyles={setStyles} />
          {isLoading ? (
            <div className="fixed h-screen w-screen top-0 inset-0 z-50 flex items-center justify-center bg-black gap-16 bg-opacity-90 text-white">
              <div class="loader"></div>
            </div>
          ) : (
            <ShopDesktopProduct
              addItem={addItem}
              products={Array.isArray(resData) ? resData : splicedDataArray}
            />
          )}
          <ShopProductMobile
            addItem={addItem}
            showPopUp={showPopUp}
            products={Array.isArray(resData) ? resData : splicedDataArray}
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

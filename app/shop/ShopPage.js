'use client';
import WithHeaderWrapper from '@/components/WithHeaderWrapper';
import ProductSlide from '@/components/ProductDetails-subcomponents/ProductSlide';
// import { DUMMY_ITEMS, vapeProducts } from '@/utils';
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
import { categoryToId } from '@/helpers/categoryToId';
import categoryDataToDisplay from '@/helpers/categoryDataToDisplay';

const slides = Array.from({ length: 15 }, (_, index) => index + 1);
const ShopPage = ({ data }) => {
  const { isLoading, isSuccess, resData, isError, postData } = usePost();
  const device = useSelector((state) => state.deviceFn.deviceType);
  const selectedCategory = useSelector(
    (state) => state.categoryFn.selectedCategory
  );
  const searchTerm = useSelector((state) => state.categoryFn.searchTerm);
  const [showPopUp, setShowPopUp] = useState(false);
  const [isStyles, setStyles] = useState(true);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const dispatch = useDispatch();

  const dataArray = Object.values(data.data);
  // console.log(data.categories);
  // const reversedDataArray = dataArray.reverse();
  const splicedDataArray = dataArray;
  // const splicedDataArray = reversedDataArray.splice(0, 30);
  // console.log(splicedDataArray);

  const addItem = ({ product, quantity = 1 }) => {
    // const item = DUMMY_ITEMS.find((item) => item.id === product.id);
    // console.log(item)
    dispatch(itemsActions.addItem({ product, quantity }));
    // notify({ product, quantity, adding: true, removing: false });
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // 300ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  console.log(selectedCategory);

  useEffect(() => {
    if (selectedCategory !== '' || debouncedSearchTerm.trim() !== '') {
      // console.log(selectedCategory);
      postData({
        url: '/api/search-items',
        data: {
          categoryId: selectedCategory,
          searchTerm: debouncedSearchTerm,
        },
      });
    }
  }, [selectedCategory, debouncedSearchTerm]);

  console.log(data.categories);
  return (
    <WithHeaderWrapper categories={data?.categories}>
      <div className="w-full bg-white">
        <TopImage />
        <div className={`flex bg-white px-8 w-full`}>
          <ShopSidebar
            categoryData={data && categoryDataToDisplay(data.categories)}
            itemsData={data.data}
            isStyles={isStyles}
            setStyles={setStyles}
          />
          {/* {isLoading ? (
            <div className="fixed h-screen w-screen top-0 inset-0 z-50 flex items-center justify-center bg-black gap-16 bg-opacity-90 text-white">
              <div class="loader"></div>
            </div>
          ) : ( */}
          <>
            <ShopDesktopProduct
              addItem={addItem}
              products={Array.isArray(resData) ? resData : splicedDataArray}
              isLoading={isLoading}
            />
            <ShopProductMobile
              addItem={addItem}
              showPopUp={showPopUp}
              products={Array.isArray(resData) ? resData : splicedDataArray}
              isLoading={isLoading}
            />
          </>
          {/* )} */}
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
              categoryData={data && categoryDataToDisplay(data.categories)}
            />
          )}
        </div>
      </div>
    </WithHeaderWrapper>
  );
};

export default ShopPage;

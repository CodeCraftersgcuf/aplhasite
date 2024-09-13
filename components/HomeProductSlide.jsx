import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { FreeMode, Grid, Navigation, Pagination } from 'swiper/modules';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { FaPlus, FaMinus } from 'react-icons/fa6';
import '@/app/styles/main.scss';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import LargeSwiperCardSkeleton from './HomePage-subcomponents/LargeSwiperCardSkeleton';
import { itemsActions } from '@/store/slices/cartItems';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

let inventoryAlert = null
const suggestionsImages = [
    'https://www.nuro.la/uploads/1/4/3/6/143644655/s864328628968731809_p7_i3_w3000.png',
    'https://www.nuro.la/uploads/1/4/3/6/143644655/s864328628968731809_p14_i3_w3000.png',
    'https://www.nuro.la/uploads/1/4/3/6/143644655/s864328628968731809_p15_i3_w3000.png',
    'https://www.nuro.la/uploads/1/4/3/6/143644655/s864328628968731809_p18_i3_w3000.png'
];

let totalImages = 0
const HomeProductSlide = ({ product }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [imageLoading, setImageLoading] = useState(true)
    const [loadedImagesCount, setLoadedImagesCount] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const images = product?.item_data?.ecom_image_uris
    const productPrice = product?.item_data?.variations[0]?.item_variation_data.price_money?.amount / 100
    const productName = product?.item_data?.name
    const productType = product?.item_data?.product_type
    if (product?.item_data?.variations) {
        if (Array.isArray(product?.item_data?.variations[0]?.item_variation_data.location_overrides)) {
            inventoryAlert = product?.item_data?.variations[0]?.item_variation_data.location_overrides[0]?.inventory_alert_type
        }
    }
    // const inventoryAlert = product?.item_data?.variations[0]?.item_variation_data.location_overrides[0]?.inventory_alert_type
    // console.log(inventoryAlert)
    // console.log(imageLoading)

    if (images) {
        totalImages = Object.keys(images).length
    }
    // console.log(totalImages)
    const handleImageLoad = () => {
        setLoadedImagesCount((prevCount) => {
            const newCount = prevCount + 1;
            if (newCount === totalImages) {
                setImageLoading(false); // Set loading to false when all images are loaded
            }
            return newCount;
        });
    };

    const handleAddItem = ({ product, quantity = 1 }) => {
        dispatch(itemsActions.addItem({ product, quantity }));
    };

    const handleNavigateDetails = (product) => {
        return router.push('/product-details/' + product.id)
    }

    return (

        <div className='h-full w-full overflow-hidden relative'>
            {images && imageLoading &&
                <LargeSwiperCardSkeleton />
            }
            <div className="item-image-box">
                <Swiper
                    className="imageSwiper"
                    cssMode={true}
                    // direction='horizontal'
                    slidesPerView={1}
                    navigation={true}
                    modules={[Navigation]}
                >
                    <div className="button-overlay prev-button-overlay">
                        <GrFormPrevious />
                    </div>
                    {images && images.map((key, imgIndex) => (
                        <SwiperSlide
                            // className="imageSlide"
                            key={imgIndex}
                            onClick={() => handleNavigateDetails(product)}
                        >
                            <div style={{ aspectRatio: '4/5', position: 'relative', width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F6F6F6', borderRadius: '10px' }}>
                                <Image
                                    layout='responsive'
                                    objectFit='contain'
                                    height={5}
                                    width={4}
                                    objectPosition='center'
                                    quality={20}
                                    onLoad={() => {
                                        handleImageLoad()
                                        // console.log('loaded image')
                                    }}
                                    loading='lazy'
                                    // onClick={() => handleNavigateDetails(product)}
                                    className="hover:cursor-pointer"
                                    src={key}
                                    alt={'product image'}
                                />
                                <p className="new">NEW</p>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="button-overlay next-button-overlay">
                        <GrFormNext />
                    </div>
                </Swiper>
            </div>
            <div className="item-info">
                <h5 className="hide">{productName && productName}</h5>
                <p className="hide text-gray-700">{`$${productPrice.toFixed(2)}`}</p>
                {inventoryAlert && <p className="hide text-white bg-gradient">
                    {inventoryAlert.replace('_', ' ')}
                </p>}

                <div className="item-sizes-box">
                    <div>
                        <p>QUICK ADD</p>
                        <button
                            className="plus"

                            onClick={() => {
                                if (quantity > 0) {
                                    handleAddItem({ product, quantity })
                                }
                            }
                            }
                            title='Add to cart'
                        >
                            <FaPlus
                            />
                        </button>
                    </div>
                    <div className="separator !bg-[#eeecec]"></div>
                    <div className="item-sizes">
                        <button
                            onClick={() => {
                                if (quantity > 0) {
                                    setQuantity(quantity - 1)
                                }
                            }
                            }
                        >
                            <FaMinus />
                        </button>
                        <div>{quantity}</div>
                        <button
                            onClick={
                                () => setQuantity(quantity + 1)
                            }
                        >
                            <FaPlus />
                        </button>
                    </div>
                </div>
                <div className="item-images">
                    {suggestionsImages.map((image, imgIndex) => (
                        <div key={imgIndex} style={{ aspectRatio: '4/5', position: 'relative', width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#eeecec', borderRadius: '10px' }}>
                            <Image src={image} alt="image" layout='responsive' width={4} height={5} />
                        </div>
                    ))}
                    {/* {images && Object.keys(images).map((image, imgIndex) => (
                    <img key={imgIndex} src={image} alt="image" />
                ))} */}
                </div>
            </div>
        </div>
    )
}

export default HomeProductSlide

import React from 'react'
import { DUMMY_ITEMS } from '@/utils'
import ProductSlide from '../ProductDetails-subcomponents/ProductSlide'
import { SkeletonTheme } from 'react-loading-skeleton'

const ShopDesktopProduct = ({ addItem, products }) => {
    return (
        <div
            // ref={scrolledDiv}
            className={`w-4/5 hidden lg:grid lg:grid-cols-2 xl:grid-cols-3  gap-6 `}>
            {/* className={`w-4/5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-6 h-[555px] ${isScrolled ? 'overflow-scroll' : 'overflow-hidden'} scrollbar-hide`}> */}
            {/* <div className="slider-buttons "> */}
            {products.map((product, index) => (
                <SkeletonTheme color="#e2e2e2" highlightColor="#f5f5f5">
                    <div
                        className="sliders overflow-hidden"
                        key={index}
                    >
                        <ProductSlide
                            key={Math.random()}
                            product={product}
                            addItem={addItem}
                            bigItemClass={true}
                        />
                    </div>
                </SkeletonTheme>
            ))}
        </div>
    )
}

export default ShopDesktopProduct

import React, { useState } from 'react'
import MobileProductSlide from './MobileProductSlide'
import { AnimatePresence } from 'framer-motion'
// import { DUMMY_ITEMS } from '@/utils'

const ShopProductMobile = ({ addItem, products }) => {
    const [bgClicked, setBgClicked] = useState(false)
    return (
        // <AnimatePresence>
        <div
            className={`py-8 h-auto grid grid-cols-2 md:grid-cols-3 gap-6 scrollbar-hide lg:hidden`}
            onClick={() => setBgClicked(true)}
        >
            {products.map((product, index) => (
                <MobileProductSlide
                    key={index}
                    product={product}
                    addItem={addItem}
                    vertical={false}
                    bgClicked={bgClicked}
                    setBgClicked={setBgClicked}
                />
            ))}

        </div>
        // </AnimatePresence>
    )
}

export default ShopProductMobile

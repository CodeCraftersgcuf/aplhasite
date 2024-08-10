'use client'
import React, { useRef, useState, useEffect } from 'react';
import AbsolutePart from '@/components/ProductDetails-subcomponents/AbsolutePart';
import DetailsSwiper from '@/components/ProductDetails-subcomponents/DetailsSwiper';
import WithHeaderWrapper from '@/components/WithHeaderWrapper';
import ProductsGrid from '@/components/ProductDetails-subcomponents/ProductsGrid';
import { DUMMY_DETAILS } from '@/utils.js'


export default function DetailsPage() {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const url = new URL(window.location.href);
        const id = url.searchParams.get('id');
        console.log(id)
        const loadedProduct = DUMMY_DETAILS.find((product) => product.id === +id);
        setProduct(loadedProduct)
    }, [])
    return (
        <WithHeaderWrapper>
            <div className='h-[87vh] relative'>
                <DetailsSwiper productImages={product && product.images} />
                <AbsolutePart product={product} />
            </div>
            <ProductsGrid />
        </WithHeaderWrapper>
    );
}

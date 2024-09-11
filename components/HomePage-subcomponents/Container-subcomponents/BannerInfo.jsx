import React from 'react'
import Link from 'next/link'

const BannerInfo = ({ data }) => {
    return (
        <div className="absolute bottom-6 left-6">
            <h1>{data.name}</h1>
            <p className='text-white'>{data.subtitle}</p>
            <button className="button">
                <Link href="/shop">{data.btn1}</Link>
            </button>
            <button className="button">
                <Link href="/shop">{data.btn2}</Link>
            </button>
        </div>
    )
}

export default BannerInfo

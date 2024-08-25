import React from 'react'
import Link from 'next/link'

const BannerInfo = () => {
    return (
        <div className="absolute bottom-6 left-6">
            <h1>New Arrivals</h1>
            <p>Amplify Reimagined</p>
            <button className="button">
                <Link href="/shop">Shop Women</Link>
            </button>
            <button className="button">
                <Link href="/shop">Shop Men</Link>
            </button>
        </div>
    )
}

export default BannerInfo

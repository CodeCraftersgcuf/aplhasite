import React from 'react'
import Link from 'next/link'
import video from '../../assets/videos/NURO-GILRS.mp4'

const PreFooter = () => {
    return (
        <div className="preFooter">
            {/* <aside className="video-background"> */}
            <video autoPlay muted loop className="min-h-[100vh min-w-[100%]">
                <source
                    src={video}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            {/* </aside> */}
            <div className="content">
                <h1>PRECISION PRODUCTS,</h1>
                <h1>DELIVERED WITH CARE</h1>
                <p>Quality crafted, reliably shipped, ready for your shelves</p>
                <button className="button">
                    <Link href="/shop">Shop Now</Link>
                </button>
                {/* <button className="button">Shop Men</button> */}
            </div>
        </div>
    )
}

export default PreFooter

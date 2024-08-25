import React from 'react'
import Link from 'next/link'

const PreFooter = () => {
    return (
        <div className="preFooter">
            {/* <aside className="video-background"> */}
            <video autoPlay muted loop className="min-h-[100vh min-w-[100%]">
                <source
                    src="https://cdn.shopify.com/s/files/1/1752/8007/files/alphaland-drone-loop-land.mp4?v=1654961662"
                    type="video/webm"
                />
                Your browser does not support the video tag.
            </video>
            {/* </aside> */}
            <div className="content">
                <h1>New Arrivals</h1>
                <p>Amplify Reimagined</p>
                <button className="button">
                    <Link href="/shop">Shop Now</Link>
                </button>
                {/* <button className="button">Shop Men</button> */}
            </div>
        </div>
    )
}

export default PreFooter

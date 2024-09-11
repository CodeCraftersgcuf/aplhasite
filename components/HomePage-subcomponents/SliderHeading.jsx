import React from 'react'
import Link from 'next/link'

const SliderHeading = ({ women, mt }) => {
    return (
        <div className={`slider-heading`} >
            <h2>
                <span>{`${women ? `Now` : `Trending`}`}</span>{' '}
                <span>NEW ARRIVALS</span>
            </h2>
            <button>
                {' '}
                <Link href="/shop">SHOP ALL</Link>{' '}
            </button>
        </div >
    )
}

export default SliderHeading

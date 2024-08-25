import React from 'react'
import Link from 'next/link'

const TopContainer = () => {
    return (
        <div className=" z-[1] bottom-0 left-0 absolute p-12 hero-img-content ">
            <div className="w-fit max-w-full min-w-[20rem] line-clamp-3 pb-2 md:pb-4 leading-[100%] font-secondary font-w-500 uppercase text-[14px] md:text-[30px] text-white">
                <p className="uppercase">Your Journy,</p>
                <p className="uppercase">Our mission</p>
            </div>
            <div className="w-fit mb-[5px] leading-tight font-w-500 text-[14px] pb-4 text-white">
                <p>Crafted with every detail in mind. </p>
            </div>
            <div className="w-fit text-[13px] till-desktop:text-[13px] flex gap-[1rem] ">
                <Link
                    className=" hero-img-btn whitespace-nowrap text-center leading-[100%] max-w-full truncate font-w-600 px-[1.5rem] py-[1rem] text-[13px]  till-desktop:py-[12px] rounded-full transition-all bg-white border border-secondary/20 text-black hover:opacity-80"
                    href="/shop"
                // style="background-color: #ffffff; color: #000000"
                >
                    {' '}
                    Shop Now{' '}
                </Link>
                <Link
                    className="hero-img-btn whitespace-nowrap text-center leading-[100%] max-w-full truncate font-w-600 px-[1.5rem] py-[1rem]  text-[13px] till-desktop:py-[12px] rounded-full transition-all bg-white border border-secondary/20 text-black hover:opacity-80"
                    href="/shop"
                // style="background-color: #ffffff; color: #000000"
                >
                    Shop Trending
                </Link>
            </div>
        </div>
    )
}

export default TopContainer

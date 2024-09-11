import React from 'react'
import Link from 'next/link'

const TopContainer = () => {
    return (
        <div className=" z-[1] bottom-0 left-0 absolute p-12">
            <div className="w-fit max-w-full min-w-[20rem] line-clamp-3 pb-2 md:pb-4 leading-none font-secondary text-[20px] md:text-[30px] text-white">
                <p className="">PRECISION PRODUCTS,</p>
                <p className="">DELIVERED WITH CARE</p>
            </div>
            <div className="w-fit mb-[5px] leading-tight text-[14px] pb-4 text-white">
                <p>Quality crafted, reliably shipped, ready for your shelves.</p>
            </div>
            <div className="w-fit text-[13px] till-desktop:text-[13px] flex gap-[1rem] ">
                <Link
                    className=" whitespace-nowrap text-center leading-[100%] max-w-full truncate font-w-600 px-[1.5rem] py-[1rem] text-[13px]  till-desktop:py-[12px] rounded-full transition-all bg-white border border-secondary/20 text-black hover:transform hover:-translate-y-[6px] hover:transition-all hover:duration-700 hover:ease-out"
                    href="/shop"
                // style="background-color: #ffffff; color: #000000"
                >
                    {' '}
                    Shop Now{' '}
                </Link>
                <Link
                    className=" whitespace-nowrap text-center leading-[100%] max-w-full truncate font-w-600 px-[1.5rem] py-[1rem]  text-[13px] till-desktop:py-[12px] rounded-full transition-all bg-white border border-secondary/20 text-black  hover:transform hover:-translate-y-[6px] hover:transition-all hover:duration-700 hover:ease-out"
                    href="/shop"
                // style="background-color: #ffffff; color: #000000"
                >
                    Best Sellers
                </Link>
            </div>
        </div>
    )
}

export default TopContainer

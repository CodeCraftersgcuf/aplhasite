import React from 'react'
import Image from 'next/image'
import '@/app/payment/payment.css'
import isymbol from '../../assets/i_symbol.png';
import cartimg from '../../assets/cart-img.jpg';

const OrderCheckout = ({ onApply }) => {
    return (
        <div className="checkout-main w-[604px] ">
            <div className="p-[38px] checkout-inside">
                {/* Product Summary Section */}
                <div className="flex space-x-4 items-center ">
                    {/* Product Image */}
                    <div className="buy-img-div w-16 h-16">
                        {/* Add your image here */}
                        <Image
                            src={cartimg}
                            alt="Product Image"
                            className="w-full h-full img-border object-cover rounded-md"
                        />
                        <div className="num-circle">
                            <span>1</span>
                        </div>
                    </div>
                    {/* Product Details */}
                    <div className="flex-1">
                        <p className="text-sm font-normal">
                            Tenacity Deep V Cady Bra - Heat
                        </p>
                        <span className="text-gray-500 font-light text-xs">M</span>
                    </div>
                    {/* Product Price */}
                    <div className="text-sm font-normal">£36.00</div>
                </div>

                {/* Rewards Reminder Section */}
                <div className="dont-miss flex items-center space-x-2 p-4 bg-gray-100 rounded-md mt-4">
                    <div className="text-gray-600 flex flex-wrap justify-center items-center gap-3">
                        {/* Icon for information */}
                        {/* <svg
            class="w-10 h-10 inline-block mr-2"
            fill="none"
            stroke="#777777"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M12 18a6 6 0 110-12 6 6 0 010 12z"
            ></path>
          </svg> */}
                        <Image src={isymbol} alt="isymbol"></Image>
                        <span className="text-sm">
                            Don&apos;t miss out!{' '}
                            <a href="#" className="text-blue-600 link">
                                Log in
                            </a>{' '}
                            to earn and redeem rewards
                        </span>
                    </div>
                </div>

                {/* Discount Code Section */}
                <form action={onApply} className="flex gap-3 mt-4">
                    <input
                        type="text"
                        name='discount'
                        placeholder="Discount code or gift card"
                        className="border border-gray-300 p-2 rounded-md w-full discount-input"
                    />
                    <button
                        className="text-sm px-4 rounded-md apply-btn"
                        type='submit'
                    >
                        APPLY
                    </button>
                </form>

                {/* Subtotal Section */}
                <div className="flex justify-between items-center mt-4">
                    <span className="text-sm">Subtotal</span>
                    <span className="text-sm">£36.00</span>
                </div>

                {/* Shipping Section */}
                <div className="flex justify-between items-center mt-2">
                    <span className="text-sm">Shipping</span>
                    <span className="text-xs text-gray-400">
                        Enter shipping address
                    </span>
                </div>
                {/* Total Section */}
                <div className="flex justify-between items-center mt-4 ">
                    <span className="font-semibold text-lg">Total</span>
                    <div className="text-lg font-semibold text-gray-900 flex items-center">
                        <span className="text-xs font-normal text-gray-500 mr-2">
                            GBP
                        </span>
                        £36.00
                    </div>
                </div>

                {/* Tax Information Section */}
                <div className="mt-2 text-xs text-gray-500">
                    Including £6.00 in taxes
                </div>
            </div>
        </div>
    )
}

export default OrderCheckout

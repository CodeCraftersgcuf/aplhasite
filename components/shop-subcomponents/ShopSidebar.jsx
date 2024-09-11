import React from 'react'
// import { DUMMY_ITEMS, vapeProducts } from '@/utils';
import AnimeButtons from '@/components/shop-subcomponents/SideBarAnimatedButtons';
import { categoryActions } from '@/store/slices/categorySlice';
import { useDispatch } from 'react-redux';
import { PASCAL_CATEGORIES } from '@/utils';


const ShopSidebar = ({ isStyles, setStyles }) => {
    const dispatch = useDispatch()
    return (
        <div className='sticky top-[52px] h-[92vh] w-1/5 left-side-product-page bg-white py-[29px] pr-4 overflow-hidden hidden lg:block'>

            <div className={`bg-white h-full  overflow-scroll scrollbar-hide`}>
                <div className='flex flex-col'>
                    <p className='text-[12px] text-gray-700'>Trending</p>
                    <h1 className='text-[20px] text-gray-700'>ALL PRODUCTS</h1>
                    <p className='text-[12px] text-gray-700'>230 Products</p>
                    <div className="border border-gray-500 rounded-full w-fit mt-2 p-1 flex justify-between items-center">
                        <span
                            className={`inline-block text-gray-800 text-[10px] rounded-full px-3 py-1 hover:cursor-pointer ${isStyles ? 'bg-gray-300' : ''}`}
                            onClick={() => setStyles(true)}
                        >
                            Styles
                        </span>
                        <span
                            className={`inline-block text-gray-800 text-[10px] rounded-full px-3 py-1 hover:cursor-pointer ${!isStyles ? 'bg-gray-300' : ''}`}
                            onClick={() => setStyles(false)}
                        >
                            Flavors
                        </span>
                    </div>
                    <div className='w-full h-[1px] bg-gray-300 mt-4'></div>
                    <input
                        type="text"
                        placeholder='Search for items by name'
                        onChange={(e) => dispatch(categoryActions.setSearchTerm(e.target.value))}
                        className='w-full h-4 my-[16px] text-gray-800 focus:outline-none placeholder:text-gray-400'
                    />
                    <div className='w-full h-[1px] bg-gray-300 mb-[8px]'></div>
                </div>
                <div className='flex flex-col'>
                    {PASCAL_CATEGORIES.map((ele, index) => (
                        <AnimeButtons
                            key={index}
                            name={ele.category}
                            options={ele.subCategories}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShopSidebar

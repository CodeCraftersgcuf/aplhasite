import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { categoryActions } from '@/store/slices/categorySlice'
import { useDispatch } from 'react-redux'

const AnimeListItem = ({ controls, listItemsVariants, option, category }) => {
    const dispatch = useDispatch()
    return (
        <motion.li
            className="flex items-center text-[12px] text-gray-400"
            initial="collapsed"
            animate={controls}
            variants={listItemsVariants}
        >
            <input
                type="radio"
                // value={option}
                onChange={() => { dispatch(categoryActions.setCategory(option)) }}
                name="customRadio"
                className="appearance-none h-4 w-4 border border-gray-300 rounded-md checked:bg-gray-800 focus:outline-none transition duration-200 mr-2 hover:cursor-pointer"
            />
            {option}
        </motion.li>
    )
}

export default AnimeListItem

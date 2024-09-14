import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaPlus } from "react-icons/fa6"
import AnimeListItem from './AnimeListItem';

const AnimeButtons = ({ category, subCategories }) => {
    const controls = useAnimation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        controls.start(isOpen ? "collapsed" : "open");
    };

    const listItemsVariants = {
        open: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
        collapsed: { opacity: 0, height: 0, transition: { duration: 0.5 } },
    };

    const addSignVariants = {
        open: { rotate: 225, transition: { duration: 0.5 } },
        collapsed: { rotate: 0, transition: { duration: 0.5 } }
    };

    return (
        <>
            <div
                className="flex justify-between items-center text-[12px] text-gray-800 cursor-pointer"
                onClick={toggleOpen}
            >
                <span>{category.name}</span>
                <motion.span
                    className='text-sm'
                    animate={controls}
                    variants={addSignVariants}
                >
                    <FaPlus />
                </motion.span>
            </div>
            {subCategories.length > 0 ? subCategories.map((subCategory, index) => (
                <AnimeListItem
                    key={subCategory.id}
                    subCategory={subCategory}
                    controls={controls}
                    listItemsVariants={listItemsVariants}
                />
            )) :
                (
                    <AnimeListItem
                        key={category.id + 1}
                        subCategory={category}
                        controls={controls}
                        listItemsVariants={listItemsVariants}
                    />
                )
            }
            <div className='w-full h-[1px] my-[8px] bg-gray-300' />
        </>
    );
};

export default AnimeButtons;

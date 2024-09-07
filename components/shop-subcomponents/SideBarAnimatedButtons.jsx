import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaPlus } from "react-icons/fa6"
import AnimeListItem from './AnimeListItem';

const AnimeButtons = ({ name, options }) => {
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
                <span>{name}</span>
                <motion.span
                    className='text-sm'
                    animate={controls}
                    variants={addSignVariants}

                >
                    <FaPlus />
                </motion.span>
            </div>
            {options.map((option, index) => (
                <AnimeListItem
                    key={index}
                    option={option}
                    controls={controls}
                    listItemsVariants={listItemsVariants}
                    category={name}
                />
            ))}
            <div className='w-full h-[1px] my-[8px] bg-gray-300' />
        </>
    );
};

export default AnimeButtons;

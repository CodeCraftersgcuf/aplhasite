import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

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
        open: { rotate: 45, transition: { duration: 0.5 } },
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
                    className='text-lg'
                    animate={controls}
                    variants={addSignVariants}
                >
                    +
                </motion.span>
            </div>
            {Object.keys(options).map((option, index) => (
                <motion.li
                    key={index}
                    className="flex items-center text-[12px] text-gray-400"
                    initial="collapsed"
                    animate={controls}
                    variants={listItemsVariants}
                >
                    <input
                        type="radio"
                        name="customRadio"
                        className="appearance-none h-4 w-4 border border-gray-300 rounded-md checked:bg-gray-800 focus:outline-none transition duration-200 mr-2 hover:cursor-pointer"
                    />
                    {option}
                </motion.li>

            ))}
            <div className='w-full h-[1px] my-[8px] bg-gray-300' />
        </>
    );
};

export default AnimeButtons;

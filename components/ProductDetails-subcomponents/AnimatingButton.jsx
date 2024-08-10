import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatingButtons = ({ name, detail }) => {
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
            <motion.li
                className="text-[12px] text-gray-400 block overflow-hidden"
                initial="collapsed"
                animate={controls}
                variants={listItemsVariants}
            >
                {detail}
            </motion.li>
        </>
    );
};

export default AnimatingButtons;

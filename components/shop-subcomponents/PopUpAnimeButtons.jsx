// import React, { useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { FaPlus } from "react-icons/fa6"

// const PopUpAnimeButtons = ({ name, options }) => {
//     const controls = useAnimation();
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleOpen = () => {
//         setIsOpen(!isOpen);
//         controls.start(isOpen ? "collapsed" : "open");
//     };

//     const listItemsVariants = {
//         open: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
//         collapsed: { opacity: 0, height: 0, transition: { duration: 0.5 } },
//     };

//     const addSignVariants = {
//         open: { rotate: 45, transition: { duration: 0.5 } },
//         collapsed: { rotate: 0, transition: { duration: 0.5 } }
//     };

//     return (
//         <>
//             <div className='py-[8px]'>
//                 <div
//                     className="flex justify-between items-center text-lg text-slate-100 cursor-pointer"
//                     onClick={toggleOpen}
//                 >
//                     <span>{name}</span>
//                     <motion.span
//                         className='text-xl'
//                         animate={controls}
//                         variants={addSignVariants}
//                     >
//                         <FaPlus />
//                     </motion.span>
//                 </div>

//                 {Object.keys(options).map((option, index) => (
//                     <motion.li
//                         key={index}
//                         className="flex items-center my-2 font-normal text-lg text-slate-100"
//                         initial="collapsed"
//                         animate={controls}
//                         variants={listItemsVariants}
//                     >
//                         <input
//                             type="radio"
//                             name="customRadio"
//                             className="appearance-none h-4 w-4 border border-gray-300 rounded-md checked:bg-gray-800 focus:outline-none transition duration-200 mr-2 hover:cursor-pointer"
//                         />
//                         {option}
//                     </motion.li>

//                 ))}

//                 <div className='w-full h-[1px] my-[8px] bg-gray-700' />
//             </div>
//         </>
//     );
// };

// export default PopUpAnimeButtons;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus } from "react-icons/fa6";

const PopUpAnimeButtons = ({ name, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
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
        // <div className=''>
        <>
            <div
                className="flex justify-between items-center text-lg text-slate-100 cursor-pointer"
                onClick={toggleOpen}
            >
                <span>{name}</span>
                <motion.span
                    className='text-xl'
                    animate={isOpen ? "open" : "collapsed"}
                    variants={addSignVariants}
                >
                    <FaPlus />
                </motion.span>
            </div>

            {/* Wrap the entire conditional block in AnimatePresence */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{ open: { transition: { staggerChildren: 0.1 } }, collapsed: { transition: { staggerChildren: 0.1 } } }}
                    >
                        {Object.keys(options).map((option, index) => (
                            <motion.li
                                key={index}
                                className="flex items-center my-2 font-normal text-lg text-slate-100"
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
                    </motion.ul>
                )}
            </AnimatePresence>

            <div className='w-full h-[1px] my-[16px] bg-gray-700' />
        </>
        // </div>
    );
};

export default PopUpAnimeButtons;

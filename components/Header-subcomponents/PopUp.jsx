import React, { useState } from 'react'
import { AnimatePresence, easeInOut, motion } from 'framer-motion';

const left = Array.from({ length: 3 }, (_, index) => index + 1);
const right = Array.from({ length: 2 }, (_, index) => index + 1);



const PopUp = ({ showPopUp, handleClose }) => {

    const handleDragEnd = (e, info) => {
        if (info.offset.y > 70) {
            handleClose();
        }
    }
    return (<>
        {showPopUp && <div className='backdrop' onClick={handleClose}></div>}
        <AnimatePresence>
            {showPopUp &&
                <motion.div
                    className={`popUp-container`}
                    drag="y" // Enable vertical dragging
                    dragConstraints={{ top: 0, bottom: 0 }} // Set constraints for dragging
                    dragElastic={{
                        top: 0,
                        bottom: 1
                    }}
                    onDragEnd={handleDragEnd}
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "100%" }}
                    transition={{ duration: 0.3, ease: easeInOut }}
                >
                    <div
                        className="swipe-bar"
                    // onClick={() => setIsOpen(!isOpen)}
                    ></div>
                    <div className="sub-container">
                        <div className="left-col">
                            {left.map((item, index) => (
                                <div key={index} className="column">
                                    <p className="popUp-first">Heading</p>
                                    <p className="pop-Up-header-links">First</p>
                                    <p className="pop-Up-header-links">Second</p>
                                    <p className="pop-Up-header-links">Third</p>
                                    <p className="pop-Up-header-links">Fourth</p>
                                </div>
                            ))}
                        </div>
                        <div className="right-col">
                            {right.map((item, index) => (
                                <div key={index} className="column">
                                    <p className="popUp-first">Heading</p>
                                    <p className="pop-Up-header-links">First</p>
                                    <p className="pop-Up-header-links">Second</p>
                                    <p className="pop-Up-header-links">Third</p>
                                    <p className="pop-Up-header-links">Fourth</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>}
        </AnimatePresence>
    </>
    )
}

export default PopUp

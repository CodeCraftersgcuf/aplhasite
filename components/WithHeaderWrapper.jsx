'use client'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import Cart from './Cart'

const WithHeaderWrapper = ({ children }) => {
    const isOpen = useSelector((state) => state.modalFn);
    return (
        <>
            <Header />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <AnimatePresence>{isOpen && <Cart isOpen={isOpen} />}</AnimatePresence>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WithHeaderWrapper

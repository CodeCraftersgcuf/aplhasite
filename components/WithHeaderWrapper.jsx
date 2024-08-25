'use client'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import DesktopCart from './DesktopCart'
import MobileCart from './MobileCart'
import { setDeviceType } from '@/store/currentDevice'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast'


const WithHeaderWrapper = ({ children }) => {
    const dispatch = useDispatch();


    useEffect(() => {
        const handleResize = () => {
            dispatch(setDeviceType());
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set device type on initial load

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch]);
    // useEffect(() => {
    //     setIsMobileDevice(isMobile());
    //     const handleResize = () => setIsMobileDevice(isMobile());
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);
    const isOpen = useSelector((state) => state.modalFn);
    const device = useSelector((state) => state.deviceFn.deviceType);
    console.log(device)
    return (
        <>
            <Header fixed={true} />
            <Toaster position='bottom-center' />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <AnimatePresence>
                        {isOpen && (
                            device === 'mobile' || device === 'tablet' ? (
                                <MobileCart isOpen={isOpen} />
                            ) : (
                                <DesktopCart isOpen={isOpen} />
                            )
                        )}
                    </AnimatePresence>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WithHeaderWrapper

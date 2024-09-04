'use client'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import DesktopCart from './DesktopCart'
import MobileCart from './MobileCart'
import { setDeviceType } from '@/store/slices/currentDevice'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'


const WithHeaderWrapper = ({ children }) => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

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

    useEffect(() => {
        const getAllItems = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_VERCEL_DOMAIN_URL || 'https://pang3a-lilac.vercel.app'}/api/get-all-items`);
                setProducts(response?.data);

            } catch (error) {
                console.log('unabletofetch')
            }
        }

        getAllItems()
    }, [])
    console.log(device)
    console.log(products)

    return (
        <>
            <Header fixed={true} />
            <Toaster position='bottom-center' />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <AnimatePresence>
                        {isOpen && (
                            device === 'mobile' || device === 'tablet' ? (
                                <MobileCart
                                    isOpen={isOpen}
                                    products={products}
                                />
                            ) : (
                                <DesktopCart
                                    isOpen={isOpen}
                                    products={products}
                                />
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

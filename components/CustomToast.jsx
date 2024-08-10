import React from 'react';
import { FaCheckCircle } from "react-icons/fa"; // Using react-icons for tick mark
import { FaCircle } from 'react-icons/fa6';



const CustomToast = ({ closeToast, mainText, smallText }) => (
    <div className="flex items-start space-x-4 p-5 bg-white text-2xl w-[34vw]">
        <FaCheckCircle className="w-12 h-12 text-black" />
        <div className="flex">
            <div className="text-base text-white">{mainText}</div>
            <div className="text-sm text-gray-600 mt-1">{smallText}</div>
        </div>
        <div className=" p-2 rounded-full">
        </div>
    </div>
);

export default CustomToast;

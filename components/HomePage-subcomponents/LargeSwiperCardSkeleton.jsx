
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LargeSwiperCardSkeleton = ({ maxHeight, maxWidth }) => {
    return (
        <div className={` w-full w-[max-w-${maxWidth}] max-h-[${maxHeight}] h-full  border-gray-300 flex flex-col `}>
            {/* Image Skeleton */}
            <div className="h-full w-full mb-1">
                <Skeleton style={{ height: '100%', width: '100%', lineHeight: '2', borderRadius: '0.75rem' }} />
            </div>

            {/* Text Skeleton */}
            <div className="mb-1">
                <Skeleton height={30} width={`100%`} />
            </div>
            <div >
                <Skeleton width={`100%`} />
            </div>
            <div >
                <Skeleton width={`100%`} />
            </div>
        </div>
    );
};

export default LargeSwiperCardSkeleton;

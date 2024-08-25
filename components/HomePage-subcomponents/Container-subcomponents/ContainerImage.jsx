import React from 'react'
import BannerInfo from '@/components/HomePage-subcomponents/Container-subcomponents/BannerInfo'

const ContainerImage = ({ image }) => {
    return (
        <div
            style={{
                aspectRatio: '4/5',
                position: 'relative',
                width: '100%',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
            }}
        >
            <BannerInfo />
        </div>
    )
}

export default ContainerImage

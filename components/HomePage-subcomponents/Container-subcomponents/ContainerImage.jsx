import React from 'react'
import BannerInfo from '@/components/HomePage-subcomponents/Container-subcomponents/BannerInfo'
import Image from 'next/image'

const ContainerImage = ({ data }) => {
    const [hovered, setHovered] = React.useState(false)
    return (
        <div
            style={{
                aspectRatio: '4/5',
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundImage: `url(${image})`,
                backgroundColor: 'rgb(216 215 215)',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image
                src={data.url}
                alt="image"
                layout="responsive"
                objectFit="cover"
                quality={50}
                objectPosition='center'
                height={5} // Maintain aspect ratio
                width={4}  // Maintain aspect ratio
                className={`transition-all duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
            />
            <BannerInfo data={data} />
        </div>
    )
}

export default ContainerImage

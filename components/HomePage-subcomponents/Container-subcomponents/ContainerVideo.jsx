import React from 'react'
import BannerInfo from './BannerInfo'

const ContainerVideo = ({ video }) => {
    return (
        <div style={{
            aspectRatio: '4/5',
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
        }}>
            {/* <aside className="video-background2"> */}
            <video autoPlay muted loop>
                <source
                    src={video}
                    type="video/webm"
                />
                Your browser does not support the video tag.
            </video>
            {/* </aside> */}
            <BannerInfo />
        </div>
    )
}

export default ContainerVideo

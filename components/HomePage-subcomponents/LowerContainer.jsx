import React from 'react'
import Link from 'next/link'
import ContainerImage from './Container-subcomponents/ContainerImage'
import ContainerVideo from './Container-subcomponents/ContainerVideo'



const LowerContainer = ({ data }) => {
    return (
        <div class="w-full grid grid-col-1 md:grid-cols-3 items-center gap-4 p-4">
            {data.map((banner, index) => (
                <ContainerImage data={banner} key={index} />
            ))}
            {/* {videos && videos.map((video, index) => (
                <ContainerVideo video={video} key={index} />
            ))} */}
        </div>
    )
}

export default LowerContainer

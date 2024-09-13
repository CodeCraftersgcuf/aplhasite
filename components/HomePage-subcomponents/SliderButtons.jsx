import React from 'react'

const SliderButtons = ({ women, setWomen }) => {
    return (
        <div className="slider-buttons">
            <span
                onClick={() => setWomen(true)}
                className={women ? 'bg-[#d8d7d7]' : ''}
            >
                {`Now`}
            </span>
            <span
                onClick={() => setWomen(false)}
                className={!women ? 'bg-[#d8d7d7]' : ''}
            >
                {`Trending`}
            </span>
        </div>
    )
}

export default SliderButtons

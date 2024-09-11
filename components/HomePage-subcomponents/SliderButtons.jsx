import React from 'react'

const SliderButtons = ({ women, setWomen }) => {
    return (
        <div className="slider-buttons">
            <span
                onClick={() => setWomen(true)}
                className={women ? 'bg-gray-400' : ''}
            >
                {`Now`}
            </span>
            <span
                onClick={() => setWomen(false)}
                className={!women ? 'bg-gray-400' : ''}
            >
                {`Trending`}
            </span>
        </div>
    )
}

export default SliderButtons

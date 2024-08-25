import React from 'react'

const SliderButtons = ({ women, setWomen }) => {
    return (
        <div className="slider-buttons">
            <span
                onClick={() => setWomen(true)}
                className={women ? 'bg-gray' : ''}
            >
                {`Now`}
            </span>
            <span
                onClick={() => setWomen(false)}
                className={!women ? 'bg-gray' : ''}
            >
                {`Trending`}
            </span>
        </div>
    )
}

export default SliderButtons

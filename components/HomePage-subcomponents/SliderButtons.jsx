import React from 'react'

const SliderButtons = ({ toggle, setToggle }) => {
    return (
        <div className="slider-buttons">
            <span
                onClick={() => setToggle(true)}
                className={toggle ? 'bg-[#d8d7d7]' : ''}
            >
                {`THCA`}
            </span>
            <span
                onClick={() => setToggle(false)}
                className={!toggle ? 'bg-[#d8d7d7]' : ''}
            >
                {`Delta 8`}
            </span>
        </div>
    )
}

export default SliderButtons

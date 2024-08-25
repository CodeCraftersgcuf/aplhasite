import React from 'react'

const items = Array.from({ length: 5 }, (_, index) => index + 1);
const DropDown = ({ showDropdown, setShowDropdown }) => {
    return (
        <>
            {showDropdown && (
                <div
                    className="dropdown-container"
                    onMouseOver={() => setShowDropdown(true)}
                    onMouseOut={() => setShowDropdown(false)}
                >
                    <div className="left">
                        <div className="grid">
                            {items.map((item, index) => (
                                <div key={index} className="row">
                                    <p className="first">Heading</p>
                                    <p className="header-links">First</p>
                                    <p className="header-links">Second</p>
                                    <p className="header-links">Third</p>
                                    <p className="header-links">Fourth</p>
                                    <p className="header-links">Fifth</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="right">
                        <div className="image-container">
                            <img
                                src="https://alphalete.uk/cdn/shop/files/IceTankHeat2_2500x.jpg?v=1721064079"
                                alt="Image 1"
                            />
                            <img
                                src="https://alphalete.uk/cdn/shop/files/IceTankHeat5_2500x.jpg?v=1721064079"
                                alt="Image 2"
                            />
                            <img
                                src="https://alphalete.uk/cdn/shop/files/IceTankHeat5_2500x.jpg?v=1721064079"
                                alt="Image 3"
                            />
                        </div>
                    </div>
                </div>

            )}
        </>
    )
}

export default DropDown

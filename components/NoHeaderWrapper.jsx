import React from 'react'

const NoHeaderWrapper = ({ children }) => {
    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">{children}</div>
        </div>
    )
}

export default NoHeaderWrapper

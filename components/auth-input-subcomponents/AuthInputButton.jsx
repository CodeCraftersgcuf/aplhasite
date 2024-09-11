import React from 'react'

const AuthInputButton = ({ children }) => {
    return (
        <button
            type="submit"
            className="bg-black w-full text-white py-2 my-2 px-4 rounded-full hover:bg-gray-800 focus:outline-none"
        >
            {children}
        </button>
    )
}

export default AuthInputButton

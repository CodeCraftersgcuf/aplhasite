import React from 'react'

const EmailSection = () => {
    return (
        <>
            <div className="flex flex-col space-y-2 mt-2">
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="border border-gray-300 rounded-md in-p"
                    placeholder="Email"
                />
                <label className="flex items-center space-x-2 pt-4 pb-4 ">
                    <input
                        type="checkbox"
                        name='options'
                        className="h-4 w-4 email-check"
                        value='Email me with news and offers'
                    />
                    <span className="text-sm">Email me with news and offers</span>
                </label>
            </div>
        </>
    )
}

export default EmailSection

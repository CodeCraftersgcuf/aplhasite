import React from 'react'
import Link from 'next/link'

const FooterLinks = () => {
    return (
        <div className="flex justify-start space-x-4 text-sm mt-10 border-t-2">
            <Link href="#" className="text-gray-600 mt-3 underline">
                Refund policy
            </Link>
            <Link href="#" className="text-gray-600 mt-3 underline">
                Privacy policy
            </Link>
            <Link href="#" className="text-gray-600 mt-3 underline">
                Terms of service
            </Link>
        </div>
    )
}

export default FooterLinks

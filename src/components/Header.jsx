import React from 'react'

const Header = () => {
    return (
        <div className="py-2 w-[100%] bg-black static text-white text-lg font-semibold flex justify-between gap-10">
            <nav>
                <a href="/">Home</a> | <a href="/about">About</a> | <a href="/services">Services</a> | <a href="/contact">Contact</a>
            </nav>
        </div>
    )
}

export default Header

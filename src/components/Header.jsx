import React from 'react'

const Header = () => {
    return (
        <div className="py-5 w-[97%] bg-black relative mt-3 m-[auto] text-white text-lg font-semibold flex justify-center gap-10 shadow-lg">
            <nav>
                <a href="/">Home</a> | <a href="#portfolio">About</a> | <a href="#services">Services</a> | <a href="#contact">Contact</a>
            </nav>
        </div>
    )
}

export default Header

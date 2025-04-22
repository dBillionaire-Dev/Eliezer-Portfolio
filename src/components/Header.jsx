import React, { useState } from 'react'
import Logo from '/images/favicon.png'
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="lg:pt-5 lg:pb-1 w-[97%] bg-black relative mt-3 m-[auto] text-white text-lg font-semibold flex lg:justify-around lg:gap-200 xl:gap-160 justify-between shadow-2xl rounded-2xl">
            <span className='lg:mb-[-35px] relative lg:-top-6'>
                <Link to="/" className="text-blue-600 underline"><img src={Logo} alt='Impulse-Grid Logo' className='w-25 h-20' /></Link>
            </span>
            <button
                className="block lg:hidden p-2"
                onClick={toggleMenu}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    {menuOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>
            <nav className="hidden lg:flex space-x-10">
                <Link to="/" className="hover:text-gray-500 hover:underline">Home</Link>  <a className='hover:text-gray-500 hover:underline' href="#portfolio">Projects</a>  <a className='hover:text-gray-500 hover:underline' href="#services">Services</a>  <a className='hover:text-gray-500 hover:underline' href="#contact">Contact</a>
            </nav>
            <div className={`lg:hidden pr-2 ${menuOpen ? 'block' : 'hidden'} transition-all ease-in-out duration-300`}>
                <nav className="flex flex-col items-center space-y-4 mt-4">
                    <a href="#" className="hover:text-gray-400">Home</a>
                    <a href="#portfolio" className="hover:text-gray-400">Projects</a>
                    <a href="#services" className="hover:text-gray-400">Services</a>
                    <a href="#contact" className="hover:text-gray-400">Contact</a>
                </nav>
            </div>
        </div>
    )
}

export default Header

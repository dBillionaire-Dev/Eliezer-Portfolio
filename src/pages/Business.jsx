import React, { useState } from 'react'
import business from '../business.json';
import { Link } from "react-router-dom";
import Logo from '/images/favicon.png'
import BackToTop from '../components/BackToTop';

const Business = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className='w-[100%] mb-5'>
            <BackToTop />
            <div className="lg:pt-5 lg:pb-1 w-[97%] bg-black relative mt-3 m-[auto] text-white text-lg font-semibold flex lg:justify-around lg:gap-250 justify-between shadow-2xl rounded-2xl">
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
                <nav className="lg:pl-5 hidden lg:flex space-x-5">
                    <Link to="/project" className="hover:text-gray-500 hover:underline">Designs</Link>
                    <Link to="/brand-identity" className="hover:text-gray-500 hover:underline">Brand Identity</Link>
                    <Link to="/poster" className="hover:text-gray-500 hover:underline">Poster</Link>
                </nav>
            </div>
            <div className={`lg:hidden pr-2 ${menuOpen ? 'block' : 'hidden'} transition-all ease-in-out duration-300`}>
                <nav className="flex flex-col items-center space-y-4 mt-4">
                    <Link to="/project" className="hover:text-gray-500 hover:underline">Designs</Link>
                    <Link to="/brand-identity" className="hover:text-gray-500 hover:underline">Brand Identity</Link>
                    <Link to="/poster" className="hover:text-gray-500 hover:underline">Poster</Link>
                </nav>
            </div>
            <div className="w-[94%] m-[auto] lg:px-15 px-5 py-5">
            </div>

            <div id="branding" className='relative w-[94%] m-[auto]'>
                <h2 className='lg:text-5xl text-3xl font-bold tracking-wide text-center'>Business/Ad Creatives</h2>
                <div className='grid lg:grid-cols-3 gap-4 pt-5'>
                    {business.map((item) => (
                        <section key={item.id}>
                            <li>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className='relative w-150 lg:h-60 h-80 rounded-2xl shadow-2xl'
                                />
                            </li>
                            <li className='lg:text-5xl text-2xl font-normal'>{item.name}</li>
                        </section>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Business

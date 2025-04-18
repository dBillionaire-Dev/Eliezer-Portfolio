import React from 'react'
import Eliezer from '/images/Eliezer-headshot.jpg'
import { FaArrowRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='lg:px-15 px-5 py-5 bg-red-50 lg:h-[95vh] h-250  w-[94%] m-[auto] flex lg:flex-row flex-col'>
            <section>
                <h1 className='lg:text-7xl text-5xl font-bold tracking-wide'>
                    Hello, I'm a Freelance Graphic Designer
                </h1>
                <p className="lg:font-normal lg:text-5xl text-3xl py-5 lg:leading-15 leading:4.5 lg:mb-5 mb-1">I specialize in  brand identity, social media and marketing design.</p>
                <span className='flex lg:flex-row flex-col lg:justify-start lg:gap-5'>
                    <button className="bg-black hover:bg-gray-400 text-white hover:text-black py-4 px-8 lg:pt-6 lg:pb-8 mb-8 rounded-2xl lg:text-3xl text-2xl font-normal flex flex-row lg:gap-5 justify-around">View My Work <FaArrowRight className='relative top-1' /></button><button className="bg-gray-400 hover:bg-gray-900 text-black hover:text-white py-4 px-10 lg:pt-6 lg:pb-8 mb-8 rounded-2xl lg:text-3xl text-2xl font-normal flex flex-row lg:gap-3 justify-around"><a className='flex flex-row' href="/files/Eliezer_Ekunke_Resume.pdf" download>Download My CV <FaDownload className='relative top-1' /></a></button>
                </span>
            </section>
            <section>
                <img className='w-250 rounded-2xl md:h-160' src={Eliezer} alt='Eliezer-Headshot' />
            </section>
        </div>
    )
}

export default Hero

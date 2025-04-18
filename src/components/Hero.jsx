import React from 'react'
import Eliezer from '/images/Eliezer-headshot.jpg'

const Hero = () => {
    return (
        <div className='lg:px-15 px-5 py-5 bg-red-50 lg:h-[95vh] h-230  w-[94%] m-[auto] flex lg:flex-row flex-col'>
            <section>
                <h1 className='lg:text-7xl text-5xl font-bold tracking-wide'>
                    Hello, I'm a Freelance Graphic Designer
                </h1>
                <p className="lg:font-normal lg:text-5xl text-3xl py-5 lg:leading-15 leading:4.5 lg:mb-5 mb-1">I specialize in  brand identity, social media and marketing design.</p>
                <button className="bg-black hover:bg-gray-400 text-white hover:text-black py-4 px-10 lg:pt-6 lg:pb-8 mb-8 rounded-2xl lg:text-5xl text-3xl font-normal">View My Work</button>
            </section>
            <section>
                <img className='w-250 rounded-2xl md:h-160' src={Eliezer} alt='Eliezer-Headshot' />
            </section>
        </div>
    )
}

export default Hero

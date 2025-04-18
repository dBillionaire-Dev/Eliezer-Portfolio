import React from 'react'
import Eliezer from '/images/Eliezer-headshot.jpg'

const Hero = () => {
    return (
        <div className='px-15 py-5 bg-red-50 h-[95vh] flex'>
            <section>
                <h1 className='text-8xl font-bold tracking-wide pr-[-10px]'>
                    Hello, I'm a Freelance Graphic Designer
                </h1>
                <p className="font-normal text-5xl py-5 leading-15 mb-5">I specialize in  brand identity, social media and marketing design.</p>
                <button className="bg-black hover:bg-gray-400 text-white hover:text-black py-2 px-10 pt-6 pb-8 rounded-2xl text-5xl font-normal">View My Work</button>
            </section>
            <section>
                <img className='w-250 rounded-2xl h-160' src={Eliezer} alt='Eliezer-Headshot' />
            </section>
        </div>
    )
}

export default Hero

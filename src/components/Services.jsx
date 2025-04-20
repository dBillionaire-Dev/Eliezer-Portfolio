import React from 'react'

const Services = () => {
    return (
        <div className='bg-red-50 relative m-[auto] lg:h-[45vh] md:h-65 h-80 w-[94%] lg:px-15 px-5 py-5' id='services'>
            <h2 className='lg:text-7xl text-5xl tracking-wide lg:mb-6 mb-3 font-normal'>Services</h2>
            <div className='lg:flex lg:flex-row flex-col gap-x-20'>
                <span>
                    <h4 className='lg:text-5xl font-normal lg:mb-2'>Brand Identity</h4>
                    <p className='lg:text-3xl font-light lg:mb-0 mb-2'>Logo design, brand strategy, and visual identity systems.</p>
                </span>
                <span>
                    <h4 className='lg:text-5xl font-normal lg:mb-2'>Social Media</h4>
                    <p className='lg:text-3xl font-light lg:mb-0 mb-2'>Custom graphics and content creation for social media platforms.</p>
                </span>
                <span>
                    <h4 className='lg:text-5xl font-normal lg:mb-2'>Marketing</h4>
                    <p className='lg:text-3xl font-light lg:mb-0 mb-2'>promotional materials, advertisements and print design.</p>
                </span>
            </div>
        </div>
    )
}

export default Services

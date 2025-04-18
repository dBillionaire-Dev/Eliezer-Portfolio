import React from 'react'

const Services = () => {
    return (
        <div className='bg-red-500 relative m-[auto] h-[60vh] w-[94%] lg:px-15 px-5 py-5'>
            <h2 className='lg:text-7xl text-5xl tracking-wide mb-6 font-normal'>Services</h2>
            <div className='lg:flex lg:flex-row flex-col'>
                <span>
                    <h4 className='lg:text-5xl font-normal'>Brand Identity</h4>
                    <p className='lg:text-3xl font-light'>Logo design, brand strategy, and visual identity systems.</p>
                </span>
                <span>
                    <h4 className='lg:text-5xl font-normal'>Social Media</h4>
                    <p className='lg:text-3xl font-light'>Custom graphics and content creation for social media platforms.</p>
                </span>
                <span>
                    <h4 className='lg:text-5xl font-normal'>Marketing</h4>
                    <p className='lg:text-3xl font-light'>promotional materials, advertisements and print design.</p>
                </span>
            </div>
        </div>
    )
}

export default Services

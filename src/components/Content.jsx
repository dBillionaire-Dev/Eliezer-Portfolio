import React from 'react'
import data from '../data.json';

const Content = () => {
    return (
        <div className="w-[94%] m-[auto] lg:px-15 px-5 py-5 lg:h-[100vh]" id='portfolio'>
            <h2 className="lg:text-7xl text-5xl font-bold tracking-wide mb-6">Portfolio</h2>
            <div className="flex lg:flex-row flex-col gap-x-5">
                {data.map((item) => (
                    <section key={item.id} className="relative w-[100%] mb-5">
                        <li>
                            <img
                                src={item.image}
                                alt={item.name}
                                className='relative w-[100%] lg:h-[60vh] h-90 rounded-2xl lg:mb-5 mb-2'
                            />
                        </li>
                        <li className='lg:text-5xl text-2xl font-normal'>{item.name}</li>
                    </section>
                ))}
            </div>
        </div>
    )
}

export default Content

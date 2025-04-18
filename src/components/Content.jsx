import React from 'react'
import data from '../data.json';

const Content = () => {
    return (
        <div>
            <h2>Portfolio</h2>
            <div className="flex flex-row gap-x-40">
                {data.map((item) => (
                    <section key={item.id}>
                        <li>
                            <img
                                src={item.image}
                                alt={item.name}
                                className='w-30 h-50'
                            />
                        </li>
                        <li>{item.name}</li>
                    </section>
                ))}
            </div>
        </div>
    )
}

export default Content

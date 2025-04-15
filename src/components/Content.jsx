import React from 'react'
import data from '../data.json';

const Content = () => {
    return (
        <div className="flex-row-reverse">
            <h2>Portfolio</h2>
            {data.map((item) => (
                <section key={item.id}>
                    <li>
                        <img
                            src={item.image}
                            alt={item.name}
                            className='w-30 h-50 rounded'
                        />
                    </li>
                    <li>{item.name}</li>
                </section>
            ))}
        </div>
    )
}

export default Content

import React from 'react'
import data from '../data.json';

const Content = () => {
    return (
        <div>
            <h2>Portfolio</h2>
            {data.map((item) => (
                <section key={item.id}>
                    <li>
                        <img
                            src={item.image}
                            alt={item.name}
                        />
                    </li>
                    <li>{item.name}</li>
                </section>
            ))}
        </div>
    )
}

export default Content

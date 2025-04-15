import React from 'react'

const Hero = () => {
    return (
        <div>
            <section>
                <h1>
                    Hello, I'm a Freelance Graphic Designer
                </h1>
                <p>I specialize in  brand identity, social media and marketing design.</p>
                <button className="bg-blue-500 hover:bg-white-700 text-white font-bold py-2 px-4 rounded">View My Work</button>
            </section>
            <section>
                {/* <img src={none} alt='Eliezer-Headshot' /> */}
            </section>
        </div>
    )
}

export default Hero

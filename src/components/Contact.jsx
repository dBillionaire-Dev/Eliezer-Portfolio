import React from 'react'

const Contact = () => {
    return (
        <div className='w-[94%] lg:h-[20vh]  m-[auto] lg:px-15 px-5 pt-5 pb-3 flex lg:flex-row flex-col lg:gap-x-90 lg:mb-3' id='contact'>
            <div>
                <h2 className="lg:text-7xl text-5xl font-normal tracking-wide mb-2">Get In Touch</h2>
                <p className='lg:text-3xl font-light lg:mb-0 mb-5'>Feel fee to contact me for any project or collaboration</p>
            </div>
            <div>
                <button className="bg-black hover:bg-gray-400 text-white hover:text-black py-4 px-8 lg:pt-4 lg:pb-6 mb-5 rounded-2xl lg:text-3xl text-2xl font-normal self-center ">Contact Me</button>
            </div>
        </div>
    )
}

export default Contact

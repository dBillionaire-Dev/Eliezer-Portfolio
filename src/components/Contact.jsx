import React, { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [showForm, setShowForm] = useState(false);
    // const [state, handleSubmit] = useForm("mldjykgj");
    // if (state.succeeded) {
    //     return <p>Thanks for joining!</p>;
    // }
    const handleClick = () => {
        setShowForm(true);
    }

    return (
        <div className={`transition-all duration-500 overflow-hidden ${showForm ? 'lg:h-120' : 'lg:h-[20vh]'} rounded-xl
        w-[94%] m-[auto] lg:px-15 px-5 pt-5 pb-3 flex lg:flex-row flex-col lg:gap-x-90 lg:mb-3`} id='contact' >
            <div>
                <h2 className="lg:text-7xl text-5xl font-normal tracking-wide mb-2">Get In Touch</h2>
                <p className='lg:text-3xl font-light lg:mb-0 mb-5'>Feel fee to contact me for any project or collaboration</p>
            </div>
            <div>
                {!showForm && (
                    <button onClick={handleClick} className="bg-black hover:bg-gray-400 text-white hover:text-black py-4 px-8 lg:pt-4 lg:pb-6 mb-5 rounded-2xl lg:text-3xl text-2xl font-normal self-center transition shadow-emerald-500">Contact Me</button>
                )}

                {showForm && (
                    <div className='flex lg:flex-row flex-col-reverse'>
                        <span className='relative lg:-left-201 lg:top-50 flex justify-center lg:gap-5 gap-3 pt-3 text-3xl'>
                            <a href='+234(0) 9039143840' target='_blank'><FaWhatsapp /></a> <a href='https://www.tiktok.com/@impulse.grid' target='_blank'><FaTiktok /></a> <a href='https://x.com/impulse_grid' target='_blank'><FaTwitter /></a> <a href='https://www.linkedin.com/in/eli-ekunke' target='_blank'><FaLinkedin /></a> <a href='https://www.instagram.com/impulse.grid' target='_blank'><FaInstagram /></a>
                        </span>
                        <span>
                            <form action="https://formspree.io/f/mldjykgj" method="POST" className="flex flex-col lg:gap-5 gap-4 w-full max-w-md mt-4 bg-white p-6 rounded-xl shadow-lg">
                                <label className="flex flex-col">
                                    Name:
                                    <input type="text" className="border p-2 rounded" placeholder='John Doe' />
                                </label>

                                <label className="flex flex-col">
                                    Email:
                                    <input type="email" className="border p-2 rounded" placeholder='example@email.com' />
                                </label>

                                <label className="flex flex-col">
                                    Message:
                                    <textarea className="border p-2 rounded" rows="4" placeholder='Hi Eli, I need a......' ></textarea>
                                </label>

                                <button
                                    type="submit"
                                    className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </span>
                    </div>
                )}
            </div>
        </div >
    )
}

export default Contact

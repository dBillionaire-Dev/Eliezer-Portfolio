import React, { useState, useEffect } from 'react'
import { FaWhatsapp, FaTiktok, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [showForm, setShowForm] = useState(false);
    const [state, handleSubmit] = useForm("movdaakk");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleClick = () => setShowForm(true);

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid.";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleSubmit(e);
        }
    };

    const resetFormAndState = () => {
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setShowForm(false);
    };

    useEffect(() => {
        if (state.succeeded) {
            setShowPopup(true);
            const timer = setTimeout(() => {
                setShowPopup(false);
                resetFormAndState();
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);


    const [showPopup, setShowPopup] = useState(false);

    return (
        <>

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm animate-bounce-in">
                        <h2 className="text-3xl font-bold text-green-600 mb-2">Thank you!</h2>
                        <p className="text-lg text-gray-700">Your message has been successfully received. <br />I’ll reach out to you soon!</p>

                        <button
                            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                            onClick={() => {
                                setShowPopup(false);
                                resetFormAndState();
                            }}
                        >
                            Ok
                        </button>

                    </div>
                </div>
            )}

            <div className={`transition-all duration-500 overflow-hidden ${showForm ? 'lg:h-120 xl:h-120' : 'lg:h-[20vh]'} xl:h-55 rounded-xl w-[94%] m-[auto] lg:px-15 px-5 pt-5 pb-3 flex lg:flex-row flex-col lg:gap-x-90 lg:mb-3`} id='contact' >
                <div>
                    <h2 className="lg:text-7xl text-5xl font-normal tracking-wide mb-2">Get In Touch</h2>
                    <p className='lg:text-3xl font-light lg:mb-0 mb-5'>Feel free to contact me for any project or collaboration</p>
                </div>

                <div>
                    {!showForm && (
                        <button onClick={handleClick} className="bg-black hover:bg-gray-400 text-white hover:text-black py-4 xl:w-50 lg:px-5 px-8 lg:pt-4 lg:pb-6 mb-5 rounded-2xl lg:text-3xl text-2xl font-normal self-center transition shadow-emerald-500">Contact Me</button>
                    )}

                    {showForm && (
                        <div className='flex lg:flex-row flex-col-reverse'>
                            <span className='relative lg:-left-201 lg:top-50 xl:top-80 xl:-left-143 flex justify-center lg:gap-5 gap-3 pt-3 text-3xl'>
                                <a href='https://wa.me/c/2349039143840' target='_blank'><FaWhatsapp /></a>
                                <a href='https://www.tiktok.com/@impulse.grid' target='_blank'><FaTiktok /></a>
                                <a href='https://x.com/impulse_grid' target='_blank'><FaXTwitter /></a>
                                <a href='https://www.linkedin.com/in/eli-ekunke-6921112a5' target='_blank'><FaLinkedin /></a>
                                <a href='https://www.instagram.com/impulse.grid' target='_blank'><FaInstagram /></a>
                            </span>

                            <span className='flex justify-center'>
                                <form onSubmit={onSubmit} className="flex flex-col lg:gap-5 gap-4 w-full max-w-md mt-4 bg-white p-6 rounded-xl shadow-lg">
                                    <label htmlFor="name" className="flex flex-col">
                                        Name:
                                        <input
                                            type="text"
                                            name='name'
                                            id='name'
                                            className="border p-2 rounded"
                                            placeholder='John Doe'
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                    </label>

                                    <label htmlFor="email" className="flex flex-col">
                                        Email:
                                        <input
                                            type="email"
                                            name='email'
                                            id='email'
                                            className="border p-2 rounded"
                                            placeholder='example@email.com'
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                    </label>

                                    <label className="flex flex-col">
                                        Message:
                                        <textarea
                                            className="border p-2 rounded"
                                            rows="4"
                                            id='message'
                                            name='message'
                                            placeholder='Hi Eli, I need a......'
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                                    </label>

                                    <button
                                        type="submit"
                                        disabled={state.submitting}
                                        className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </>
    )

}

export default Contact;


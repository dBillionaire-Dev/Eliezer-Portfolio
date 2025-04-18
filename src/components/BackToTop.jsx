import React, { useState, useEffect } from 'react'
// import { LuArrowUpFromLine } from "react-icons/lu";
import { FaArrowUp } from 'react-icons/fa';
const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        visible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-gray-600 hover:bg-black text-white p-3 rounded-full shadow-lg transition-opacity duration-300 z-50"
            >
                <FaArrowUp className="w-5 h-5" />
            </button>
        )
    );


}

export default BackToTop

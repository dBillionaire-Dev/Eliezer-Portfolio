import React, { useState } from 'react';

function EnlargeableImage({ src, alt, className = "" }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <img
                src={src}
                alt={alt}
                className={`cursor-pointer w-40 rounded shadow-lg ${className}`}
                onClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={src}
                        alt={alt}
                        className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
                    />
                </div>
            )}
        </>
    );
}

export default EnlargeableImage;

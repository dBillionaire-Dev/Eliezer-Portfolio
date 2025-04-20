import React from 'react'
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";

const Tools = () => {
    return (
        <div className='mb-5'>
            <h2 className='lg:text-5xl text-3xl font-bold text-center mb-3'>Tools I Use</h2>
            <div className="flex flex-wrap justify-center gap-2">
                <span>
                    <SiAdobephotoshop className='text-5xl relative left-5' /> Photoshop
                </span>
                <span>
                    <SiAdobeillustrator className='text-5xl relative left-3' /> Illustrator
                </span>
            </div>
        </div>
    )
}

export default Tools

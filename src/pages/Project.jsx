import React from 'react'
import Header from '../components/Header';
import { Link } from "react-router-dom";

const Project = () => {
    return (
        <div className='w-[100%]'>
            <Header />
            <div className="w-[94%] m-[auto] lg:px-15 px-5 py-5 lg:h-[100vh]">
                <h1 className='lg:text-7xl text-5xl font-bold tracking-wide text-center'>Designs By Me</h1>
            </div>
        </div>
    )
}

export default Project

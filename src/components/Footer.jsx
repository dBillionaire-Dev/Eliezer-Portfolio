import React from 'react'

const Footer = () => {
    return (
        <footer className='flex justify-center m-[auto] w-[100%]'>
            <small>
                © {new Date().getFullYear()} Eliezer Ekunke by <span className='text-blue-300'><a href="https://github.com/dBillionaire-Dev" target="_blank">Nexy</a></span>
            </small>
        </footer>

    )
}

export default Footer

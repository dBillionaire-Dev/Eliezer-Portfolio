import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Content />
            <Services />
            <Contact />
        </div>
    )
}

export default Home

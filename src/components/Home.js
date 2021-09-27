import React from 'react';
import About from './About';
import Intro from './Intro';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {

    return (
        <div>
            <Intro bg="/imgs/intro-bg.jpg"/>
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home

import React from 'react';
import styled from 'styled-components';
import Bounce from 'react-reveal/Bounce';

const About = () => {
    return (
        <Wrapper id="about">
            <Container>
                <Row>
                    <Bounce left>
                    <div className="content">
                            <h2>About Me</h2>
                        <p>Hi 👋, My name is <b>Hamza Mandil</b> 👦. I am 21 years old. I'm from Morocco. I am a <b>full stack developer</b> 💻, passionate about everything coding, hacking... in my free time, i do many things, but i especially like to do a bit of bug bounty hunting and i also like discovering new technologies regarding Coding.</p>
                        <div className="skills">
                            <h2>Skills</h2>
                            <span class="skill">HTML5</span>
                            <span class="skill">CSS3</span>
                            <span class="skill">SASS</span>
                            <span class="skill">BOOTSTRAP</span>
                            <span class="skill">JAVASCRIPT</span>
                            <span class="skill">JQUERY</span>
                            <span class="skill">REACT</span>
                            <span class="skill">REDUX</span>
                            <span class="skill">PHP</span>
                            <span class="skill">MYSQL</span>
                            <span class="skill">GIT/GITHUB</span>
                        </div>
                    </div>
                    </Bounce>
                    <Bounce right>
                    <div className="image">
                        <img src="/imgs/about.svg" alt="about me" />
                    </div>
                    </Bounce>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default About

const Wrapper = styled.div`
    padding: 5rem 0;

    img {
        width: 100%;
    }
`


const Container = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: auto;

    h1 {
        text-align: center;
        margin-bottom: 3rem;
    }
`
const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    
    .image {
        width: 50%;
        max-width: 600px;
    }
    .content {
        width: 50%;

        h2 {
            margin-bottom: 1rem;
        }
        p {
            line-height: 1.8;
            font-size: 1.125rem;
        }

        .skills h2 {
            margin: 1rem 0;
        }
        .skills .skill {
            padding: 0.2rem 0.5rem;
            font-size: 1.1rem;
            background-color: #ddd;
            border-radius: 3px;
            display: inline-block;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
        }
    }

    @media (max-width: 992px) {
        flex-direction: column;

        .image {
            width: 100%;
            max-width: 600px;
            margin-top: 2rem;
        }
        .content {
            width: 100%
        }
    }
`
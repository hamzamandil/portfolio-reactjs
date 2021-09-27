import React from 'react';
import styled from 'styled-components';
import Typical from 'react-typical'

const Intro = ({bg, id}) => {
    return (
        <IntroWrapper id={id} background={bg}>
            <Container>
                <h1>Hi, im Hamza Mandil.</h1>
                <p>
                I'm a &nbsp;
                <Typical
                    loop={Infinity}
                    wrapper="span" 
                    steps={[
                        'Full Stack Developer',
                        2500,
                    ]}
                    />
                </p>
                <a href="mailto:hamzamandil2000@gmail.com">Contact Me</a>
            </Container>
        </IntroWrapper>
    )
}

export default Intro

const IntroWrapper = styled.section`
    background-image: linear-gradient(19deg, rgba(1, 91, 238, 0.8) 0%, rgba(4, 93, 233, 0.8) 100%), url(${props => props.background});
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-attachment: fixed;
    background-blend-mode: overlay;
    scroll-snap-align: start;
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
`

const Container = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: auto;
    color: #fff;
    h1 {
        font-size: 3.5rem;
    }
    p {
        font-size: 2rem;

        span {
            letter-spacing: 2px;
            font-weight: 500;
        }
    }
    a {
        display: inline-block;
        color: #fff;
        padding: 0.5rem 1.5rem;
        border: 2px solid #fff;
        margin-top: 1rem;
        transition: all 0.3s ease;

        :hover {
            background: #fff;
            color: #000;
        }
    }

    @media (max-width: 992px) {
        h1 {
            font-size: 2.5rem;
        }
        p {
            font-size: 1.5rem
        }
    }
`
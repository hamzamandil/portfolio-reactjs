import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <ContactWrapper id="contact">
            <Container>
                <Content>
                    <Content>
                        <Fade top>
                            <h2>SAY HELLO</h2>
                            <Email href="mailto:hamzamandil2000@gmail.com">Hamzamandil2000@gmail.com</Email>
                        
                            <Icons>
                                <Icon href="https://www.facebook.com/hamza.mandil.790/"><i className="fab fa-facebook-square"></i></Icon>
                                <Icon href="https://www.instagram.com/hamzamandil05/"><i className="fab fa-instagram-square"></i></Icon>
                                <Icon href="https://twitter.com/MandilHamza"><i className="fab fa-twitter-square"></i></Icon>
                                <Icon href="https://github.com/hamzamandil"><i className="fab fa-github-square"></i></Icon>
                            </Icons>
                        </Fade>
                    </Content>
                </Content>
            </Container>
        </ContactWrapper>
    )
}

export default Contact

const ContactWrapper = styled.section`
    padding: 5rem 0;
`

const Container = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: auto;
`

const Content = styled.div`
    margin: 0 auto;
    text-align: center;

    h2 {
        font-weight: 600;
        font-size:2rem;
        letter-spacing: 5px;
    }
`
const Email = styled.a`
    display: inline-block;
    font-size: 1.6rem;
    text-transform: uppercase;
    color: #000;
    transition: all 0.3s ease;

    :hover {
        color: #1B5EC7;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`
const Icons = styled.div`

`

const Icon = styled.a`
    color: #000;
    margin: 0 0.3rem;
    font-size: 2rem;
    transition: all 0.3s ease;

    :hover {
        color: #1B5EC7;
    }
`
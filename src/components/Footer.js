import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterWrapper>
            Made With <i className="fa fa-heart"></i> By Hamza Mandil &copy; 2021
        </FooterWrapper>
    )
}

export default Footer

const FooterWrapper = styled.footer`
    padding: 1rem;
    text-align: center;

    .fa {
        color: red;
    }
`
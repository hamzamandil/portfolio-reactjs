import React, {useState} from 'react';
import styled from 'styled-components';

const Header = () => {

    const [menuState, setMenuState] = useState(false);

    const navOpenHandler = () => {
        setMenuState(!menuState);
    }

    return (
        <HeaderWrapper>
            <Container>
                <Logo href="/">Hamza Mandil</Logo>
                <NavToggle className="nav-toggle" onClick={navOpenHandler}><i className={menuState ? "fas fa-times" : "fas fa-bars"}></i></NavToggle>
                <Nav className={menuState ? "navbar open" : "navbar"}>
                    <NavList>
                        <li><NavLink href="/" onClick={() => setMenuState(false)}>Home</NavLink></li>
                        <li><NavLink href="#about" onClick={() => setMenuState(false)}>About</NavLink></li>
                        <li><NavLink href="#portfolio" onClick={() => setMenuState(false)}>Portfolio</NavLink></li>
                        <li><NavLink href="#contact" onClick={() => setMenuState(false)}>Contact</NavLink></li>
                    </NavList>
                </Nav>
            </Container>
        </HeaderWrapper>
    )
}

export default Header

const HeaderWrapper = styled.header`
    padding: 1rem 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    box-shadow: 0 4px 24px rgba(0,0,0,0.15);
    z-index: 9999
`

const Container = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const Logo = styled.a`
    color: #000;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.125rem
`
const Nav = styled.nav`

`

const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NavLink = styled.a`
    margin-left: 3rem;
    color: #000;
    transition: all 0.5s ease;

    :hover {
        color: #1A5EC8;
    }
`
const NavToggle = styled.button`
    display:none;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    

`
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../imgs/alpha_logo.png';

const Header = () => {
    return (
        <Navbar bg="custom" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="#home">
                <img src={Logo} className="logo-img" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#Technology">Technology</Nav.Link>
                    <Nav.Link href="#Products">Products & Solutions</Nav.Link>
                    <Nav.Link href="#ContactUs">ContactUs</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;

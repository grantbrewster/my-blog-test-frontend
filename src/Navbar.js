import React from 'react';
import {Link } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'

const NavBar = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand>Mlkmn</Navbar.Brand>

            <Nav className="mr-auto">
                <Link to="/">Home</Link>
            </Nav>
            <Nav className="mr-auto">
                <Link to="/about">About</Link>
            </Nav>
            <Nav className="mr-auto">
                <Link to="/articles-list">Articles</Link>
            </Nav>
    </Navbar>

);

export default NavBar;
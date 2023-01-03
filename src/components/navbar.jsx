import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Image, Nav, DropdownButton, Dropdown } from 'react-bootstrap';

const NavbarStarWars = () => {
    return (
        <Navbar className='justify-content-between'>
            <Navbar.Brand>
                <Link to="/">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" height="60" alt="Star Wars" />
                </Link>
            </Navbar.Brand>
            <Nav className='mr-auto'>
                <Link className='nav-link' style={{color:'white'}} to="/characters">Characters</Link>
                <Link className='nav-link' style={{color:'red'}} to="/planets">Planets</Link>         
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="Favorites">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
        </Navbar>
    );
};

export default NavbarStarWars;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Image, Nav, DropdownButton, Dropdown, Container } from 'react-bootstrap';
import { Context } from '../store/app.Context.js';

const NavbarStarWars = () => {

    const { store, actions } = useContext(Context);

    return (
        <Navbar className='justify-content-between'>
            <Navbar.Brand>
                <Link to="/">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" height="60" alt="Star Wars" />
                </Link>
            </Navbar.Brand>
            <Nav className='mr-auto'>
                <Link className='nav-link' style={{ color: 'white' }} to="/characters">Characters</Link>
                <Link className='nav-link' style={{ color: 'red' }} to="/planets">Planets</Link>
            </Nav>
            <Container className='justify-content-end'>
            <DropdownButton id="dropdown-basic-button" variant="outline-light" title={`Fav Characters: ${store.favorites.length}`}>
                {
                    store.favorites.map(
                        (item, index) => {
                            return (
                                <Dropdown.Item key={index} href="#/action-1">{item}</Dropdown.Item>
                            )
                        }
                    )
                }
            </DropdownButton>
            <span style={{color: 'black'}}>a</span>
            <DropdownButton id="dropdown-basic-button" variant="outline-danger" title={`Fav Planets: ${store.favoritespla.length}`}>
                {
                    store.favoritespla.map(
                        (item, index) => {
                            return (
                                <Dropdown.Item key={index} href="#/action-1">{item}</Dropdown.Item>
                            )
                        }
                    )
                }
            </DropdownButton>
            </Container>
        </Navbar>
    );
};

export default NavbarStarWars;
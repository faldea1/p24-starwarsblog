import React, { useContext } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Context } from '../store/app.Context.js';
import { FaHeart, FaUnderline } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Planets = () => {

    const { store, actions } = useContext(Context);

    return (
        <div>
            <h1 style={{ color: 'red', paddingBottom: 25 }}>Planets of Star Wars</h1>
            {
                store.planetsList.map(
                    (item, index) => {
                        return (
                            <Card key={index} style={{ width: '18rem', color: 'white', background: 'black' }}>
                                <Card.Img variant="top" src="https://starwars-visualguide.com/assets/img/planets/9.jpg" />
                                <Card.Body>
                                    <Card.Title style={{ color: 'turquoise' }}>{item.name}</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>Climate: {item.climate} </li>
                                            <li>Terrain: {item.terrain}</li>
                                            <li>Population: {item.population}</li>
                                            <li>Surface Water: {item.surface_water}</li>
                                            <li>Diameter: {item.diameter}</li>
                                            <li>Orbital Period: {item.orbital_period}</li>
                                            <li>Rotation Period: {item.rotation_period}</li>
                                            <li>Gravity: {item.gravity}</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">
                                        <Card.Text>
                                            <p style={{ fontStyle: 'italic', color: 'lime' }}>`“It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy. Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth. The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space.”`</p>
                                        </Card.Text>
                                    </small>
                                </Card.Footer>
                            </Card>
                        );
                    }
                )
            }
        </div>
    );
};

export default Planets;
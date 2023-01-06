import React, { useContext } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Context } from '../store/app.Context.js';
import { FaHeart, FaUnderline, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Planetsd = () => {

    const { store, actions } = useContext(Context);

    return (
        <div>
            <Link variant="primary" style={{ color: 'yellow' }} to={`/`}><FaArrowAltCircleLeft style={{ marginRight: 5, paddingBottom: 5, fontSize: 25 }} />Go Back!</Link>
            <h1 style={{ color: 'white', paddingTop: 35, paddingBottom: 25, paddingBottom: 25 }}>Planet of Star Wars</h1>
            {
                store.planetsList.map(
                    (item, index) => {
                        return (
                            <ul style={{ display: 'inline-block' }}>
                                <Card key={index} style={{ width: '18rem', color: 'white', background: 'black', border: 'solid red' }}>
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
                            </ul>
                        );
                    }
                )
            }  
        </div>       
    );
};

export default Planetsd;
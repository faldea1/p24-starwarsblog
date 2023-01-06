import React, { useContext } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Context } from '../store/app.Context.js';
import { FaHeart, FaUnderline, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/global.css';




const Characters = () => {

    const { store, actions } = useContext(Context);

    return (
        <div>
            <Link variant="primary" style={{ color: 'yellow' }} to={`/`}><FaArrowAltCircleLeft style={{ marginRight: 5, paddingBottom: 5, fontSize: 25 }} />Go Back!</Link>
            <h1 style={{ color: 'white', paddingTop: 35, paddingBottom: 25, paddingBottom: 25 }}>Characters of Star Wars</h1>
            {
                store.peopleForDetails.map(
                    (item, index) => {
                        return (
                            <ul style={{ display: 'inline-block' }}>
                                <Card key={index} style={{ width: '18rem', color: 'white', background: 'black', border: 'solid white' }}>
                                    <Card.Img variant="top" src={item.charurl} />
                                    <Card.Body>
                                        <Card.Title style={{ color: 'fuchsia' }}>{item.charcaption}</Card.Title>
                                        <Card.Text>
                                            <p style={{ color: 'grey' }}>{item.charphrase}</p>
                                            <ul>
                                                <li>Birth: {item.birth_year}</li>
                                                <li>Gender: {item.gender}</li>
                                                <li>Height: {item.height}</li>
                                                <li>Mass: {item.mass}</li>
                                                <li>Hair Color: {item.hair_color}</li>
                                                <li>Eye Color: {item.eye_color}</li>
                                                <li>Skin Color: {item.skin_color}</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">
                                            <Card.Text><p style={{ fontStyle: 'italic', color: 'coral' }}>`“It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, and space station with enough power to destroy an entire planet.
                                                Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy.”`</p>
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

export default Characters;
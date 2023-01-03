import React, { useContext } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Context } from '../store/app.Context.js';
import { FaHeart, FaUnderline } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const Characters = () => {

    const { store, actions } = useContext(Context);

    return (
        <div>
            <h1 style={{ color: 'white', paddingBottom: 25 }}>Characters of Star Wars</h1>
            {
                store.peopleList.map(
                    (item, index) => {
                        return (
                            <Card key={index} style={{ width: '18rem', color: 'white', background: 'black' }}>
                                <Card.Img variant="top" src="https://starwars-visualguide.com/assets/img/characters/1.jpg" />
                                <Card.Body>
                                    <Card.Title style={{color: 'fuchsia '}}>{item.name}</Card.Title>
                                    <Card.Text>                         
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

                        );
                    }
                )
            }
        </div>
    );
};

export default Characters;
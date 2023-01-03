import React, { useContext, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Context } from '../store/app.Context.js';
import { FaHeart, FaUnderline } from 'react-icons/fa';


export const Home = () => {
    //useContext permite enlazar componente con Flux. Aplicar a todas las views que quiero acceder a store.

    const { store, actions } = useContext(Context)

    //llamar a la acción cuando parta componente Home. Ejecutar acciones de efecto secundarios:

    useEffect(() => {

        actions.fetchPeople();

    }, [])

    return (
        <div>
            <h1 style={{fontStyle: 'italic'}}>A long time ago in a galaxy far, far away...</h1>
            <h2 style={{ color: 'white', paddingTop: 35, paddingBottom: 25, textDecorationLine: 'underline' }}>Characters</h2>
            {
                store.peopleList.map(
                    (item, index) => {
                        return (
                            <Container className='d-inline'>
                            <Card key={index} style={{ width: '18rem', color:'white', background: 'black' }}>
                                <Card.Img variant="top" src="https://starwars-visualguide.com/assets/img/characters/1.jpg" />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>Gender: {item.gender}</li>
                                            <li>Height: {item.height}</li>
                                            <li>Hair Color: {item.hair_color}</li>
                                            <li>Eye Color: {item.eye_color}</li>
                                        </ul>
                                    </Card.Text>
                                    <Button variant="primary" style={{marginRight: 100}}>Learn More!</Button>
                                    {store.favorites.includes(item.name) ? (
                                        null
                                    ) : <Button onClick={() => actions.setFavorites(item.name)} style={{paddingLeft:'50'}} variant="outline-danger"><FaHeart /></Button>}
                                </Card.Body>
                            </Card>
                            </Container>
                        );
                    }
                )
            }
        </div>

    );
};

//*JSON Stringify convierte arreglo en texto plano.
//<span>{JSON.stringify(store.peopleList)}</span>
import React, { useContext, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Context } from '../store/app.Context.js';
import { FaHeart, FaUnderline } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const Home = () => {
    //useContext permite enlazar componente con Flux. Aplicar a todas las views que quiero acceder a store.

    const { store, actions } = useContext(Context);

    //llamar a la acción cuando parta componente Home. Ejecutar acciones de efecto secundarios:

    useEffect(() => {

        actions.fetchPeople();
        actions.fetchPlanets();

    }, [])

    return (
        <div>
            <h1 style={{ fontStyle: 'italic' }}>A long time ago in a galaxy far, far away...</h1>
            <h2 style={{ color: 'white', paddingTop: 35, paddingBottom: 25, textDecorationLine: 'underline' }}>Characters</h2>
            {
                store.peopleList.map(
                    (item, index) => {
                        return (
                            <Container>
                                <Card key={index} style={{ width: '18rem', color: 'white', background: 'black' }}>
                                    <Card.Img variant="top" src="https://starwars-visualguide.com/assets/img/characters/1.jpg" />
                                    <Card.Body>
                                        <Card.Title style={{color: 'fuchsia '}}>{item.name}</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Gender: {item.gender}</li>
                                                <li>Height: {item.height}</li>
                                                <li>Hair Color: {item.hair_color}</li>
                                                <li>Eye Color: {item.eye_color}</li>
                                            </ul>
                                        </Card.Text>
                                        <Link variant="primary" style={{ marginRight: 100 }} to="/characters">Learn More!</Link>
                                        {store.favorites.includes(item.name) ? (
                                            null
                                        ) : <Button onClick={() => actions.setFavorites(item.name)} style={{ paddingLeft: '50' }} variant="outline-light"><FaHeart /></Button>}
                                    </Card.Body>
                                </Card>
                            </Container>
                        );
                    }
                )
            }
            <h2 style={{ color: 'red', paddingTop: 35, paddingBottom: 25, textDecorationLine: 'underline' }}>Planets</h2>
            {
                store.planetsList.map(
                    (item, index) => {
                        return (
                            <Container>
                                <Card key={index} style={{ width: '18rem', color: 'white', background: 'black' }}>
                                    <Card.Img variant="top" src="https://starwars-visualguide.com/assets/img/planets/9.jpg" />
                                    <Card.Body>
                                        <Card.Title style={{color: 'turquoise'}}>{item.name}</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Population: {item.population}</li>
                                                <li>Climate: {item.climate} </li>
                                                <li>Terrain: {item.terrain}</li>
                                                <li>Surface Water: {item.surface_water}</li>
                                            </ul>
                                        </Card.Text>
                                        <Link variant="primary" style={{ marginRight: 100 }} to="/planets">Learn More!</Link>
                                        {store.favoritespla.includes(item.name) ? (
                                            null
                                        ) : <Button onClick={() => actions.setFavoritespla(item.name)} style={{ paddingLeft: '50' }} variant="outline-danger"><FaHeart /></Button>}
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
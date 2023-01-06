import React, { useContext, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Context } from '../store/app.Context.js';
import { FaBorderStyle, FaHeart, FaUnderline } from 'react-icons/fa';
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
            <h2 style={{ color: 'white', paddingTop: 35, paddingBottom: 25, textDecorationLine: 'underline' }}>Add Favorites Characters</h2>
            {
                store.peopleList.map(
                    (item, index) => {
                        return (

                            <ul style={{ display: 'inline-block' }}>
                                <Card key={index} style={{ width: '18rem', color: 'white', background: 'black', border: 'solid white', marginBottom: '50' }}>
                                    <Card.Body>
                                        <Card.Title style={{ color: 'fuchsia' }}>{item.name}</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Gender: {item.gender}</li>
                                                <li>Height: {item.height}</li>
                                                <li>Hair Color: {item.hair_color}</li>
                                                <li>Eye Color: {item.eye_color}</li>
                                            </ul>
                                        </Card.Text>
                                        <Link variant="primary" style={{ marginRight: 100 }} to={`/characters`}>Learn More!</Link>
                                        {store.favorites.includes(item.name) ? (
                                            null
                                        ) : <Button onClick={() => actions.setFavorites(item.name)} style={{ paddingLeft: '50' }} variant="outline-light"><FaHeart /></Button>}
                                    </Card.Body>
                                </Card>
                            </ul>
                        );
                    }
                )
            }
            <h2 style={{ color: 'red', paddingTop: 35, paddingBottom: 25, textDecorationLine: 'underline' }}>Add Favorites Planets</h2>
            {
                store.planetsList.map(
                    (item, index) => {
                        return (
                            <ul style={{ display: 'inline-block' }}>
                                <Card key={index} style={{ width: '18rem', color: 'white', background: 'black', border: 'solid red' }}>
                                    <Card.Body>
                                        <Card.Title style={{ color: 'turquoise' }}>{item.name}</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Climate: {item.climate} </li>
                                                <li>Population: {item.population}</li>
                                                <li>Diameter: {item.diameter}</li>
                                                <li>Surface Water: {item.surface_water}</li>
                                            </ul>
                                        </Card.Text>
                                        <Link variant="primary" style={{ marginRight: 100 }} to={`/planets`}>Learn More!</Link>
                                        {store.favoritespla.includes(item.name) ? (
                                            null
                                        ) : <Button onClick={() => actions.setFavoritespla(item.name)} style={{ paddingLeft: '50' }} variant="outline-danger"><FaHeart /></Button>}
                                    </Card.Body>
                                </Card>
                            </ul>
                        );
                    }
                )
            }






        </div >

    );
};

//*JSON Stringify convierte arreglo en texto plano.
//<span>{JSON.stringify(store.peopleList)}</span>
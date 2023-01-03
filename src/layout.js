import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import injectContext from './store/app.Context';

import NavbarStarWars from './components/navbar';
import { Home } from './views/home';
import Planets from './views/planets';
import Characters from './views/characters';


const Layout = () => {
    const basename = process.env.BASENAME || "";
    return (
        <Container>
            <BrowserRouter basename={basename}>
                <Row>
                    <Col>
                        <NavbarStarWars />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/characters" element={<Characters />} />
                            <Route exact path="/planets" element={<Planets />} />
                            <Route exact path="*" element={<h1 style={{color:'purple'}}>Route not found!</h1>} />
                        </Routes>
                    </Col>
                </Row>
            </BrowserRouter>
        </Container>
    );

};

export default injectContext(Layout);
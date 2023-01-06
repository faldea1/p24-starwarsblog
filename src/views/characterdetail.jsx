import React, { useContext, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Context } from '../store/app.Context.js';
import { FaHeart, FaUnderline, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/global.css';



const Characterd = () => {

    const { store, actions } = useContext(Context);



    return (
        <div>
            <Link variant="primary" style={{ color: 'yellow' }} to={`/`}><FaArrowAltCircleLeft style={{ marginRight: 5, paddingBottom: 5, fontSize: 25 }} />Go Back!</Link>
            <h1 style={{ color: 'white', paddingTop: 35, paddingBottom: 25, paddingBottom: 25 }}>Character of Star Wars</h1>
        </div>
    );
};

export default Characterd;
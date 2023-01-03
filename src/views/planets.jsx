import React, { useContext } from 'react';


const Planets = () => {

    const { store, actions } = useContext(Context);

    return (
        <div>
            <h1 className='d-flex' style={{ color: 'red' }}>Planets of Star Wars</h1>
        </div>
    );
};

export default Planets;
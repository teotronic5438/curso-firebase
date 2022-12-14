import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Login from '../../Components/Form/Login';
import HomeAdd from '../../Components/Form/HomeAdd';

// Funcionalidad principal, mostrarnos el tema del login
// COn un estado veremos si esta logeado o no

const Home = () => {
  const [usuario, setUsuario] = useState(null);
  // Podra tener valor en algun futuro, el homeAdd tendra la info que creamos

  return (
    <Container className='my-2'>
        {usuario ? <HomeAdd /> : <Login /> }
    </Container>
  )
}

export default Home

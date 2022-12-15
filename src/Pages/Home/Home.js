import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Login from '../../Components/Form/Login';
import HomeAdd from '../../Components/Form/HomeAdd';

// Funcionalidad principal, mostrarnos el tema del login
// COn un estado veremos si esta logeado o no

// Necesitamos ahora saber si este estado es tru o false. 
// Objetivo: sabers si esyamos authenticados o no.  EN APP.JS o bien HOME.JS
import app from '../../Firebase/FirebaseApp';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
// onAuthStateChanged: este nos va a permitir el etsado de la app, si esta logeado o no.

const auth = getAuth(app);

const Home = () => {
  const [usuario, setUsuario] = useState(null);
  // Podra tener valor en algun futuro, el homeAdd tendra la info que creamos

  // Logica para ver authenticacion
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    } else {
      setUsuario(null)
    }
  })

  return (
    <Container className='my-2'>
        {usuario ? <HomeAdd correoUsuario={usuario.email} /> : <Login /> }
    </Container>
  )
}

export default Home

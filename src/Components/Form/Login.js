import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousels from '../Carousel/Carousels';
import FormLogin from './FormLogin';
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

import app from '../../Firebase/FirebaseApp';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

// Hacemos la referencia a la autenticacion
// En app estamos creando un copmponente con nuestras credenciales
const auth = getAuth(app);  // Con esto conectamos nuestra app de firebase con nuestra app de servidor


export default function Login() {
    const [registro, setRegistro] = useState(false);
    const [error, setError] = useState(null)

    // escuchar lo que hace nuestro formulario
    const handleSubmit = async (e) => {
        // console.log(e);
        e.preventDefault();
        const correo = e.target.email.value;
        const contrasena = e.target.contrasena.value;
        // console.log(correo, contrasena);
        // console.log("LLegue al handleSubmit");

        // Nuestra variable de estado encuentra o no un valor.
        if(registro){
            // Si no tiene una cuenta se debe registrar, 
            await createUserWithEmailAndPassword(auth, correo, contrasena)

        } else {
            // Si ya tiene cuenta debe hacer login
            await signInWithEmailAndPassword(auth, correo, contrasena)
            .catch(error => setError("Usuario no registrado"))

        }
    }

  return (
    <Row xs={1} md={2} className="g-4">
        <Col>
            <Carousels />
        </Col>

        <Col>
            <h2 className={registro ? 'text-center text-primary' : 'text-center text-success' }> 
                {registro ? 'Registrate' : 'Inicia Session' }
            </h2>
            <FormLogin registro={registro} handleSubmit={handleSubmit}/>
            <div className='mt-4 d-grid'>
                {/* Este button modifica estado para iniciar sesion y/o contraseña */}
                <Button variant='secondary' onClick={() => {setRegistro(!registro); setError(null)}}>
                    { registro 
                        ? "Ya tienes cuenta? Inicia Sesion" 
                        : "No tienes cuenta? Registrate" 
                    } 
                </Button>

            </div>
            { error && <Alert className='text-center my-3' variant="danger"> {error} </Alert>}
        </Col>
    </Row>
  )
}

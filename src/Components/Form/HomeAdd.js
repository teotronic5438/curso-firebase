import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Datos from '../../Components/Table/Datos';

// Servicios que necesitaremos
import app from "../../Firebase/FirebaseApp";
import {getAuth, signOut} from 'firebase/auth';
import { Button } from 'react-bootstrap';

const auth = getAuth(app);

const HomeAdd = ({correoUsuario}) => {
  return (
    <Row xs={1} md={2} className="g-4">
        <Col> 
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              {/* Aqui la logica para desloquearse */}
              <p style={{marginTop: '11px', marginBottom: '11px'}}>
                Bienvenido, <strong>{correoUsuario}</strong> has iniciado sesion
              </p>
              <Button variant='primary' onClick={() => signOut(auth)}>
                Cerrar Sesion
              </Button>
              <hr />
            </div>
            <div>
              {/* Esta seccion sera el formulario */}
              <h4 className='text-center text-primary'>Ingresar Usuarios</h4>
              <form>
                <div className='card card-body'>
                  <div className='form-group'>
                    <input type='text' name='nombre' className='form-control mb-3' placeholder='Ingresar el nombre del usuario'/>
                    <input type='text' name='edad' className='form-control mb-3' placeholder='Ingresar la edad del usuario'/>
                    <input type='text' name='profesione' className='form-control mb-3' placeholder='Ingresar la profesion del usuario'/>
                  </div>
                  <Button variant='primary'>
                    Guardar
                  </Button>
                </div>
              </form>
            </div>
        </Col>
        <Col>
            {/* Esta seccion sera la lista de usuarios */}
            <h4 className='text-center text-success'>Lista de Usuarios</h4>
            <Datos />
        </Col>
    </Row>
  )
}

export default HomeAdd;
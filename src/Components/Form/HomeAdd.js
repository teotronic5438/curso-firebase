import React, {useEffect, useState} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Datos from '../../Components/Table/Datos';
import { Alert, Button } from 'react-bootstrap';

// Servicios que necesitaremos
import app from "../../Firebase/FirebaseApp";
import {getAuth, signOut} from 'firebase/auth';

// funcionalidades de firestore que usaremos
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore';
/*
getFirestore: obtener nuestro Firestore, es decir nuestro serivicio
collection: nuestra bbdd
addDoc: añadir documentos
getDocs: para hacer la peticion por get
doc: hacer una sola peticion a un solo objeto o campo especifico (a un id especifico)
deleteDoc: eliminar un documento (elimina un registro completo)
getDoc: para hacer una peticion para un solo documento, su propio id y sus propios campos
setDoc: vamos a usarlo para la actualizacion de registro

*/


const auth = getAuth(app);

// Aqui tambien crearemos una constante db (database)
const db = getFirestore(app)

const HomeAdd = ({correoUsuario}) => {

  const valorInicial = {
    nombre: '',
    edad: '',
    profesion: ''
  }

  // Variables de estado
  const [user, setUser] = useState(valorInicial);
  const [lista, setLista] = useState([]);
  const [loadData, setLoadData] = useState(false)

  // Funcion que se encargue de capturar los inputs
  const capturarInputs = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name] : value});

  }

  // Hara peticion al servidor para guardar datos
  const guardarDatos = async (e) => {
    e.preventDefault();
    console.log(user);
    setUser({...valorInicial});
    try {
      // parametros addDoc(coleccion(database_app, nombre_database), {datos que queremos agregar})
      await addDoc(collection(db, 'usuarios'), {
        ...user
      }) 
      setLoadData(!loadData);   // Aviso que cambia de estado, asi actulizo el useEfect
    } catch (error) {
      console.error(error);
    }
  }

  // FUncion para eliminar el usuario
  const deleteUser = async (id) => {
    await deleteDoc(doc(db, 'usuarios', id));
    setLoadData(!loadData);   // Aviso que cambia de estado, asi actulizo el useEfect
  }

  // Funcion para renderizar lista de usuarios
  useEffect(() => {
    const getLista = async () => {
      try {
        // getDocs: traera una coleccion getDocs(collection(db, 'nombre_coleccion'))
        const querySnapshot = await getDocs(collection(db, 'usuarios'));
        const docs = [];
        querySnapshot.forEach(doc => {
          docs.push({...doc.data(), id: doc.id});   // uno la data y el id
        });
        setLista(docs);   // ya tiene toda la informacion que venimos cargando
      } catch (error) {
        console.error(error)
      }
    }
    getLista();
    
    console.log(lista);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[loadData]);

  return (
    <Row>
        <Col xs={5}> 
            <div>
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
              <form onSubmit={guardarDatos}>
                <div className='card card-body'>
                  <div className='form-group'>
                    <input type='text' name='nombre' className='form-control mb-3' placeholder='Ingresar el nombre del usuario'
                      onChange={capturarInputs} value={user.nombre}
                    />
                    <input type='text' name='edad' className='form-control mb-3' placeholder='Ingresar la edad del usuario'
                      onChange={capturarInputs} value={user.edad}
                    />
                    <input type='text' name='profesion' className='form-control mb-3' placeholder='Ingresar la profesion del usuario'
                      onChange={capturarInputs} value={user.profesion}
                    />
                  </div>
                  <Button variant='primary' type='submit'>
                    Guardar
                  </Button>
                </div>
              </form>
            </div>
        </Col>
        <Col xs={7}>
            {/* Esta seccion sera la lista de usuarios */}
            <h4 className='text-center text-success'>Lista de Usuarios</h4>
            { lista.length > 0 
            ? <Datos lista={lista} deleteUser={deleteUser}/> 
            : <Alert className='text-center'>No hay datos cargador en la lista</Alert> }
        </Col>
    </Row>
  )
}

export default HomeAdd;
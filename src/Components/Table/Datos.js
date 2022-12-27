import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function Datos({lista, deleteUser}) {
  const filas = lista.map((fila, index) => 
    <tr key={fila.id}>
      <td>{index + 1}</td>
      <td>{fila.nombre}</td>
      <td>{fila.edad}</td>
      <td>{fila.profesion}</td>
      <td> <Button variant='success'>Actualizar</Button> 
          &nbsp;&nbsp;<Button variant='danger' onClick={()=> deleteUser(fila.id)}>Eliminar</Button>
      </td>
    </tr>
  )
  return (
    <div className='my-3'>
        <Table striped bordered hover className='text-center'>
            <thead>
                <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Profesion</th>
                <th>Administrar</th>
                </tr>
            </thead>
            <tbody>
                {filas}
            </tbody>
        </Table>
        <div className='d-flex justify-content-evenly'>

        </div>
    </div>
  )
}

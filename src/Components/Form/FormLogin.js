import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function FormLogin({registro, handleSubmit}) {
  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Ingresar Email" required  name='email'/>
            <Form.Text className="text-muted">
                El correo que uso durante su registro.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Ingresar Password" required name='contrasena'/>
        </Form.Group>

        <Button variant={registro ? "primary" : "success"} type="submit">
            { registro ? "Registrate" : "Iniciar Sesion" } 
        </Button>
    </Form>
  )
}

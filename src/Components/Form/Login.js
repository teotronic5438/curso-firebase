import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousels from '../Carousel/Carousels';
import FormLogin from './FormLogin';


export default function Login() {
    const [registro, setRegistro] = useState(false)

  return (
    <Row xs={1} md={2} className="g-4">
        <Col>
            <Carousels />
        </Col>
        <Col>
            <h2 className={registro ? 'text-center text-primary' : 'text-center text-success' }> 
                {registro ? 'Registrate' : 'Inicia Session' }
            </h2>
            <FormLogin registro={registro}/>
        </Col>
    </Row>
  )
}

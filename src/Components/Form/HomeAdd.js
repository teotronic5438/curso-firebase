import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Datos from '../../Components/Table/Datos';

const HomeAdd = () => {
  return (
    <Row xs={1} md={2} className="g-4">
        <Col>
            <p>Registro</p>
        </Col>
        <Col>
            <Datos />
        </Col>
    </Row>
  )
}

export default HomeAdd;
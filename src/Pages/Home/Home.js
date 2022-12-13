import React from 'react';
import Container from 'react-bootstrap/Container';
import Login from '../../Components/Form/Login';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Datos from '../../Components/Table/Datos';

const Home = () => {
  return (
    <Container className='my-2'>
        <Row xs={1} md={2} className="g-4">
            <Col>
                <Login />
            </Col>
            <Col>
                <Datos />
            </Col>
        </Row>

    </Container>
  )
}

export default Home

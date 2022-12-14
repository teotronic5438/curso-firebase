import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// En react las imagenes deben ser importadas como componentes
import Spider from '../../img/spiderman.jpg'
import Infinity from '../../img/infinity.jpg'
import EndGame from '../../img/endgame.jpg'

export default function Carousels() {
  return (
    <Carousel variant="dark">
        {/* Inicio Carousel 1 */}
        <Carousel.Item>
            <img
                className="d-block img-carousel"
                src={Spider}
                alt="First slide"
            />
            {/* <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        {/* Inicio Carousel 1 */}

        {/* Inicio Carousel 2 */}
        <Carousel.Item>
            <img
                className="d-block img-carousel"
                src={Infinity}
                alt="Second slide"
            />
            {/* <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        {/* Inicio Carousel 2 */}

        {/* Inicio Carousel 3 */}
        <Carousel.Item>
            <img
                className="d-block img-carousel"
                src={EndGame}
                alt="Third slide"
            />
            {/* <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption> */}
        </Carousel.Item>
        {/* Inicio Carousel 3 */}

    </Carousel>
  )
}

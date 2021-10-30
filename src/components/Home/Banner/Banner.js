import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <>
           <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?size=626&ext=jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?size=626&ext=jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn11.bigcommerce.com/s-fe8s4uj/images/stencil/960w/carousel/545/Natures_Truth_1021.jpg?c=2"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
        </>
    );
};

export default Banner;
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Fade from 'react-reveal/Fade';

const Banner = () => {
    return (
        <>
           <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/750825/pexels-photo-750825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="First slide"
    />
    <Carousel.Caption>
    <Fade bottom>
      <h1>EXPERIENCE THE NATURAL BEAUTY</h1>
      <p>Life is a journey, not a destination.</p>
      </Fade>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/889930/pexels-photo-889930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Second slide"
    />

    <Carousel.Caption>
    <Fade bottom>
      <h1>ENJOY THE TRAVEL WITH US</h1>
      <p>It feels good to be lost in the right direction.</p>
      </Fade>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
    />

    <Carousel.Caption>
    <Fade bottom>
      <h1>EXPLORE THE WORLD WITH US</h1>
      <p>Travel is the only thing you buy that makes you richer.</p>
      </Fade>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
        </>
    );
};

export default Banner;
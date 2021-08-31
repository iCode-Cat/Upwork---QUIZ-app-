import React from 'react';
import { Carousel } from 'react-bootstrap';
import Graphics from './Graphics';

const SlideShow = ({ mainTitle, Labels }) => {
  return (
    <Carousel>
      <Carousel.Item>
        <Graphics />
      </Carousel.Item>
      <Carousel.Item>
        <h1>HELLO</h1>
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideShow;

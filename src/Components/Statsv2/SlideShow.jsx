import React from 'react';
import { Carousel } from 'react-bootstrap';
import Compare from './Compare';
import Graphics from './Graphics';

const SlideShow = ({ mainTitle, labels }) => {
  return (
    <Carousel>
      <Carousel.Item>
        <Graphics mainTitle={mainTitle} labels={labels} />
      </Carousel.Item>
      <Carousel.Item>
        <Compare />
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideShow;

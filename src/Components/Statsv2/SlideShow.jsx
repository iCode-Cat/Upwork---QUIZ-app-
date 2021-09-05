import React from 'react';
import { Carousel } from 'react-bootstrap';
import Compare from './Compare';
import Graphics from './Graphics';
import Previous from '../../Images/Previous.svg';
import Next from '../../Images/Next.svg';
import { useSelector } from 'react-redux';
const SlideShow = ({ mainTitle, labels, toggle, currency, tooltip }) => {
  const stats = useSelector((state) => state.quiz.userState.results);

  if (!stats) {
    return <h1>CALCULATING</h1>;
  }

  return (
    <Carousel
      className='slider-wrapper'
      indicators
      interval={null}
      touch
      prevIcon={<img src={Previous} />}
      nextIcon={<img src={Next} />}
    >
      <Carousel.Item>
        <Graphics
          className='slider-item'
          currency={currency}
          stats={stats}
          toggle={toggle}
          mainTitle={mainTitle}
          labels={labels}
          tooltip={tooltip}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Compare toggle={toggle} stats={stats} currency={currency} />
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideShow;

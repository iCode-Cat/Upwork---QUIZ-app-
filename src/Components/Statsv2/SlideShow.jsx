import React from 'react';
import { Carousel } from 'react-bootstrap';
import Compare from './Compare';
import Graphics from './Graphics';
import Previous from '../../Images/Previous.svg';
import Next from '../../Images/Next.svg';
import { useSelector } from 'react-redux';
const SlideShow = ({ mainTitle, labels, toggle, currency }) => {
  const stats = useSelector((state) => state.quiz.userState.results);

  const sliderStyle = {
    width: '100%',
    padding: 0,
    height: '500px',
    background: 'red',
  };

  const sliderItem = {
    overflow: 'auto !important',
  };

  if (!stats) {
    return <h1>CALCULATING</h1>;
  }

  return (
    <Carousel
      indicators
      interval={null}
      touch
      prevIcon={<img src={Previous} />}
      nextIcon={<img src={Next} />}
      style={sliderStyle}
    >
      <Carousel.Item style={sliderItem}>
        <Graphics
          currency={currency}
          stats={stats}
          toggle={toggle}
          mainTitle={mainTitle}
          labels={labels}
        />
      </Carousel.Item>
      <Carousel.Item style={sliderItem}>
        <Compare toggle={toggle} stats={stats} currency={currency} />
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideShow;

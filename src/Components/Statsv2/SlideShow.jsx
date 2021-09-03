import React from 'react';
import { Carousel } from 'react-bootstrap';
import Compare from './Compare';
import Graphics from './Graphics';
import Previous from '../../Images/Previous.svg';
import Next from '../../Images/Next.svg';
import { useSelector } from 'react-redux';
const SlideShow = ({ mainTitle, labels, toggle }) => {
  const stats = useSelector((state) => state.quiz.userState.results);

  if (!stats) {
    return 'CALCULATING';
  }

  return (
    <Carousel
      indicators
      interval={null}
      touch
      prevIcon={<img src={Previous} />}
      nextIcon={<img src={Next} />}
      style={{ width: '100%', padding: 0, height: '500px' }}
    >
      <Carousel.Item>
        <Graphics
          stats={stats}
          toggle={toggle}
          mainTitle={mainTitle}
          labels={labels}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Compare />
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideShow;

import React from 'react';
import { Carousel } from 'react-bootstrap';
import Compare from './Compare';
import Graphics from './Graphics';
import Previous from '../../Images/Previous.svg';
import Next from '../../Images/Next.svg';
import { useSelector } from 'react-redux';
const SlideShow = ({
  mainTitle,
  labels,
  toggle,
  currency,
  tooltip,
  subTitle,
}) => {
  const stats = useSelector((state) => state.quiz);
  const compareContent = stats.defaultJson.stats.tabMenus;

  // if (!stats) {
  //   return <h1>CALCULATING</h1>;
  // }

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
          stats={stats.userState.results}
          toggle={toggle}
          mainTitle={mainTitle}
          labels={labels}
          tooltip={tooltip}
          subTitle={subTitle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Compare
          toggle={toggle}
          stats={stats.userState.results}
          currency={currency}
          compare={compareContent[toggle]}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideShow;

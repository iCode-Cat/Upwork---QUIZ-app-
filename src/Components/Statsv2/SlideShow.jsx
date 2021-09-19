import React from 'react';
import Compare from './Compare';
import Graphics from './Graphics';
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
    <div className='slider-wrapper'>
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
      <Compare
        toggle={toggle}
        stats={stats.userState.results}
        currency={currency}
        compare={compareContent[toggle]}
      />
    </div>
  );
};

export default SlideShow;

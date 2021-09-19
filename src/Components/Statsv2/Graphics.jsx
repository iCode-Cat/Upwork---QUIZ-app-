import React, { useRef } from 'react';
import Circle from './Circle';
import CircleSecond from './CircleSecond';
import Labels from './Labels';
import Title from './Title';

const Graphics = ({
  mainTitle,
  toggle,
  stats,
  currency,
  tooltip,
  subTitle,
}) => {
  const parent = useRef();
  return stats.map((item, index) => (
    <div
      key={index}
      ref={parent}
      style={{
        position: index === 0 && 'absolute',
        width: '100%',
        background: '#FFF',
        transition: ' opacity 0.6s',
        opacity: `${toggle === index ? '1' : '0'}`,
        zIndex: `${toggle === index ? '1' : '0'}`,
      }}
    >
      <Title mainTitle={mainTitle} />
      <div className='breakdown-wrapper'>
        {index === 0 ? (
          <Circle
            currency={currency}
            savings={item.savings}
            subTitle={subTitle}
          />
        ) : (
          <CircleSecond
            type={toggle}
            savings={item.savings}
            currency={currency}
            subTitle={subTitle}
          />
        )}

        <Labels tooltip={tooltip} currency={currency} items={item} />
      </div>
    </div>
  ));
};

export default Graphics;

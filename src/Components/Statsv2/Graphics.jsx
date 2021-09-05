import React, { useEffect, useRef, useState } from 'react';
import Circle from './Circle';
import CircleSecond from './CircleSecond';
import Labels from './Labels';
import Title from './Title';

const Graphics = ({ mainTitle, toggle, stats, currency }) => {
  const parent = useRef();

  // Trigger SVG circle change everytime toggle changes
  useEffect(() => {}, [toggle]);

  return stats.map((item, index) => (
    <div
      key={index}
      ref={parent}
      style={{
        position: 'absolute',
        width: '100%',
        background: '#FFF',
        transition: ' opacity 0.6s',
        opacity: `${toggle === index ? '1' : '0'}`,
        zIndex: `${toggle === index ? '1' : '0'}`,
      }}
      className='stats-graphics'
    >
      <Title mainTitle={mainTitle} />
      <div className='breakdown-wrapper'>
        {index === 0 ? (
          <Circle currency={currency} savings={item.savings} />
        ) : (
          <CircleSecond
            type={toggle}
            savings={item.savings}
            currency={currency}
          />
        )}

        <Labels currency={currency} items={item} />
      </div>
    </div>
  ));
};

export default Graphics;

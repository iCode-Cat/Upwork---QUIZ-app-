import React, { useEffect, useRef } from 'react';
import Circle from './Circle';
import Labels from './Labels';
import Title from './Title';

const Graphics = ({ mainTitle, labels, toggle, stats, currency }) => {
  const parent = useRef();
  const fade = useRef();

  // Items declare saving amonunt of each category
  const { savings, items } = stats[toggle];
  console.log(toggle);
  console.log(stats);

  return stats.map((item, key) => (
    <div
      ref={parent}
      style={{
        position: 'absolute',
        width: '100%',
        background: '#FFF',
        transition: ' opacity 0.6s',
        opacity: `${toggle === key ? '1' : '0'}`,
        zIndex: `${toggle === key ? '1' : '0'}`,
      }}
      className='stats-graphics'
    >
      <Title mainTitle={mainTitle} />
      <div className='breakdown-wrapper'>
        <Circle type={toggle} currency={currency} />
        <Labels currency={currency} items={item} />
      </div>
    </div>
  ));
};

export default Graphics;

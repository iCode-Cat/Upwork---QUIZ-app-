import React, { useEffect, useRef } from 'react';
import Circle from './Circle';
import Labels from './Labels';
import Title from './Title';

const Graphics = ({ mainTitle, labels, toggle }) => {
  const parent = useRef();
  useEffect(() => {}, [toggle]);
  return (
    <div ref={parent} className='stats-graphics'>
      <Title mainTitle={mainTitle} />
      <div className='breakdown-wrapper'>
        <Circle />
        <Labels labels={labels} />
      </div>
    </div>
  );
};

export default Graphics;

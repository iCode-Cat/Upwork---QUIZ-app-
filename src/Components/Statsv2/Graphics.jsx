import React from 'react';
import Circle from './Circle';
import Labels from './Labels';
import Title from './Title';

const Graphics = ({ mainTitle, labels }) => {
  return (
    <div className='stats-graphics'>
      <Title mainTitle={mainTitle} />
      <div className='breakdown-wrapper'>
        <Circle />
        <Labels labels={labels} />
      </div>
    </div>
  );
};

export default Graphics;

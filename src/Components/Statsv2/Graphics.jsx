import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Circle from './Circle';
import Labels from './Labels';
import Title from './Title';

const Graphics = ({ mainTitle, labels, toggle, stats, currency }) => {
  const parent = useRef();

  useEffect(() => {
    // parent.current.classList.add('stats-fade');
    // setTimeout(() => {
    //   parent.current.classList.remove('stats-fade');
    // }, 2000);
  }, [toggle]);

  // Items declare saving amonunt of each category
  const { savings, items } = stats[toggle];

  return (
    <div ref={parent} className='stats-graphics'>
      <Title mainTitle={mainTitle} />
      <div className='breakdown-wrapper'>
        <Circle currency={currency} savings={savings} />
        <Labels currency={currency} items={items} labels={labels} />
      </div>
    </div>
  );
};

export default Graphics;

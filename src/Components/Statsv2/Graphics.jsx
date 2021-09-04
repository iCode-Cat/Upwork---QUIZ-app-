import React, { useEffect, useRef } from 'react';
import Circle from './Circle';
import Labels from './Labels';
import Title from './Title';

const Graphics = ({ mainTitle, labels, toggle, stats, currency }) => {
  const parent = useRef();
  const fade = useRef();

  useEffect(() => {
    // Call fade function
    // fadeAnim();
    parent.current.style.opacity = 0;
    parent.current.style.transition = '1s';
    setTimeout(() => {
      parent.current.style.opacity = 1;
    }, 200);
  }, [toggle]);

  // Items declare saving amonunt of each category
  const { savings, items } = stats[toggle];

  return (
    <div ref={parent} className='stats-graphics'>
      <Title mainTitle={mainTitle} />
      <div className='breakdown-wrapper'>
        <Circle type={toggle} currency={currency} savings={savings} />
        <Labels currency={currency} items={items} labels={labels} />
      </div>
    </div>
  );
};

export default Graphics;

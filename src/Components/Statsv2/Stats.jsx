import React, { useState, useEffect } from 'react';
import './Stats.scss';
import Toggle from './Toggle';
import SlideShow from './SlideShow';
import Background from '../Background';

const Stats = ({ results, state }) => {
  // Redux State

  // Stats
  const [data, setData] = useState(false);
  const [toggle, setToggle] = useState(0);
  // Json Destructure
  const defaultJson = state.defaultJson;

  const { stats } = defaultJson;
  const { tabMenus, currency } = stats;

  // Change Data According to Toggle
  useEffect(() => {
    setData(tabMenus[toggle]);
  }, [toggle]);

  // Data Structure
  const { mainTitle, labels, tooltip } = data;

  return (
    <Background ref={results} bg>
      <section className='stats-wrapper'>
        <Toggle toggle={toggle} setToggle={setToggle} tabMenus={tabMenus} />
        <SlideShow
          currency={currency}
          mainTitle={mainTitle}
          labels={labels}
          toggle={toggle}
          tooltip={tooltip}
        />
      </section>
    </Background>
  );
};

export default Stats;

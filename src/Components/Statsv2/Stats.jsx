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
  const { tabMenus, currency, tabMenuMod } = stats;

  // Change Data According to Toggle
  useEffect(() => {
    setData(tabMenus[toggle]);
  }, [toggle]);

  console.log(data);

  // Data Structure
  const { mainTitle, labels, tooltip, subTitle } = data;
  console.log(tabMenuMod);

  return (
    <Background>
      <section ref={results} className='stats-wrapper'>
        {tabMenuMod === 0 && (
          <Toggle toggle={toggle} setToggle={setToggle} tabMenus={tabMenus} />
        )}
        <SlideShow
          currency={currency}
          mainTitle={mainTitle}
          labels={labels}
          toggle={toggle}
          tooltip={tooltip}
          subTitle={subTitle}
        />
      </section>
    </Background>
  );
};

export default Stats;

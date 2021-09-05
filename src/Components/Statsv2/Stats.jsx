import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Stats.scss';
import Toggle from './Toggle';
import SlideShow from './SlideShow';

const Stats = ({ results }) => {
  // Redux State
  const state = useSelector((state) => state.quiz);
  const resultsState = state.userState.results;
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
  const { mainTitle, labels } = data;

  return resultsState ? (
    <section ref={results} className='stats-wrapper'>
      <Toggle toggle={toggle} setToggle={setToggle} tabMenus={tabMenus} />
      <SlideShow
        currency={currency}
        mainTitle={mainTitle}
        labels={labels}
        toggle={toggle}
      />
    </section>
  ) : (
    ''
  );
};

export default Stats;

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Circle from './Circle';
import Labels from './Labels';
import './Stats.scss';
import Title from './Title';
import Toggle from './Toggle';

const Stats = () => {
  // Redux State
  const state = useSelector((state) => state.quiz);
  // Stats
  const [data, setData] = useState(false);
  const [toggle, setToggle] = useState(0);
  // Json Destructure
  const defaultJson = state.defaultJson;
  const userState = state.userState;
  const { stats } = defaultJson;
  const { tabMenus } = stats;
  // console.log(tabMenus);

  // Change Data According to Toggle
  useEffect(() => {
    setData(tabMenus[toggle]);
  }, [toggle]);

  // Data Structure
  const { mainTitle, labels } = data;

  console.log(data);

  return (
    <section className='stats-wrapper'>
      <Toggle toggle={toggle} setToggle={setToggle} tabMenus={tabMenus} />
      <Title mainTitle={mainTitle} />
      <div className='breakdown-wrapper'>
        <Circle />
        <Labels labels={labels} />
      </div>
    </section>
  );
};

export default Stats;

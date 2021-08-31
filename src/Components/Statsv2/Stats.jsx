import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Stats.scss';
import Toggle from './Toggle';
import SlideShow from './SlideShow';

const Stats = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
      <SlideShow mainTitle={mainTitle} labels={labels} toggle={toggle} />
    </section>
  );
};

export default Stats;

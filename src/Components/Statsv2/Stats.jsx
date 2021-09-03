import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Stats.scss';
import Toggle from './Toggle';
import SlideShow from './SlideShow';
import Pin from '../../Images/Pin.svg';
const Stats = ({ results }) => {
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
  const { tabMenus, currency } = stats;
  // console.log(tabMenus);

  // Change Data According to Toggle
  useEffect(() => {
    setData(tabMenus[toggle]);
  }, [toggle]);

  // Data Structure
  const { mainTitle, labels } = data;

  console.log(data);

  return (
    <section ref={results} className='stats-wrapper'>
      <Toggle toggle={toggle} setToggle={setToggle} tabMenus={tabMenus} />
      <SlideShow
        currency={currency}
        mainTitle={mainTitle}
        labels={labels}
        toggle={toggle}
      />
      <img className='stats-pin' src={Pin} alt='svg' />
    </section>
  );
};

export default Stats;

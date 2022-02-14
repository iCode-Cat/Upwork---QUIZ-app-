import React, { useState, useEffect } from 'react';
import './Stats.scss';
import Toggle from './Toggle';
import SlideShow from './SlideShow';
import Background from '../Background';
import SectionGrade from '../SectionGrade';
import RecommendButton from '../RecommendButton';

const Stats = ({ results, state, setShow }) => {
  // Redux State

  // Stats
  const [data, setData] = useState(false);
  const [toggle, setToggle] = useState(0);
  // Json Destructure
  const defaultJson = state.defaultJson;

  const { stats } = defaultJson;
  const { tabMenus, currency, tabMenuMod, sectionGrade } = stats;

  // Change Data According to Toggle
  useEffect(() => {
    setData(tabMenus[toggle]);

    if (tabMenuMod !== 0) {
      setToggle(tabMenuMod - 1);
    }
  }, [toggle]);

  // Data Structure
  const { mainTitle, labels, tooltip, subTitle } = data;

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
        {sectionGrade && <SectionGrade />}
        {/* <div onClick={() => setShow(true)} className='stats-recommend'>
          <RecommendButton text='See Recommendation' />
        </div> */}
      </section>
    </Background>
  );
};

export default Stats;

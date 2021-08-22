import React, { useState } from 'react';
import style from '../../Scss/Stats.module.scss';
import { stats } from '../../Json/headless';
import ToggleMenu from './ToggleMenu';
import CostStats from './CostStats';
import BreakDown from './BreakDown';
import triangle from '../../Images/triangleBlue.svg';

const TabHandler = ({ setToggle, tabMode }) => {
  setToggle(tabMode);
  return '';
};

const Stats = ({ results }) => {
  const [toggle, setToggle] = useState(0);
  const tabMode = stats.tabMenuMod;
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 3000);

  return (
    <section ref={results} className={style.wrapper}>
      <>
        {loader ? (
          <p
            style={{
              fontSize: '3rem',
              minHeight: '400px',
              fontWeight: '600',
              marginTop: '4rem',
              color: '#333',
            }}
          >
            Calculating...
          </p>
        ) : (
          <>
            <div className={style.tabMenu}>
              {stats.tabMenus.map((menu, index) =>
                tabMode >= 2 ? (
                  <ToggleMenu
                    key={index}
                    menu={menu}
                    style={style}
                    toggle={toggle}
                    setToggle={setToggle}
                  />
                ) : (
                  <TabHandler setToggle={setToggle} tabMode={tabMode} />
                )
              )}
            </div>

            <CostStats style={style} data={stats.tabMenus[toggle]} />
            <BreakDown style={style} data={stats.tabMenus[toggle]} />
            <div className={style.cta}>
              <p className={style.cta_text}>{stats.ctaText}</p>
              <img src={triangle} alt='icon' className={style.cta_icon} />
            </div>
          </>
        )}{' '}
      </>
    </section>
  );
};

export default Stats;

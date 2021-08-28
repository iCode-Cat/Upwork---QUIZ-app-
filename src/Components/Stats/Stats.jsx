import React, { useState } from 'react';
import style from '../../Scss/Stats.module.scss';
import ToggleMenu from './ToggleMenu';
import CostStats from './CostStats';
import BreakDown from './BreakDown';
import triangle from '../../Images/triangleBlue.svg';
import { useSelector } from 'react-redux';

const TabHandler = ({ setToggle, tabMode }) => {
  setToggle(tabMode);
  return '';
};

const Stats = ({ results, defaultJson }) => {
  const state = useSelector((state) => state.quiz.userState);
  const { stats } = defaultJson;
  const [toggle, setToggle] = useState(0);
  const tabMode = defaultJson.stats.tabMenuMod;
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

            {state.results && (
              <CostStats
                toggle={toggle}
                style={style}
                data={stats.tabMenus[toggle]}
              />
            )}
            <BreakDown
              toggle={toggle}
              style={style}
              data={stats.tabMenus[toggle]}
            />
            <a href={stats.ctaUrl} className={style.cta}>
              <p className={style.cta_text}>{stats.ctaText}</p>
              <img src={triangle} alt='icon' className={style.cta_icon} />
            </a>
          </>
        )}{' '}
      </>
    </section>
  );
};

export default Stats;
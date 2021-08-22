import React, { useState } from 'react';
import style from '../../Scss/Stats.module.scss';
import { stats } from '../../Json/headless';
import ToggleMenu from './ToggleMenu';
import CostStats from './CostStats';
import BreakDown from './BreakDown';
import triangle from '../../Images/triangleBlue.svg';

const Stats = ({ results }) => {
  const [toggle, setToggle] = useState(0);
  console.log(stats);
  return (
    <section ref={results} className={style.wrapper}>
      {/* TAB MENU */}
      <div className={style.tabMenu}>
        {stats.tabMenus.map((menu, index) => (
          <ToggleMenu
            key={index}
            menu={menu}
            style={style}
            toggle={toggle}
            setToggle={setToggle}
          />
        ))}
      </div>
      {/* TAB CONTENT */}

      <CostStats style={style} data={stats.tabMenus[toggle]} />
      <BreakDown style={style} data={stats.tabMenus[toggle]} />
      <div className={style.cta}>
        <p className={style.cta_text}>{stats.ctaText}</p>
        <img src={triangle} alt='icon' className={style.cta_icon} />
      </div>
    </section>
  );
};

export default Stats;

import React, { useState } from 'react';
import style from '../../Scss/Stats.module.scss';
import { stats } from '../../Json/headless';
import ToggleMenu from './ToggleMenu';
import CostStats from './CostStats';
import BreakDown from './BreakDown';

const Stats = ({ results }) => {
  const [toggle, setToggle] = useState(0);
  console.log(stats);
  return (
    <section ref={results} className={style.wrapper}>
      {/* TAB MENU */}
      <div className={style.tabMenu}>
        {stats.tabMenus.map((menu, index) => (
          <ToggleMenu
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
    </section>
  );
};

export default Stats;

import React, { useState } from 'react';
import style from '../../Scss/Stats.module.scss';
import { stats } from '../../Json/headless';

const Stats = ({ results }) => {
  const [toggle, setToggle] = useState(0);
  console.log(stats);
  return (
    <section ref={results} className={style.wrapper}>
      {/* TAB MENU */}
      <div className={style.tabMenu}>
        {stats.tabMenus.map((menu, index) => (
          <p
            onClick={() => setToggle(menu.key)}
            className={`${style.menuItem} ${
              toggle === menu.key ? style.Active : style.Passive
            }`}
            key={index}
          >
            {menu.name}
          </p>
        ))}
      </div>
      {/* TAB CONTENT */}
      <div className={style.tabMenu_content}>
        <p
          className={style.tabMenu_title}
          dangerouslySetInnerHTML={{ __html: stats.tabMenus[toggle].mainTitle }}
        />
      </div>
    </section>
  );
};

export default Stats;

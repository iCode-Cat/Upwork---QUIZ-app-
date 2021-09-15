import React, { useState } from 'react';
import style from '../../Scss/Stats.module.scss';
import BreakDown from './BreakDown';
import triangle from '../../Images/triangleBlue.svg';

const Stats = ({ results, defaultJson }) => {
  const { stats } = defaultJson;
  const [toggle, setToggle] = useState(0);
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 1);

  return (
    <section
      style={{ display: 'none' }}
      ref={results}
      className={style.wrapper}
    >
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
            <BreakDown
              toggle={toggle}
              style={style}
              disclaimer={true}
              data={stats.tabMenus[toggle]}
            />
            <a href={stats.ctaUrl} className={style.cta}>
              <p className={style.cta_text}>{stats.ctaText}</p>
              <img src={triangle} alt='icon' className={style.cta_icon} />
            </a>
          </>
        )}
      </>
    </section>
  );
};

export default Stats;

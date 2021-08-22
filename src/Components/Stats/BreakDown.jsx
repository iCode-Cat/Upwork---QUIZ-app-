import React, { useState } from 'react';
import circle from '../../Images/circle.svg';
import info from '../../Images/info.svg';
import PopupInfo from './PopupInfo.jsx';

const Labels = ({ style, data }) => {
  return (
    <section className={style.labels}>
      {data.map((item, index) => (
        <div key={index} className={style.labels_container}>
          <div
            style={{
              background: item.color,
              width: '24px',
              height: '24px',
              borderRadius: '50%',
            }}
            className={style.labels_dot}
          ></div>
          <p className={style.labels_value}>{item.value}</p>
          <p className={style.labels_title}>{item.name}</p>
        </div>
      ))}
    </section>
  );
};

const BreakDown = ({ data, style }) => {
  const { costs } = data;
  const { yourCost, cognniCost } = costs[0];
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className={style.breakDown}>
      <p className={style.breakDown_title}>{data.breakDown.title}</p>
      <div className={style.breakDown_stats}>
        <span className={style.svg}>
          <div className={style.svg_container}>
            <p className={style.svg_currency}>{data.currency}</p>
            {/* SAVING AMOUNT */}
            <p className={style.svg_amount}>
              {Number(yourCost.amount) - Number(cognniCost.amount)}
            </p>
            <p className={style.svg_subTitle}>{data.subTitle}</p>
          </div>
          <img src={circle} alt='circle' className={style.breakDown_svg} />
        </span>
        <Labels style={style} data={data.breakDown.labels} />
        {/* DISCLAIMER */}

        <div
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className={style.disclaimer}
        >
          <PopupInfo
            isVisible={isVisible}
            disclaimer={data.breakDown.disclaimer}
            setIsVisible={setIsVisible}
          />
          <img src={info} alt='info-icon' className={style.disclaimer_icon} />
          <p className={style.disclaimer_text}>Disclaimer</p>
        </div>
      </div>
    </section>
  );
};

export default BreakDown;

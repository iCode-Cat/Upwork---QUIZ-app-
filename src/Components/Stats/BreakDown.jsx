import React from 'react';
import circle from '../../Images/circle.svg';

const Labels = ({ style, data }) => {
  console.log(data);
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
          <p className={style.labels_title}>{item.name}</p>
          <p className={style.labels_value}>{item.value}</p>
        </div>
      ))}
    </section>
  );
};

const BreakDown = ({ data, style }) => {
  const { costs } = data;
  const { yourCost, cognniCost } = costs[0];
  console.log(data);
  return (
    <section className={style.breakDown}>
      <p className={style.breakDown_title}>{data.breakDown.title}</p>
      <div className={style.breakDown_stats}>
        <span className={style.svg}>
          <div className={style.svg_container}>
            <p className={style.svg_currency}>{data.currency}</p>
            <p className={style.svg_amount}>
              {Number(yourCost.amount) - Number(cognniCost.amount)}
            </p>
            <p className={style.svg_subTitle}>{data.subTitle}</p>
          </div>
          <img src={circle} alt='circle' className={style.breakDown_svg} />
        </span>
        <Labels style={style} data={data.breakDown.labels} />
      </div>
    </section>
  );
};

export default BreakDown;

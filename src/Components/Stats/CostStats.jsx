import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const CostStats = ({ style, data }) => {
  const { yourCost, cognniCost } = data.costs[0];
  const numberFormat = new Intl.NumberFormat('en-US');

  return (
    <section className={style.tabMenu_content}>
      <p
        className={style.tabMenu_title}
        dangerouslySetInnerHTML={{ __html: data.mainTitle }}
      />
      <div className={style.tabMenu_progressContainer}>
        <div className={style.progressBar}>
          <p className={style.progressBar_title}>{yourCost.title}</p>
          <ProgressBar
            className={style.bar1}
            completed='85'
            baseBgColor='hsla(187, 10%, 84%, 0.301)'
            bgColor='hsla(0, 0%, 61%, 0.200)'
            labelAlignment='center'
            labelSize='18px'
            borderRadius='8px'
            height='40px'
            isLabelVisible={false}
          />
          <p className={`${style.progressBar_cost} ${style.textDark}`}>
            {'$ ' + numberFormat.format(yourCost.amount)}
          </p>
        </div>
        <div className={style.progressBar}>
          <p className={style.progressBar_title}>{cognniCost.title}</p>
          <ProgressBar
            className={style.bar2}
            completed='70'
            baseBgColor='#D2EDF6'
            bgColor='#2196F3'
            labelAlignment='center'
            labelSize='18px'
            borderRadius='8px'
            height='60px'
            isLabelVisible={false}
          />
          <p className={`${style.progressBar_cost} ${style.textWhite}`}>
            {'$ ' + numberFormat.format(cognniCost.amount)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CostStats;

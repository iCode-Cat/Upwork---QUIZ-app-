import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const CostStats = ({ style, data }) => {
  return (
    <section className={style.tabMenu_content}>
      <p
        className={style.tabMenu_title}
        dangerouslySetInnerHTML={{ __html: data.mainTitle }}
      />
      <div className={style.tabMenu_progressContainer}>
        <ProgressBar
          completed='80'
          width='344px'
          baseBgColor='hsla(187, 10%, 84%, 0.301)'
          bgColor='hsla(0, 0%, 61%, 0.200)'
          labelAlignment='center'
          labelSize='18px'
          borderRadius='8px'
          height='40px'
          isLabelVisible={false}
        />

        <ProgressBar
          completed='80'
          width='344px'
          baseBgColor='#D2EDF6'
          bgColor='#2196F3'
          labelAlignment='center'
          labelSize='18px'
          borderRadius='8px'
          height='60px'
          isLabelVisible={false}
        />
      </div>
    </section>
  );
};

export default CostStats;

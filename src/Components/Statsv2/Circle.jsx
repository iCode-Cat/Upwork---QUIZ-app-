import React from 'react';
import numeral from 'numeral';
import Chart from '../Chart';

const Circle = ({ savings, currency, toggle, subTitle, tab }) => {
  return (
    <div className='circle-wrapper'>
      <Chart tab={tab} nums={[1, 3, 4, 5]} />
      <div className='circle-savings'>
        <p className='circle-savings-amount'>
          {currency + ' ' + numeral(savings).format('0.0a')}
        </p>
        <p className='circle-savings-title'>{subTitle}</p>
      </div>
    </div>
  );
};

export default Circle;

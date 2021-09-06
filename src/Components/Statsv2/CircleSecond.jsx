import React from 'react';
import numeral from 'numeral';

const CircleSecond = ({ savings, currency, toggle }) => {
  return (
    <div className='circle-wrapper'>
      <div className='circle-savings'>
        <p className='circle-savings-amount'>
          {currency + ' ' + numeral(savings).format('0a')}
        </p>
        <p className='circle-savings-title'>Savings</p>
      </div>
      <svg
        style={{
          transition: '1s',
          transform: `${toggle === 0 ? 'rotate(-90deg)' : 'rotate( 0deg)'}`,
          opacity: `${toggle === 0 ? '0' : '1'}`,
        }}
        width='238'
        height='238'
        viewBox='0 0 238 238'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M224.852 156C233.366 131.315 233.028 104.429 223.897 79.9668C214.765 55.5046 197.41 34.9959 174.817 21.9689C152.225 8.94186 125.807 4.21107 100.11 8.59037C85.785 11.0316 72.183 16.2187 60.0005 23.7578'
          stroke='#00B746'
          stroke-width='14'
          stroke-linecap='round'
        />
        <path
          d='M40.0005 40C24.2435 55.6944 13.5128 75.6904 9.16544 97.4592C6.54938 110.559 6.31551 123.946 8.40236 137'
          stroke='#2196F3'
          stroke-width='14'
          stroke-linecap='round'
        />
        <path
          d='M213 180C205.72 191.249 196.449 201.17 185.562 209.231C172.261 219.078 157.032 225.792 141 229'
          stroke='#565656'
          stroke-width='14'
          stroke-linecap='round'
        />
        <path
          d='M15.0005 162C23.4926 182.442 37.8735 199.913 56.3245 212.206C73.7602 223.822 94.0905 230.32 115 231'
          stroke='#FFC300'
          stroke-width='14'
          stroke-linecap='round'
        />
      </svg>
    </div>
  );
};

export default CircleSecond;

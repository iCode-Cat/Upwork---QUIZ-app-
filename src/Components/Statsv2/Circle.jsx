import React from 'react';
import numeral from 'numeral';

const Circle = ({ savings, currency, toggle, subTitle }) => {
  return (
    <div className='circle-wrapper'>
      <div className='circle-savings'>
        <p className='circle-savings-amount'>
          {currency + ' ' + numeral(savings).format('0.0a')}
        </p>
        <p className='circle-savings-title'>{subTitle}</p>
      </div>
      {/* <svg
        style={{
          transition: '1s',
          transform: `${toggle === 1 ? 'rotate(90deg)' : 'rotate( 0deg)'}`,
          opacity: `${toggle === 1 ? '0' : '1'}`,
        }}
        className='circle-svg'
        width='238'
        height='238'
        viewBox='0 0 238 238'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='Rectangle'>
          <path
            id='Ellipse 15'
            d='M156 13.1485C131.315 4.63417 104.429 4.97203 79.9668 14.104C55.5046 23.2359 34.9959 40.5909 21.9689 63.1834C8.94185 85.7758 4.21106 112.193 8.59035 137.89C11.0316 152.215 16.2187 165.817 23.7578 178'
            stroke='#2196F3'
            stroke-width='14'
            stroke-linecap='round'
          />
          <path
            id='Ellipse 13'
            d='M40 198C55.6944 213.757 75.6904 224.488 97.4592 228.835C110.559 231.451 123.946 231.685 137 229.598'
            stroke='#00B746'
            stroke-width='14'
            stroke-linecap='round'
          />
          <path
            id='Ellipse-14'
            d='M180 25C191.249 32.2801 201.17 41.5517 209.231 52.4385C219.078 65.7393 225.792 80.9682 229 97'
            stroke='#FFC300'
            stroke-width='14'
            stroke-linecap='round'
          />
          <path
            id='Ellipse-16'
            d='M162 223C182.442 214.508 199.913 200.127 212.206 181.676C223.822 164.24 230.32 143.91 231 123'
            stroke='#565656'
            stroke-width='14'
            stroke-linecap='round'
          />
        </g>
      </svg> */}
      <svg
        width='238'
        height='238'
        viewBox='0 0 238 238'
        fill='none'
        className='circle-svg'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M156 13.1485C131.315 4.63417 104.429 4.97203 79.9668 14.104C55.5046 23.2359 34.9959 40.5909 21.9689 63.1834C8.94185 85.7758 4.21106 112.193 8.59035 137.89C11.0316 152.215 16.2187 165.817 23.7578 178'
          stroke='#2196F3'
          stroke-width='14'
          stroke-linecap='round'
        />
        <path
          d='M40 198C55.6944 213.757 75.6904 224.488 97.4592 228.835C110.559 231.451 123.946 231.685 137 229.598'
          stroke='#565656'
          stroke-width='14'
          stroke-linecap='round'
        />
        <path
          d='M180 25C191.249 32.2801 201.17 41.5517 209.231 52.4385C219.078 65.7393 225.792 80.9682 229 97'
          stroke='#FFC300'
          stroke-width='14'
          stroke-linecap='round'
        />
        <path
          d='M137.5 229.5C164.5 225.5 192.909 210.444 212.206 181.676C225.61 161.694 230.32 143.91 231 123'
          stroke='#565656'
          stroke-width='14'
          stroke-linecap='round'
        />
      </svg>
    </div>
  );
};

export default Circle;

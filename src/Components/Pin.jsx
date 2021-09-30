import React from 'react';

const Pin = () => {
  return (
    <svg
      className='stats-pin'
      width='16'
      height='80'
      viewBox='0 0 16 80'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className='svg-rope-pin'
        d='M8 0L8 50'
        stroke='black'
        stroke-dasharray='3 3'
      />
      <circle
        className='svg-rope-circle'
        cx='8'
        cy='108'
        r='7.5'
        fill='#00B746'
        stroke='black'
      />
    </svg>
  );
};

export default Pin;

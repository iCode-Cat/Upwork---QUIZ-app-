import React from 'react';

const Pin = ({ arrow }) => {
  return (
    <svg
      className='stats-pin'
      width='16'
      height='116'
      viewBox='0 0 16 116'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className='svg-rope-pin'
        d='M8 0L8 50'
        stroke='black'
        stroke-dasharray='3 3'
      />
      {arrow ? (
        <path
          className='svg-rope-arrow'
          d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
          fill='#2196F3'
          stroke='#565656'
        />
      ) : (
        <circle
          className='svg-rope-circle'
          cx='8'
          cy='108'
          r='7.5'
          fill='#00B746'
          stroke='black'
        />
      )}
    </svg>
  );
};

export default Pin;

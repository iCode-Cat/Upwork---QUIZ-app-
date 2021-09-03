import React, { useEffect } from 'react';

const RopeMob = ({ referance, color, marginTop }) => {
  const height = referance.current.clientHeight;

  return (
    <svg
      className='svg-animation-mob'
      width='2'
      height={marginTop ? height - marginTop : height}
      viewBox={`0 0 2 ${marginTop ? height - marginTop : height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d={`M1 0V${marginTop ? height - marginTop : height}`}
        stroke='#565656'
        stroke-dasharray='3 3'
      />
      <path
        id='arrow1'
        d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
        fill={color}
        stroke='#565656'
      />
      <path
        id='arrow2'
        className='arrow2'
        d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
        fill={color}
        stroke='#565656'
      />
    </svg>
  );
};

export default RopeMob;

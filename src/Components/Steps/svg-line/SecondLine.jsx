import React from 'react';
import DelayedComponents from '../../../Handlers/DelayedComponents';

const Secondline = ({ DOM, step }) => {
  // 56 pixels of corner SVG
  let dynamicHeight = DOM.current.clientHeight;

  return (
    <div id='svg-container-2'>
      <svg
        className='firstline'
        width='2'
        height={dynamicHeight}
        viewBox={`0 0 2 ${dynamicHeight}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          id='rope1'
          d={`M1 0V${step === 2 ? dynamicHeight / 2 : dynamicHeight - 56}`}
          stroke='black'
          strokeDasharray='3 3'
        />
        <path
          className='arrow1'
          d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
          fill='#4CAF50'
          stroke='black'
        />
        <path
          className='arrow2'
          d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
          fill='#4CAF50'
          stroke='black'
        />
        {step > 2 && (
          <DelayedComponents delay={500}>
            <path
              className='rightBottomCorner'
              d='M58 -2.53526e-06L58 45C58 56.0457 49.0457 65 38 65L29 65L2.84124e-06 65'
              stroke='black'
              stroke-dasharray='3 3'
            />
          </DelayedComponents>
        )}
      </svg>
      {step > 2 && (
        <>
          <DelayedComponents delay={700}>
            <svg
              width='389'
              className='bottomHrShort'
              height='2'
              viewBox='0 0 389 2'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 1H389.5' stroke='black' stroke-dasharray='3 3' />
            </svg>
          </DelayedComponents>
          <DelayedComponents delay={800}>
            <svg
              className='rightCorner'
              width='50'
              height='71'
              viewBox='0 0 50 71'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M49 70.5L49 21C49 9.95431 40.0457 1 29 1L0.5 1'
                stroke='black'
                stroke-dasharray='3 3'
              />
            </svg>
          </DelayedComponents>
          <DelayedComponents delay={900}>
            <svg
              className='bottomCornerEnd'
              width='80'
              height='42'
              viewBox='0 0 60 42'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M40 0.999999L21 1.00001C9.95429 1.00002 1 9.95433 1 21L1 21.5L1 42'
                stroke='black'
                stroke-dasharray='3 3'
              />
              <path
                id='blueArrow'
                d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
                fill='#2196F3'
                stroke='black'
              />
            </svg>
          </DelayedComponents>
        </>
      )}
    </div>
  );
};

export default Secondline;

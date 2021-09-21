import React from 'react';
import DelayedComponents from '../../../Handlers/DelayedComponents';

const ThirdLine = ({ DOM, step }) => {
  // 56 pixels of corner SVG
  let dynamicHeight = DOM.current.clientHeight;

  return (
    <div id='svg-container-3'>
      <svg
        className='leftCornerFirst'
        width='46'
        height='41'
        viewBox='0 0 46 41'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M45.5 0.5L21 0.500017C9.9543 0.500024 1 9.45433 1 20.5L1 20.75L1 41'
          stroke='black'
          stroke-dasharray='3 3'
        />
      </svg>

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
          d={`M1 0V${step === 1 ? dynamicHeight / 2 : dynamicHeight - 56}`}
          stroke='black'
          strokeDasharray='3 3'
        />
        <path
          className='arrow1'
          d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
          fill='
hsla(207, 90%, 54%, 1)'
          stroke='black'
        />
        <path
          className='arrow2'
          d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
          fill='
hsla(207, 90%, 54%, 1)'
          stroke='black'
        />
        {step > 1 && (
          <DelayedComponents delay={500}>
            <path
              className='leftCorner'
              d='M1 0L1 36C1 47.0457 9.95431 56 21 56L57 56'
              stroke='black'
              strokeDasharray='3 3'
            />
          </DelayedComponents>
        )}
      </svg>
      {step > 1 && (
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
          <DelayedComponents delay={900}>
            <svg
              className='rightCorner'
              width='100'
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

              <circle
                id='pin-head'
                cx='8'
                cy='8'
                r='7.5'
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

export default ThirdLine;

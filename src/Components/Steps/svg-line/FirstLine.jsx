import React from 'react';
import DelayedComponents from '../../../Handlers/DelayedComponents';

const FirstLine = ({ DOM, step }) => {
  // 56 pixels of corner SVG
  let dynamicHeight = DOM.current.clientHeight;

  return (
    <div id='svg-container'>
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
          fill='#FFC300'
          stroke='black'
        />
        <path
          className='arrow2'
          d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
          fill='#FFC300'
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
      <svg
        className='bottomHr'
        width='867'
        height='2'
        viewBox='0 0 867 2'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M0 1H866.5' stroke='black' strokeDasharray='3 3' />
      </svg>
    </div>
  );
};

export default FirstLine;

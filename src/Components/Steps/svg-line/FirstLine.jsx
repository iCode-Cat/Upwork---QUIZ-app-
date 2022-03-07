import React from 'react';
import DelayedComponents from '../../../Handlers/DelayedComponents';

const FirstLine = ({ DOM, step, numberOfSteps }) => {
  // 56 pixels of corner SVG
  let dynamicHeight = DOM.current.clientHeight;

  return (
    <div id='svg-container-1'>
      <svg
        className='firstline'
        width='2'
        height={dynamicHeight}
        viewBox={`0 0 2 ${dynamicHeight}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {/* If not single flow should be dynamicHeight / 2  instead 220 */}
        <path
          id='rope1'
          d={`M1 0V${step === 1 ? 220 : dynamicHeight - 56}`}
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
      {step > 1 && numberOfSteps !== 1 && (
        <>
          <DelayedComponents delay={700}>
            <svg
              width='467'
              className='bottomHr'
              height='2'
              viewBox='0 0 467 2'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 1H866.5' stroke='black' stroke-dasharray='3 3' />
            </svg>
          </DelayedComponents>
          <DelayedComponents delay={900}>
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
              <path
                className='step1Arrow'
                d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
                fill='#2196F3'
                stroke='#565656'
              />
            </svg>
          </DelayedComponents>
        </>
      )}
      {step > 1 && numberOfSteps === 1 && (
        <>
          <DelayedComponents delay={700}>
            <svg
              width='467'
              className='bottomHr'
              height='2'
              viewBox='0 0 467 2'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 1H866.5' stroke='black' stroke-dasharray='3 3' />
            </svg>
          </DelayedComponents>
          <DelayedComponents delay={900}>
            <svg
              className='rightCorner step1Rope'
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
              <path
                className='step1Arrow'
                d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
                fill='#2196F3'
                stroke='#565656'
              />
            </svg>
          </DelayedComponents>
        </>
      )}
    </div>
  );
};

export default FirstLine;

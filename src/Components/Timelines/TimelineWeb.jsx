import React from 'react';
import './svgAnimation.scss';
import { useSelector } from 'react-redux';

// position: absolute;
// justify-self: flex-start;
const TimelineWeb = () => {
  const userState = useSelector((state) => state.quiz.userState);
  const { step } = userState;

  const ropeOneHeight = 650;

  return (
    <div className='svg-animation'>
      {step >= 1 && (
        <>
          <svg
            width='2'
            height={ropeOneHeight}
            viewBox='0 0 2 285'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              id='rope1'
              d={step >= 2 ? `M1 0V${ropeOneHeight}` : 'M1 0V285'}
              stroke='black'
              stroke-dasharray='3 3'
            />
          </svg>
          <svg
            className='yellow-arrows'
            width='16'
            height='14'
            viewBox='0 0 16 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              id='yellow1'
              d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
              fill='#FFC300'
              stroke='black'
            />
            <path
              id='yellow2'
              d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
              fill='#FFC300'
              stroke='black'
            />
          </svg>
          {step >= 2 && (
            <>
              <svg
                className='leftCorner1'
                width='57'
                height='57'
                viewBox='0 0 57 57'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  id='Vector 15'
                  d='M1 0L1 36C1 47.0457 9.95431 56 21 56L57 56'
                  stroke='black'
                  stroke-dasharray='3 3'
                />
              </svg>
              <svg
                className='horizantal1'
                width='867'
                height='2'
                viewBox='0 0 867 2'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 1H866.5' stroke='black' stroke-dasharray='3 3' />
              </svg>
              <svg
                className='rightCorner1'
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
              <svg
                className='green-arrows'
                width='16'
                height='14'
                viewBox='0 0 16 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  id='green1'
                  d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
                  fill='#4CAF50'
                  stroke='black'
                />
                <path
                  id='green2'
                  d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
                  fill='#4CAF50'
                  stroke='black'
                />
              </svg>
              <svg
                className='rightRope'
                width='2'
                height='186'
                viewBox='0 0 2 186'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 0L1.00001 186'
                  stroke='black'
                  stroke-dasharray='3 3'
                />
              </svg>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TimelineWeb;

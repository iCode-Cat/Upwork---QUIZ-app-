import React from 'react';
import './svgAnimation.scss';
import { useSelector } from 'react-redux';

// position: absolute;
// justify-self: flex-start;
const TimelineWeb = () => {
  const state = useSelector((state) => state.quiz);
  const { step } = state.userState;
  const {numberOfSteps} = state.defaultJson

  const ropeOneHeight = 710;

  return (
    <div className='svg-animation-web'>
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
              {
                /* LEVEL 3 */
                step >= 3 && (
                  <>
                    <svg
                      className='rightRope2 rightRope'
                      width='2'
                      height='300'
                      viewBox='0 0 2 286'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1 0L1.00001 300'
                        stroke='black'
                        stroke-dasharray='3 3'
                      />
                    </svg>
                    <svg
                      className='rightCornerBottom'
                      width='59'
                      height='66'
                      viewBox='0 0 59 66'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M58 -2.53526e-06L58 45C58 56.0457 49.0457 65 38 65L29 65L2.84124e-06 65'
                        stroke='black'
                        stroke-dasharray='3 3'
                      />
                    </svg>
                    <svg
                      className='bottomRope2'
                      width='389'
                      height='2'
                      viewBox='0 0 389 2'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0 1L389 0.999966'
                        stroke='black'
                        stroke-dasharray='3 3'
                      />
                    </svg>
                    <svg
                      className='rightCorner2'
                      width='40'
                      height='42'
                      viewBox='0 0 40 42'
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
                  </>
                )
              }
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TimelineWeb;

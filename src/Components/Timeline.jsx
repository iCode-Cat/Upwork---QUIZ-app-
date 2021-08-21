import React from 'react';

const Timeline = ({ form, step1, step2, step3, style }) => {
  return (
    <>
      {/* STEP 1 */}
      {form.step === 1 && step1.current !== undefined && (
        <svg
          className={style.rope}
          width='972'
          height='888'
          viewBox='0 0 972 888'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            className={style.dashedRope}
            d={`M1 0V${285}`}
            stroke='black'
            stroke-dasharray='3 3'
          />
          <path
            className={style.arrowOneYellow}
            d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
            fill='#FFC300'
            stroke='black'
          />
          <path
            className={style.arrowTwoYellow}
            d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
            fill='#FFC300'
            stroke='black'
          />
        </svg>
      )}
      {/* STEP 2 */}
      {form.step === 2 && step2.current !== undefined && (
        <svg
          className={style.rope}
          width='972'
          height='1488'
          viewBox='0 0 972 1488'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 0V520C1 531.046 9.95431 540 21 540H951C962.046 540 971 548.954 971 560V888'
            stroke='black'
            stroke-dasharray='3 3'
          />
          <path
            style={{ transform: `translate(-6.9px, ${265}px)` }}
            d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
            fill='#FFC300'
            stroke='black'
          />
          <path
            style={{ transform: `translate(-6.9px, ${285}px)` }}
            d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
            fill='#FFC300'
            stroke='black'
          />
          <path
            style={{ transform: `translate(99.1%, ${865}px)` }}
            d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
            fill='#4CAF50'
            stroke='black'
          />

          <path
            style={{ transform: `translate(99.1%, ${885}px)` }}
            d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
            fill='#4CAF50'
            stroke='black'
          />
        </svg>
      )}
      {form.step >= 3 && (
        <svg
          className={style.rope}
          width='972'
          height='1488'
          viewBox='0 0 972 1488'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 0V520C1 531.046 9.95431 540 21 540H951C962.046 540 971 548.954 971 560V1189C971 1200.05 962.046 1209 951 1209H21C9.95431 1209 1 1217.95 1 1229V1487.5'
            stroke='black'
            stroke-dasharray='3 3'
          />
          <path
            style={{ transform: `translate(-6.9px, ${265}px)` }}
            d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
            fill='#FFC300'
            stroke='black'
          />
          <path
            style={{ transform: `translate(-6.9px, ${285}px)` }}
            d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
            fill='#FFC300'
            stroke='black'
          />
          <path
            style={{ transform: `translate(99.1%, ${865}px)` }}
            d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
            fill='#4CAF50'
            stroke='black'
          />

          <path
            style={{ transform: `translate(99.1%, ${885}px)` }}
            d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
            fill='#4CAF50'
            stroke='black'
          />
          <path
            style={{ transform: `translate(-6.9px, ${1454}px)` }}
            d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
            fill='#2196F3'
            stroke='black'
          />
          <path
            style={{ transform: `translate(-6.9px, ${1474}px)` }}
            d='M14.9282 1L8 13L1.0718 1L14.9282 1Z'
            fill='#2196F3'
            stroke='black'
          />
        </svg>
      )}
    </>
  );
};

export default Timeline;

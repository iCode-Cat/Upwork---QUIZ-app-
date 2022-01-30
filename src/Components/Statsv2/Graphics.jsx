import React, { useRef } from 'react';
import styled from 'styled-components';
import Circle from './Circle';
// import CircleSecond from './CircleSecond';
import Labels from './Labels';
import Title from './Title';

const SubTitle = styled.p`
  /* margin-bottom: 4rem; */
  text-align: center;
  font-size: 2rem;
  color: #34314c;

  @media (max-width: 50em) {
    margin-bottom: unset;
    font-size: 1.5rem;
    max-width: 243px;
  }
`;

const Graphics = ({
  mainTitle,
  toggle,
  stats,
  currency,
  tooltip,
  subTitle,
  subtitleSecond,
}) => {
  const parent = useRef();
  return stats.map((item, index) => (
    <div
      key={index}
      ref={parent}
      style={{
        position: index !== 0 && 'absolute',
        width: '100%',
        // background: '#FFF',
        transition: ' opacity 0.6s',
        opacity: `${toggle === index ? '1' : '0'}`,
        zIndex: `${toggle === index ? '1' : '0'}`,
      }}
    >
      <Title mainTitle={mainTitle} />
      <SubTitle>{subtitleSecond}</SubTitle>
      <div className='breakdown-wrapper'>
        {index === 0 ? (
          <Circle
            currency={currency}
            savings={item.savings}
            subTitle={subTitle}
            tab={0}
          />
        ) : (
          <Circle
            currency={currency}
            savings={item.savings}
            subTitle={subTitle}
            type={toggle}
            tab={1}
          />
        )}

        <Labels tooltip={tooltip} currency={currency} items={item} />
      </div>
    </div>
  ));
};

export default Graphics;

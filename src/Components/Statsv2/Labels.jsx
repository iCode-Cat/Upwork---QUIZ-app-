import React, { useState, useEffect } from 'react';
import info from '../../Images/info.svg';
import styled from 'styled-components';
import Tooltip from './Tooltip';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 0fr);
  justify-items: flex-start;
  justify-content: flex-start;
  align-items: center;
  gap: 0rem 0rem;
  @media (max-width: 70em) {
    max-width: 375px;
    margin: 3rem auto 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    grid-template-columns: 1fr 1fr;
    padding: 0 1rem;
  }
`;
const Label = styled.div`
  flex: 1 0;
  width: 310px;
  display: grid;
  justify-content: flex-start;
  grid-template-columns: repeat(2, auto);
  gap: 0.8rem 2.4rem;
  @media (max-width: 70em) {
    width: unset;
    gap: 0.1rem 0.7rem;
  }
`;

const AmountWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 0fr 0fr;
  align-items: center;
  gap: 0.65rem;
  img {
    cursor: pointer;
    margin-bottom: 0.3rem;
  }
  @media (max-width: 50em) {
    position: unset;
  }
`;

const Amount = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 28px;
  color: var(--main);
  @media (max-width: 70em) {
    font-size: 1.8rem;
  }
`;

const Dot = styled.div`
  width: 24px;
  height: 24px;
  background: ${(props) => props.color};
  border-radius: 50px;
  gap: 0.8rem 2.4rem;
  @media (max-width: 70em) {
    width: 18px;
    height: 18px;
    margin-top: 0.5rem;
  }
`;

const Title = styled.p`
  grid-column: 2/3;
  font-size: 1.4rem;
`;

const Labels = ({ items, currency, tooltip }) => {
  const [order, setOrder] = useState();

  useEffect(() => {
    window.addEventListener('click', (e) => {
      const targetClass = e.target.className;
      console.log(targetClass);
      switch (targetClass) {
        case 'tooltip-icon':
        case 'sc-iemWCZ eAWAyE':
        case 'sc-dIvrsQ gFBPFI':
        case 'sc-bkbkJK kkvDZu':
        case 'circle-savings-amount':
        case undefined:
          break;
        default:
          setOrder();
      }
    });
  }, []);

  const numberFormat = new Intl.NumberFormat('en-US');
  return (
    <Wrapper className='labels-wrap'>
      {items.items &&
        items.items.map((label, index) => (
          <Label>
            <Dot color={label.color} />
            <AmountWrapper className='label-amount'>
              <Amount>{currency + numberFormat.format(label.result)}</Amount>
              {tooltip && (
                <img
                  className='tooltip-icon'
                  onMouseLeave={() => setOrder()}
                  onMouseEnter={() => setOrder(index)}
                  onClick={() => setOrder(index)}
                  src={info}
                  alt='info-icon'
                />
              )}
              <Tooltip
                data={label.tooltipText}
                isVisible={order === index && true}
              />
            </AmountWrapper>
            <Title>{label.name}</Title>
          </Label>
        ))}
    </Wrapper>
  );
};

export default Labels;

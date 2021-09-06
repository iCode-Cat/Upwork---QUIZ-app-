import React, { useState } from 'react';
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
`;
const Label = styled.div`
  width: 310px;
  display: grid;
  justify-content: flex-start;
  grid-template-columns: repeat(2, auto);
  gap: 0.8rem 2.4rem;
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
`;

const Amount = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 28px;
  color: var(--main);
`;

const Dot = styled.div`
  width: 24px;
  height: 24px;
  background: ${(props) => props.color};
  border-radius: 50px;
`;

const Title = styled.p`
  grid-column: 2/3;
`;

const Labels = ({ items, currency, tooltip }) => {
  console.log(items.items);
  const [order, setOrder] = useState();
  const numberFormat = new Intl.NumberFormat('en-US');
  return (
    <Wrapper>
      {items.items &&
        items.items.map((label, index) => (
          <Label>
            <Dot color={label.color} />
            <AmountWrapper className='label-amount'>
              <Amount>{currency + numberFormat.format(label.result)}</Amount>
              {tooltip && (
                <img
                  onMouseLeave={() => setOrder()}
                  onMouseEnter={() => setOrder(index)}
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

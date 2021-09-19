import React from 'react';
import styled from 'styled-components';
import redArrow from '../../Images/redArrow.svg';
import blueArrow from '../../Images/blueArrow.svg';

const Wrapper = styled.div`
  display: grid;
  margin-top: 5rem;
  .progress-wrapper {
    display: grid;
    gap: 2.8rem;
    margin: 3.5rem auto 0 auto;
    max-width: 700px;
    padding: 0 1rem;
  }
  @media (max-width: 50em) {
    margin-top: 1rem;
    .progress-wrapper {
      margin: 1rem auto 0 auto;
    }
  }
`;
const ProgressWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  @media (max-width: 50em) {
    grid-template-columns: auto;
    justify-content: center;
    justify-items: center;
  }
`;
const Title = styled.p`
  text-align: center;
  font-size: 3.2rem;
  font-weight: 700;
  max-width: 470px;
  margin: 0 auto;
  color: var(--black);
  @media (max-width: 50em) {
    font-size: 2.4rem;
    max-width: 300px;
  }
`;
const Label = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.6rem;
  font-weight: 400;
  margin-right: 1.5rem;
  /* margin-left: 1.1rem; */

  p {
    text-align: center;
    max-width: 140px;
  }

  justify-self: flex-end;
  @media (max-width: 50em) {
    display: flex;
    justify-content: center;
    font-size: 1.4rem;
    width: 400px;
    p {
      max-width: unset;
      margin-top: 0.5rem;
    }
  }
`;
const YourCost = styled.div`
  display: grid;
  align-items: center;
  width: 365px;
  height: 50px;
  background: #ffc3c34f;
  color: #ab101091;
  border-radius: 8px;
  padding: 0 3.65rem;
  font-size: 1.8rem;
  font-weight: 600;
  border: solid 2px #ab101020;
  @media (max-width: 50em) {
    width: 100%;
  }
`;
const OurCost = styled.div`
  overflow: hidden;
  display: grid;
  align-items: center;
  position: relative;
  width: 365px;
  height: 60px;
  background: #d2edf6;
  color: #fff;
  border-radius: 8px;
  font-size: 2.4rem;
  font-weight: 600;
  @media (max-width: 50em) {
    width: 100%;
    max-width: 300px;
    margin-bottom: 2rem;
  }
`;

const Bar = styled.div`
  position: absolute;
  display: grid;
  padding: 0 3.65rem;
  align-items: center;
  background: var(--green);
  width: 70%;
  left: 0;
  height: 100%;
  z-index: 0;
`;

const Compare = ({ stats, currency, toggle, compare }) => {
  const { cost, withFormulaCompare, withOutFormulaCompare } = stats[toggle];
  const { cognniCost, yourCost } = cost[0];
  const numberFormat = new Intl.NumberFormat('en-US');
  return (
    <Wrapper>
      <Title>{compare.mainTitle2}</Title>
      <div className='progress-wrapper'>
        {/* <ProgressWrapper>
          <Label>
            <img src={redArrow} alt='arrow' />
            <p>{yourCost.title}</p>
          </Label>
          <YourCost>
            {currency + ' ' + numberFormat.format(withOutFormulaCompare)}
          </YourCost>
        </ProgressWrapper> */}
        <ProgressWrapper>
          <Label>
            <img src={blueArrow} alt='arrow' />
            <p>{cognniCost.title}</p>
          </Label>
          <OurCost>
            <Bar>
              {currency + ' ' + numberFormat.format(withFormulaCompare)}
            </Bar>
          </OurCost>
        </ProgressWrapper>
      </div>
    </Wrapper>
  );
};

export default Compare;

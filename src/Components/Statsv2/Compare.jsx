import React from 'react';
import styled from 'styled-components';
import redArrow from '../../Images/redArrow.svg';
import blueArrow from '../../Images/blueArrow.svg';

const Wrapper = styled.div`
  ${'' /* background: red; */}
  display: grid;
  margin-top: 6.3rem;
  .progress-wrapper {
    display: grid;
    gap: 2.8rem;
    margin: 7.2rem auto 0 auto;
    max-width: 700px;
  }
`;
const ProgressWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;
const Title = styled.p`
  text-align: center;
  font-size: 3.2rem;
  font-weight: 700;
  color: var(--black);
`;
const Label = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 1.1rem;
  font-size: 1.6rem;
  font-weight: 400;
  margin-right: 3rem;
  margin-left: 1.1rem;
  justify-self: flex-end;
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
`;
const OurCost = styled.div`
  overflow: hidden;
  display: grid;
  align-items: center;
  position: relative;
  width: 365px;
  height: 70px;
  background: #d2edf6;
  color: #fff;
  border-radius: 8px;
  font-size: 2.4rem;
  font-weight: 600;
`;

const Bar = styled.div`
  position: absolute;
  display: grid;
  padding: 0 3.65rem;
  align-items: center;
  background: var(--blue);
  width: 70%;
  left: 0;
  height: 100%;
  z-index: 0;
`;

const Compare = () => {
  return (
    <Wrapper>
      <Title>
        Here's how much money you can <br /> save every year
      </Title>
      <div className='progress-wrapper'>
        <ProgressWrapper>
          <Label>
            <img src={redArrow} alt='arrow' />
            <p>Your Current Cost</p>
          </Label>
          <YourCost>$ 1,389,600</YourCost>
        </ProgressWrapper>
        <ProgressWrapper>
          <Label>
            <img src={blueArrow} alt='arrow' />
            <p>With Cognni</p>
          </Label>
          <OurCost>
            <Bar>$ 1,036,560</Bar>
          </OurCost>
        </ProgressWrapper>
      </div>
    </Wrapper>
  );
};

export default Compare;

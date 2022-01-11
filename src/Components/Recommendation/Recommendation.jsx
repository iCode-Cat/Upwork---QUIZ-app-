import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Card from './Card';
import Tab from './Tab';
import ShowButton from './ShowButton';
import Pin from '../Pin';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  /* padding: 0rem 0 0 0; */
  background: center bottom / 100% rgb(221, 242, 247);
  justify-content: center;
  padding: 1rem;
  gap: 3rem;
  @media (max-width: 50em) {
    grid-template-columns: auto;
  }
`;

const SvgWrapper = styled.div`
  grid-column: 1/3;
  @media (max-width: 50em) {
    grid-column: unset;
  }
`;

const TabWrapper = styled.div`
  grid-column: 1/3;
  display: grid;
  grid-auto-flow: column;
  justify-self: flex-start;
  gap: 1.6rem;
  cursor: pointer;
  @media (max-width: 50em) {
    grid-column: unset;
    justify-self: center;
  }
`;

const Recommendation = () => {
  const [tabindex, setTab] = useState(0);
  const [show, setShow] = useState(false);
  const recommendation = useSelector(
    (state) => state.quiz.defaultJson?.recommendation
  );

  const isActive = recommendation?.active;

  if (!isActive) return '';

  return !show ? (
    <ShowButton showButton={recommendation?.showButton} setShow={setShow} />
  ) : (
    <Wrapper>
      <SvgWrapper>
        <Pin arrow />
      </SvgWrapper>
      <TabWrapper>
        {recommendation.tabs.map((tab, index) => (
          <Tab
            key={index}
            {...tab}
            setTab={setTab}
            tab={tabindex}
            index={index}
          />
        ))}
      </TabWrapper>
      {recommendation.tabs[tabindex].cards.map((items, index) => (
        <Card key={index} {...items} />
      ))}
    </Wrapper>
  );
};

export default Recommendation;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Card from './Card';
import Tab from './Tab';
import ShowButton from './ShowButton';
import Pin from '../Pin';
import SaveCounter from './SaveCounter';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* padding: 0rem 0 0 0; */
  background: center bottom / 100% rgb(221, 242, 247);
  justify-content: center;

  /* gap: 3rem; */
  @media (max-width: 50em) {
    grid-template-columns: auto;
  }
`;

const Title = styled.p`
  margin: 0 auto;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 38px;
  text-align: center;
  margin: 0 0 4rem 0;
`;

const CardContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
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

const Recommendation = ({ show }) => {
  const [tabindex, setTab] = useState(0);

  const recommendation = useSelector(
    (state) => state.quiz.defaultJson?.recommendation
  );

  const dynamic = useSelector((state) => state.dynamic);

  const isActive = recommendation?.active;

  if (!isActive) return '';

  return !show ? (
    // <ShowButton showButton={recommendation?.showButton} setShow={setShow} />
    ''
  ) : (
    <Wrapper>
      {/* <SvgWrapper>
        <Pin arrow />
      </SvgWrapper> */}
      {/* <TabWrapper>
        {recommendation.tabs.map((tab, index) => (
          <Tab
            key={index}
            {...tab}
            setTab={setTab}
            tab={tabindex}
            index={index}
          />
        ))}
      </TabWrapper> */}
      <Title>Your Recommendations</Title>
      {/* <CardContainer>
        {recommendation.tabs[tabindex].cards.map((items, index) => (
          <Card key={index} {...items} />
        ))}
        <SaveCounter />
      </CardContainer> */}
      <CardContainer>
        {dynamic.recommendation.map((items, index) => (
          <Card key={index} {...items} />
        ))}
      </CardContainer>
      <SaveCounter />
    </Wrapper>
  );
};

export default Recommendation;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Card from './Card';
import Tab from './Tab';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding: 1rem 0 5rem 0;
  background: center bottom / 100% rgb(221, 242, 247);
  justify-content: center;
  justify-items: center;
  align-items: flex-start;
  gap: 3rem;
`;

const TabWrapper = styled.div`
  grid-column: 1/3;
  display: grid;
  grid-auto-flow: column;
  justify-self: flex-start;
  gap: 1.6rem;
  cursor: pointer;
`;

const Recommendation = () => {
  const [tabindex, setTab] = useState(0);
  const recommendation = useSelector(
    (state) => state.quiz.defaultJson.recommendation
  );
  return (
    <Wrapper>
      <TabWrapper>
        {recommendation.map((tab, index) => (
          <Tab
            key={index}
            {...tab}
            setTab={setTab}
            tab={tabindex}
            index={index}
          />
        ))}
      </TabWrapper>
      {recommendation[tabindex].cards.map((items, index) => (
        <Card key={index} {...items} />
      ))}
    </Wrapper>
  );
};

export default Recommendation;

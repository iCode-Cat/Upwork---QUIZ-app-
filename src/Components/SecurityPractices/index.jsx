import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Section from './Section';
import shortline from '../../Images/shortline.svg';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding-top: 10rem;
  margin-bottom: -10.5rem;
  gap: 0rem;
  background: rgb(221, 242, 247);
  @media (max-width: 50em) {
    padding-top: unset;
    margin-bottom: unset;
    padding-bottom: 2.4rem;
    gap: 2.4rem;
  }
`;

export const Svg = styled.img`
  @media (max-width: 50em) {
    display: none;
  }
`;

const SecurityPractices = () => {
  const data = useSelector(
    (state) => state.quiz.defaultJson.informationPractices
  );

  const list = useSelector((state) => state);
  const title = list.quiz.defaultJson.informationPractices.title;
  const subTitle = list.quiz.defaultJson.informationPractices.subtitle;

  if (!data.active) return '';

  return (
    <Wrapper>
      <Header
        title={title}
        companyName={list.quiz.userState?.companyName}
        subTitle={subTitle}
      />
      <Section {...data.section1} data={list.dynamic.worryAbout} />
      <Svg src={shortline} />
      <Section
        logoAlign={'right'}
        {...data.section2}
        data={list.dynamic.shouldDo}
      />
      <Svg src={shortline} />
    </Wrapper>
  );
};

export default SecurityPractices;

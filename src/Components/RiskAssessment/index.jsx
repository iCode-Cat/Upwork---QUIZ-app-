import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Logo from '../SecurityPractices/Logo';
import shortline from '../../Images/shortline.svg';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1120px;
  display: grid;
  overflow: hidden;
`;

const GeneralContainer = styled.div`
  width: 100%;
  position: relative;
  i {
    position: absolute;
    left: 0;
    top: 0;
    padding: 2rem;
    font-size: 3rem;
    opacity: 0.3;
  }
  padding: 6rem 9.1rem;
  background: #fff;

  overflow: hidden;
  margin: 10rem auto 0 auto;

  img {
    max-width: 636px;
  }

  @media (max-width: 50em) {
    padding: 3.2rem 1rem;
    gap: 4rem;
  }
`;

export const Svg = styled.img`
  justify-self: center;
  @media (max-width: 50em) {
    display: none;
  }
`;

const Blank = styled.div`
  background: #fff;
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0;
  z-index: 1;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 3.8rem;
  font-weight: 700;
  color: #34314c;
  text-align: center;

  @media (max-width: 50em) {
    margin-bottom: unset;
    margin-top: 2rem;
    font-size: 1.8rem;
    max-width: 243px;
  }
`;

const SubTitle = styled.p`
  margin-bottom: 4rem;
  text-align: center;
  font-size: 2rem;
  color: #34314c;

  @media (max-width: 50em) {
    margin-bottom: unset;
    font-size: 1.5rem;
    max-width: 243px;
  }
`;

const LabelWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 7rem;
`;
const LabelContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
`;
const LabelColor = styled.div`
  width: 24px;
  height: 24px;
  background: ${(props) => props.color};
  border-radius: 50%;
`;
const LabelName = styled.div``;
const LabelContent = styled.div`
  grid-column: 2/3;
`;
const LabelLink = styled.div`
  color: blue;
  cursor: pointer;
  grid-column: 2/3;
`;

// Inline Card

const InlineContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  place-items: center;
  gap: 10rem;
  /* margin-top: 6rem; */
  img {
    max-width: 200px;
  }
  @media (max-width: 50em) {
    /* padding: 4rem 3rem; */
    margin-top: 0rem;
    grid-template-columns: auto;
    gap: 4rem;
  }
`;

const ListTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #34314c;
  @media (max-width: 50em) {
    font-size: 1.6rem;
  }
`;
const ListContent = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #565656;
  @media (max-width: 50em) {
    font-size: 1.2rem;
  }
`;

const InCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

const Index = () => {
  const state = useSelector((state) => state.quiz.defaultJson.riskAssesment);
  const [inlineCard, setInlineCard] = useState(false);
  const [inCardObject, setInCardObject] = useState();
  if (!state.active) return '';

  return (
    <Wrapper>
      <GeneralContainer>
        <Blank className={inlineCard ? 'anim' : 'anim1'} />
        {inlineCard ? (
          <div>
            <i
              onClick={() => setInlineCard(false)}
              class='sc-fHeRUh bZQmLv fas fa-arrow-left anim-exit'
            ></i>
            <Text>{inCardObject.inCardTitle}</Text>
            <SubTitle onClick={() => setInlineCard(false)}>
              {inCardObject.inCardSubtitle}
            </SubTitle>
            <InlineContainer>
              <InCardContainer>
                <ListTitle>{inCardObject.mainCardTitle}</ListTitle>
                <ListContent>{inCardObject.mainCardContent}</ListContent>
              </InCardContainer>
              <Logo logoAlign={'right'} src={inCardObject.inCardLogo} />
            </InlineContainer>
          </div>
        ) : (
          <div>
            <Text>{state.title}</Text>
            <SubTitle>{state.subtitle}</SubTitle>
            <Container>
              <div>
                <img src='/riskAsessmentChart.svg' alt='' />
              </div>
              <LabelWrapper>
                {state.labels?.map((x) => (
                  <LabelContainer key={x._id}>
                    <LabelColor color={x.color}></LabelColor>
                    <LabelName>{x.title}</LabelName>
                    <LabelContent>{x.content}</LabelContent>
                    {x.inCard && (
                      <LabelLink
                        onClick={() => {
                          setInCardObject({
                            inCardTitle: x.inCardTitle,
                            inCardSubtitle: x.inCardSubtitle,
                            mainCardTitle: x.mainCardTitle,
                            mainCardContent: x.mainCardContent,
                            inCardLogo: x.inCardLogo,
                          });
                          setInlineCard(true);
                        }}
                      >
                        {x.linkTitle}
                      </LabelLink>
                    )}
                  </LabelContainer>
                ))}
              </LabelWrapper>
            </Container>
          </div>
        )}
      </GeneralContainer>
      <Svg src={shortline} />
      <Svg src={shortline} />
    </Wrapper>
  );
};

export default Index;

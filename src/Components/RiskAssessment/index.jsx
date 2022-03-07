import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Logo from '../SecurityPractices/Logo';
import shortline from '../../Images/shortline.svg';
import { Doughnut } from 'react-chartjs-2';
import ReactSpeedometer from 'react-d3-speedometer';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

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
  canvas {
    pointer-events: 'none';
  }
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
  justify-content: center;
  align-items: center;
  gap: 10rem;
  justify-items: center;
  margin-top: 0rem;
  width: 100%;
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

const ChartContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  text-align: center;
  canvas {
    pointer-events: none;
  }
  .chart-container {
    position: absolute;
  }
  .chart-score {
    font-size: 3.6rem;
    font-weight: 600;
    color: var(--main);
  }
  .chart-label {
    color: var(--main);
  }
`;

const InCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

const options = {
  plugins: {
    tooltip: {
      enabled: false,
    },
    hover: { mode: null },
    events: [],
  },
};

const Index = () => {
  const state = useSelector((state) => state.quiz.defaultJson.riskAssesment);
  const tags = useSelector((state) => state.quiz.tags);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const conditioned = state.labels.map((label) => {
      const conditionedTags = label.tagFound;
      if (conditionedTags.every((tag) => tags.includes(tag.name))) {
        return (50 * label.change) / 100;
      }
      return label.defaultValue;
    });
    setScores(conditioned);
  }, []);
  console.log(scores);
  // .reduce((a, b) => a + b, 0) / 100

  const data = {
    datasets: [
      {
        data: scores,
        backgroundColor: state.labels?.map((x) => x.color),
        borderWidth: 10,
        borderRadius: '1000',
        cutout: 112,
        rotation: -90,
        radius: '100%',
        showTooltips: false,
      },
    ],
  };

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
              <ChartContainer>
                {/* <div className='chart-container'>
                  <p className='chart-score'>
                    {scores.reduce((a, b) => a + b, 0).toFixed(1)}
                  </p>
                  <p className='chart-label'>Risk Score</p>
                </div> */}
                <ReactSpeedometer
                  value={650.5}
                  // currentValueText='Happiness Level'
                  customSegmentLabels={[
                    {
                      text: 'Worst',
                      position: 'INSIDE',
                      color: '#555',
                    },
                    {
                      text: 'Bad',
                      position: 'INSIDE',
                      color: '#555',
                    },
                    {
                      text: 'Ok',
                      position: 'INSIDE',
                      color: '#555',
                      fontSize: '19px',
                    },
                    {
                      text: 'Good',
                      position: 'INSIDE',
                      color: '#555',
                    },
                    {
                      text: 'Great',
                      position: 'INSIDE',
                      color: '#555',
                    },
                  ]}
                />
                {/* <Doughnut data={data} options={options} /> */}
                {/* /* <img src='/riskAsessmentChart.svg' alt='' /> */}
              </ChartContainer>
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

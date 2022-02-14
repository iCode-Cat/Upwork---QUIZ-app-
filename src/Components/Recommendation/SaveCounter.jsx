import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import Tooltip from '../Statsv2/Tooltip';
import numeral from 'numeral';
import info from '../../Images/info.svg';
import BarToolTip from './BarToolTip';
import Logo from '../SecurityPractices/Logo';

const Wrapper = styled.div`
  display: grid;
  background: #fff;
  position: relative;
  max-width: 1120px;
  justify-items: center;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-top: 8rem;
  padding: 3rem 1.2rem;
  overflow: hidden;

  .back-icon {
    position: absolute;
    left: 0;
    top: 0;
    padding: 2rem;
    font-size: 3rem;
    opacity: 0.3;
  }

  .bar-link {
    color: blue;
    cursor: pointer;
  }
  #costs-percetage {
    font-weight: 700;
    font-size: 3rem;
    margin-top: 1rem;
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

const Title = styled.p`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 29px;
  color: rgba(52, 49, 76, 1);
`;

const Subtitle = styled.p`
  font-size: 2rem;
  font-weight: 400;
  line-height: 29px;
  color: #34314c;
  margin-top: 1rem;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 754px;
  justify-content: space-between;
  background: red;
  margin-top: 3.2rem;
  border-radius: 8px;
  background: rgba(76, 175, 80, 1);
  /* overflow: hidden;
  padding: 0.3rem; */
  position: relative;
  .icon-left {
    right: 0;
    position: absolute;
    cursor: pointer;
    margin: 0.7rem;
    z-index: 999;
  }
  .icon-right {
    left: 0;
    position: absolute;
    cursor: pointer;
    margin: 0.7rem;
    z-index: 999;
  }
  .right-tool {
    left: 0;
  }
  img {
    position: absolute;
    cursor: pointer;
    margin: 0.2rem;
    z-index: 999;
  }
`;
const LeftCounter = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  flex-grow: 1;
  color: rgba(255, 255, 255, 1);
  padding: 2.1rem 1rem;
  border-radius: 8px;
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: 0em;
`;
const RightCounter = styled.div`
  display: grid;
  place-items: center;
  background: rgba(219, 245, 229, 1);
  flex-grow: 1;
  padding: 2.1rem 1rem;
  overflow: hidden;
  border-radius: 8px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  max-width: 374px;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 19px;

  p {
    max-width: 248px;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 5rem 0;
`;

const Blank = styled.div`
  background: #fff;
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0;
  z-index: 1;
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

const Cards = styled.div``;
const Card = styled.div``;

function relDiff(a, b) {
  return Math.round(100 * Math.abs((a - b) / ((a + b) / 2)));
}

const SaveCounter = () => {
  const state = useSelector((state) => state);
  const result = state.quiz.userState.results[0].withFormulaCompare;
  const resultCost = state.quiz.userState.results[0].withOutFormulaCompare;
  const recommendation = state.quiz.defaultJson.recommendation;
  useMemo(() => {
    console.log(recommendation);
  }, []);

  const [leftTip, setLeftTip] = useState(false);
  const [RightTip, setRightTip] = useState(false);
  const [inlineCard, setInlineCard] = useState(false);
  const [inCardObject, setInCardObject] = useState();
  console.log(inCardObject);
  return (
    <Wrapper>
      <Blank className={inlineCard ? 'anim' : 'anim1'} />
      {inlineCard ? (
        <div>
          <i
            onClick={() => setInlineCard(false)}
            class='back-icon sc-fHeRUh bZQmLv fas fa-arrow-left anim-exit'
          ></i>
          <Text>{inCardObject.title}</Text>
          <SubTitle onClick={() => setInlineCard(false)}>
            {inCardObject.subtitle}
          </SubTitle>
          <InlineContainer>
            <InCardContainer>
              <ListTitle>{inCardObject.contentTitle}</ListTitle>
              <ListContent>{inCardObject.contentDetails}</ListContent>
            </InCardContainer>
            <Logo logoAlign={'right'} src={inCardObject.contentImage} />
          </InlineContainer>
        </div>
      ) : (
        <div>
          <Title>{recommendation.barTitle}</Title>
          <Subtitle>{recommendation.barSubtitle}</Subtitle>
          <CardContainer>
            {/* <Tooltip isVisible={true} data={{ title: 'jiji', content: 'hello' }} /> */}
            <Cards>
              {recommendation?.barCard?.map((x) => (
                <Card key={x._key}>
                  <p>{x.title}</p>
                  <p>{x.subtitle}</p>
                  <p
                    onClick={() => {
                      setInlineCard(true);
                      setInCardObject(x);
                    }}
                    className='bar-link'
                  >
                    {x.link}
                  </p>
                </Card>
              ))}
            </Cards>
            <img src='/securityImage1.svg' alt='' />
          </CardContainer>

          <Container>
            <i
              onMouseEnter={() => setRightTip(true)}
              onMouseLeave={() => setRightTip(false)}
              className='fas fa-info-circle tooltip-icon  icon-right'
            >
              <BarToolTip
                className='right-tool'
                isVisible={RightTip}
                data={{
                  title: 'TITLE',
                  content:
                    '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus autem eius laudantium sint sequi! Quo fuga molestias temporibus! Corporis expedita qui, id sint temporibus cumque ex quas magni impedit!',
                }}
              />
            </i>

            <i
              onMouseEnter={() => setLeftTip(true)}
              onMouseLeave={() => setLeftTip(false)}
              className='tooltip-icon icon-left'
              class='fas fa-info-circle icon-left'
            >
              <BarToolTip
                className='left-tool'
                isVisible={leftTip}
                data={{
                  title: 'TITLE',
                  content:
                    '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus autem eius laudantium sint sequi! Quo fuga molestias temporibus! Corporis expedita qui, id sint temporibus cumque ex quas magni impedit!',
                }}
              />
            </i>

            <RightCounter
              dangerouslySetInnerHTML={{
                __html: recommendation.barLeft.replace(
                  '{percentage}',
                  `<span id="costs-percetage">${relDiff(
                    resultCost,
                    result
                  )}%</span>`
                ),
              }}
            />

            <LeftCounter>
              {recommendation?.barRight?.replace(
                '{savings}',
                '$' + numeral(result).format('0.0a')
              )}
            </LeftCounter>
          </Container>
        </div>
      )}
    </Wrapper>
  );
};

export default SaveCounter;

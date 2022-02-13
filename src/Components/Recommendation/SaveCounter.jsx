import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Tooltip from '../Statsv2/Tooltip';
import numeral from 'numeral';
import info from '../../Images/info.svg';
import BarToolTip from './BarToolTip';

const Wrapper = styled.div`
  display: grid;
  background: #fff;
  max-width: 1120px;
  justify-items: center;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-top: 8rem;
  padding: 3rem 1.2rem;

  #costs-percetage {
    font-weight: 700;
    font-size: 3rem;
    margin-top: 1rem;
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
    margin: 0.2rem;
    z-index: 999;
  }
  .icon-right {
    left: 0;
    position: absolute;
    cursor: pointer;
    margin: 0.2rem;
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
  const [leftTip, setLeftTip] = useState(false);
  const [RightTip, setRightTip] = useState(false);
  return (
    <Wrapper>
      <Title>Why Cognni?</Title>
      <Subtitle>Subtitle</Subtitle>
      <CardContainer>
        {/* <Tooltip isVisible={true} data={{ title: 'jiji', content: 'hello' }} /> */}
        <Cards>
          <Card>
            <p>TITLE</p>
            <p>CONTENT</p>
          </Card>
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
    </Wrapper>
  );
};

export default SaveCounter;

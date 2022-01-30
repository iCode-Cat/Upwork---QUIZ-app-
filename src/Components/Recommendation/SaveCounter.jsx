import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 4rem 1.2rem;
`;
const Title = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 29px;
  color: rgba(52, 49, 76, 1);
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
  overflow: hidden;
  padding: 0.3rem;
`;
const LeftCounter = styled.div`
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

function relDiff(a, b) {
  return Math.round(100 * Math.abs((a - b) / ((a + b) / 2)));
}

const SaveCounter = () => {
  const state = useSelector((state) => state);
  const result = state.quiz.userState.results[0].withFormulaCompare;
  const resultCost = state.quiz.userState.results[0].withOutFormulaCompare;
  const numberFormat = new Intl.NumberFormat('en-US');
  const recommendation = state.quiz.defaultJson.recommendation;

  return (
    <Wrapper>
      <Title>{recommendation.title}</Title>
      <Container>
        <RightCounter>
          <p>
            {recommendation.barLeft.replace(
              '{percentage}',
              relDiff(resultCost, result)
            )}
          </p>
        </RightCounter>
        <LeftCounter>
          {recommendation.barLRight.replace(
            '{savings}',
            numberFormat.format(result)
          )}
        </LeftCounter>
      </Container>
    </Wrapper>
  );
};

export default SaveCounter;

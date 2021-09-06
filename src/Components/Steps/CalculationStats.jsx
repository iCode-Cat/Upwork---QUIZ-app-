import React from 'react';
import AnimatedButton from '../AnimatedButton';
import Background from '../Background';
import Stats from '../Statsv2/Stats';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// Styled components
const Loader = styled.p`
  text-align: center;
  font-size: 3rem;
  padding: 5rem;
  height: 300px;
  font-weight: 700;
  color: var(--main);
  background: center bottom / 100% rgb(221, 242, 247);
`;
const CalculationStats = ({ results }) => {
  // Stats
  const state = useSelector((state) => state.quiz);
  const resultsState = state.userState.results;
  return resultsState ? (
    <>
      <Stats results={results} state={state} />
      <Background report bg>
        <AnimatedButton />
      </Background>
    </>
  ) : (
    <Loader>CALCULATING</Loader>
  );
};

export default CalculationStats;

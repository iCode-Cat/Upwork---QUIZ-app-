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
  background: #ddf2f7;
`;
const CalculationStats = ({ results, state }) => {
  // Stats
  const resultsState = state.userState.results;
  return resultsState ? (
    <>
      <Stats results={results} state={state} />
    </>
  ) : (
    <Loader></Loader>
  );
};

export default CalculationStats;

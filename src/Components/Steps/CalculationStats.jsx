import React from 'react';
import AnimatedButton from '../AnimatedButton';
import Background from '../Background';
import Stats from '../Statsv2/Stats';
import { useSelector } from 'react-redux';
const CalculationStats = () => {
  const state = useSelector((state) => state.quiz);
  const resultsState = state.userState.results;
  return resultsState ? (
    <>
      <Stats state={state} />
      <Background report bg>
        <AnimatedButton />
      </Background>
    </>
  ) : (
    <h1
      style={{
        padding: '5rem',
        height: '300px',
        textAlign: 'center',
        fontWeight: '700',
      }}
    >
      CALCULATING
    </h1>
  );
};

export default CalculationStats;

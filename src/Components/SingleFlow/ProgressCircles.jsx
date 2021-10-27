import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  gap: 15px;
  margin-top: 2rem;
`;
const Circle = styled.div`
  width: 15px;
  height: 15px;
  background: ${(props) => (props.filled === 'fill' ? '#2196f3' : 'none')};
  border: 2px solid #2196f3;
  border-radius: 50%;
  opacity: 50%;
  transition: 0.5s;
`;

const ProgressCircles = ({ total = 5, done = 2 }) => {
  const n = total;
  const arr = Array.from(Array(n).keys());

  return (
    <Wrapper>
      {arr.map((ctx, i) => (
        <Circle filled={i + 1 <= done ? 'fill' : 'none'} />
      ))}
    </Wrapper>
  );
};

export default ProgressCircles;

import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-size: 3.2rem;
  font-weight: 600;
  text-align: center;
  color: #34314c;
  @media (max-width: 50em) {
    font-size: 1.8rem;
    padding: 0 3rem;
    text-align: center;
  }
`;

const Title = (props) => {
  return <Text>{props.children}</Text>;
};

export default Title;

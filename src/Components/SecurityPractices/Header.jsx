import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  margin-bottom: 4rem;
  font-size: 3.8rem;
  font-weight: 700;
  color: #34314c;
  text-align: center;

  @media (max-width: 50em) {
    margin-bottom: unset;
    font-size: 1.8rem;
    max-width: 243px;
  }
`;

const Header = () => {
  return <Text>Information Security Best Practices</Text>;
};

export default Header;

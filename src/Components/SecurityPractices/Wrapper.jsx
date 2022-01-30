import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 6rem 6.4rem;
  box-shadow: 0px 26px 80px 0px #34383d12;
  background: #fff;
  width: 100%;
  max-width: 1120px;

  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  @media (max-width: 50em) {
    padding: 3.2rem 1rem;
    gap: 4rem;
  }
`;
const Wrapper = (props) => {
  return <Container>{props.children}</Container>;
};

export default Wrapper;

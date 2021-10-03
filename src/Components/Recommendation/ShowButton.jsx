import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: center bottom / 100% rgb(221, 242, 247);
  padding-top: 4rem;
  width: 100%;
  @media (max-width: 50em) {
    padding-top: 0;
  }
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 2.4rem;
  color: var(--main);
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 80%;
  }
  @media (max-width: 50em) {
    font-size: 2rem;
  }
`;

const ShowButton = ({ setShow, showButton }) => {
  return (
    <Wrapper>
      <Text onClick={() => setShow(true)}>{showButton}</Text>
    </Wrapper>
  );
};

export default ShowButton;

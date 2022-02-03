import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  /* animation: fadeInAnimation 2s; */

  section {
    background: #fff;
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: 0;
  }

  position: relative;
  i {
    position: absolute;
    left: 0;
    top: 0;
    padding: 2rem;
    font-size: 3rem;
    opacity: 0.3;
  }
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
const Wrapper = ({ children, className = 'undefined', inCard }) => {
  return (
    <Container>
      <section className={!inCard ? 'anim' : 'anim1'}></section>
      {children}
    </Container>
  );
};

export default Wrapper;

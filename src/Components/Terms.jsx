import React from 'react';
import styled from 'styled-components';
import checkFalse from '../Images/checkFalse.svg';
import checkedTrue from '../Images/checkedTrue.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 602px;
  width: 80vw;
  /* If step bigger than 1, disable to click */
  opacity: ${(props) => (props.checked && props.step !== 1 ? '0.6' : '1')};
  margin-top: 5rem;
  cursor: pointer;
  @media (max-width: 50em) {
    margin-top: 2rem;
  }
`;

const Icon = styled.img`
  margin-top: 0.5rem;
  margin-right: 0.8rem;
  cursor: pointer;
`;

const Text = styled.p`
  max-width: 602px;
  font-size: 1.3rem;
  color: var(--main);
`;

const Link = styled.a`
  color: var(--blue);
`;

export const Terms = ({ checked, setChecked, step }) => {
  // Term text from json

  return (
    <Wrapper onClick={() => setChecked(!checked)} checked={checked} step={step}>
      <Icon src={checked ? checkedTrue : checkFalse} alt='check-false' />
      <Text>
        I agree to receive my quiz results and a series of emails that will
        teach me how to get potential financial impact. I also have read and
        agree to the <Link href='/'>Privacy Policy</Link> and
        <Link href='/'> Terms of Service.</Link>
      </Text>
    </Wrapper>
  );
};

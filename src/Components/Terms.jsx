import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import checkFalse from '../Images/checkFalse.svg';
import checkedTrue from '../Images/checkedTrue.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 602px;
  width: 80vw;
  opacity: ${(props) => (props.checked ? '60%' : '100%')};
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

export const Terms = () => {
  const [checked, setChecked] = useState(false);

  const terms = useSelector((state) => state.quiz.defaultJson.terms);
  const { content } = terms;
  return (
    <Wrapper checked={checked}>
      <Icon
        onClick={() => setChecked(!checked)}
        src={checked ? checkedTrue : checkFalse}
        alt='check-false'
      />
      <Text>{content}</Text>
    </Wrapper>
  );
};

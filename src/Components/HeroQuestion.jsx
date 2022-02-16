import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { updateInformation } from '../Redux/quizSlice';

const Wrapper = styled.div`
  padding: 2rem 0;
  /* align-self: center; */
  margin: 4rem 0 2rem 8rem;
  border-radius: 8px;
`;
const Title = styled.p``;
const Options = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const HeroQuestion = ({ question, setChecked, checked, igniteForm }) => {
  const heroQuestion = question;
  const [choosen, setChoosen] = useState('');
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Title>{heroQuestion?.text}</Title>
      <Options>
        {heroQuestion?.options.map((x, index) => (
          <Button
            onClick={() => {
              setChoosen(index);
              setChecked(true);
              dispatch(updateInformation(x.information));
              igniteForm();
            }}
            type={choosen === index ? 'btnBlueMutaiton' : 'btnWhite'}
            size='btnSm'
            text={x.text}
            className={checked === false && 'btn-error'}
          />
        ))}
      </Options>
    </Wrapper>
  );
};

export default HeroQuestion;

import React from 'react';
import style from '../../Scss/Steps.module.scss';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Title = styled.p`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Context = ({
  errorValue,
  fields,
  formStateHandler,
  errorClassHandler,
  index,
}) => {
  const initialInformation = useSelector(
    (state) => state.quiz?.initialInformation
  );

  useEffect(() => {
    setTimeout(() => {
      formStateHandler({
        field: fields.stateName,
        value: 'context',
      });
    }, 1);
  }, []);

  if (initialInformation && index === 0)
    return (
      <div className={style.input_box}>
        <Title>{initialInformation.title}</Title>
        <div>{initialInformation.content}</div>
      </div>
    );

  return (
    <div className={style.input_box}>
      <div>{fields.text}</div>
    </div>
  );
};

export default Context;

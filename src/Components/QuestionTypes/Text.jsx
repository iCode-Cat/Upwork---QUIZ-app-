import React, { useEffect } from 'react';
import style from '../../Scss/Steps.module.scss';
import styled from 'styled-components';
import { Terms } from '../Terms';

const Astral = styled.p`
  color: var(--red);
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Input = ({
  nextButtonHandler,
  errorValue,
  fields,
  formStateHandler,
  errorClassHandler,
  order,
  index,
  disableNextButtonHandler,
  form,
}) => {
  useEffect(() => {
    if (fields.skip && form[fields.stateName].length === 0 && order === index) {
      formStateHandler({
        field: fields.stateName,
        value: 'skip',
      });
    }
    if (order === index) {
      disableNextButtonHandler(!fields.skip);
    }
  }, [order]);

  return (
    <div className={style.input_box}>
      {/* <TextWrapper>
        <p className={style.input_title}>{fields.text}</p>
      
      </TextWrapper> */}

      <input
        onChange={(e) => {
          if (fields.validation === 'email' && e.target.value.includes('@')) {
            disableNextButtonHandler(false);
          }
          if (fields.validation === 'text') {
            disableNextButtonHandler(false);
          }
          nextButtonHandler();
          formStateHandler({
            field: fields.stateName,
            value: e.target.value,
          });
        }}
        type={fields.validation}
        required
        className={`${style.input} ${
          errorValue && errorClassHandler(fields.stateName)
            ? style.submitError
            : ''
        }`}
        placeholder={fields.placeholder}
      />
      {fields.validation === 'email' && <Terms />}
    </div>
  );
};

export default Input;

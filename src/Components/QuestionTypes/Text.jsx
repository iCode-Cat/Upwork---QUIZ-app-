import React from 'react';
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

const Input = ({ errorValue, fields, formStateHandler, errorClassHandler }) => {
  return (
    <div className={style.input_box}>
      <TextWrapper>
        <p className={style.input_title}>{fields.text}</p>
        <Astral>*</Astral>
      </TextWrapper>

      <input
        onChange={(e) =>
          formStateHandler({
            field: fields.stateName,
            value: e.target.value,
          })
        }
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

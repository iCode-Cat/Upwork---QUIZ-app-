import React, { useState, useRef, useEffect } from 'react';
import style from '../../Scss/Steps.module.scss';
import styled from 'styled-components';

const Astral = styled.p`
  color: var(--red);
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const Numeric = ({
  errorValue,
  fields,
  formStateHandler,
  errorClassHandler,
}) => {
  const input = useRef();
  const [inputValue, setInputValue] = useState(fields.placeholder);
  const step = 1;

  const increment = () => {
    setInputValue(inputValue + step);
  };

  const decrement = () => {
    setInputValue(inputValue - step);
  };

  useEffect(() => {
    input.current.value = inputValue;
    formStateHandler({
      field: fields.stateName,
      value: Number(inputValue),
    });
  }, [inputValue]);

  return (
    <div className={style.input_box}>
      <TextWrapper>
        <p className={style.input_title}>{fields.text}</p>
        <Astral>*</Astral>
      </TextWrapper>
      <div className={style.relativeWrapper}>
        <input
          // style={{ textAlign: 'center' }}
          onChange={(e) => setInputValue(e.target.value)}
          ref={input}
          required
          placeholder={fields.placeholder}
          min='0'
          max='255000'
          type='number'
          defaultValue={inputValue}
          className={`${style.input} ${
            errorValue && errorClassHandler(fields.stateName)
              ? style.submitError
              : ''
          }`}
        />
        {/* <div className={style.icon_box}>
          <i onClick={decrement} className='fas fa-chevron-left'></i>
          <p>100</p>
          <i onClick={increment} className='fas fa-chevron-right'></i>
        </div> */}
      </div>
    </div>
  );
};

export default Numeric;

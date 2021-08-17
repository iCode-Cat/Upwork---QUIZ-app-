import React, { useState, useRef, useEffect } from 'react';
import style from '../../Scss/Steps.module.scss';
const Numeric = ({
  errorValue,
  fields,
  formStateHandler,
  errorClassHandler,
}) => {
  const input = useRef();
  const [inputValue, setInputValue] = useState(100);
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
      value: inputValue,
    });
  }, [inputValue]);

  return (
    <div className={style.input_box}>
      <p className={style.input_title}>{fields.text}</p>
      <div className={style.relativeWrapper}>
        <input
          ref={input}
          required
          placeholder={fields.initialValue}
          min='0'
          max='999999'
          type='number'
          defaultValue={inputValue}
          className={`${style.input} ${
            errorValue && errorClassHandler(fields.stateName)
              ? style.submitError
              : ''
          }`}
        />
        <div className={style.icon_box}>
          <i onClick={decrement} className='fas fa-chevron-left'></i>
          <p>100</p>
          <i onClick={increment} className='fas fa-chevron-right'></i>
        </div>
      </div>
    </div>
  );
};

export default Numeric;

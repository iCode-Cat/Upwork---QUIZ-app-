import React, { useState, useRef, useEffect } from 'react';
import style from '../../Scss/Steps.module.scss';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { pushTags } from '../../Redux/quizSlice';

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
  nextButtonHandler,
  index,
  order,
  disableNextButtonHandler,
  form,
}) => {
  const input = useRef();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(fields.placeholder);
  const userState = useSelector((state) => state.quiz.userState);
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

  // Update the tag
  useEffect(() => {
    if (userState.step === 1) return;
    const amount = userState[fields.stateName];
    // Do smth to update user tag by employee amount
    // Get condition
    fields?.numericCondition?.forEach((x) => {
      if (amount >= x.minAmount && amount <= x.maxAmount) {
        const tags = x.conditionedTag.map((x) => x.name);
        dispatch(pushTags(tags));
      }
    });
    console.log();
  }, [userState.step]);

  return (
    <div className={style.input_box}>
      {/* <TextWrapper>
        <p className={style.input_title}>{fields.text}</p>
        {!fields.skip && <Astral>*</Astral>}
      </TextWrapper> */}
      <div className={style.relativeWrapper}>
        <input
          // style={{ textAlign: 'center' }}
          onChange={(e) => {
            nextButtonHandler();
            setInputValue(e.target.value);
            disableNextButtonHandler(false);
          }}
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

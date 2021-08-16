import React, { useState, useEffect } from 'react';
import style from '../Scss/Steps.module.scss';
import Button from './Button';
import ErrorMessage from './ErrorMessage';
import { steps } from '../Json/Steps';
import Input from './QuestionTypes/Input';
import Increment from './QuestionTypes/Increment';
import Options from './QuestionTypes/Options';
import Dropdown from './QuestionTypes/Dropdown';

const FirstStep = ({
  errorClassHandler,
  HeroJSON,
  formStateHandler,
  form,
  setForm,
  step1,
  scrollToView,
  step2,
}) => {
  const { stepOneValue } = steps;
  const questions = stepOneValue.fields;
  const step = HeroJSON.step1;
  const { button, index } = step;
  const [errorValue, setError] = useState(false);

  const stateHandler = () => {
    stepOneValue.fields.map((value) => {
      const formField = value.stateName;
      form[formField] = '';
      setForm({ ...form });
    });
  };

  useEffect(() => {
    stateHandler();
  }, []);

  const checkEmpty = () => {
    const result = stepOneValue.fields.map((value) => {
      const formField = value.stateName;
      if (form[formField] === '') {
        setError(true);
        return true;
      }
      return false;
    });
    // Check whether array includes error of empty input
    return result.some((value) => value === true);
  };

  const errorHandler = (e) => {
    e.preventDefault();
    if (checkEmpty()) return;
    form.step === index && formStateHandler({ field: 'step', value: 2 });
    setError(false);
    scrollToView(step2);
  };

  const questionTypeHandler = (fields) => {
    if (fields.questionType === 'input') {
      return (
        <Input
          errorValue={errorValue}
          fields={fields}
          formStateHandler={formStateHandler}
          errorClassHandler={errorClassHandler}
        />
      );
    }
    if (fields.questionType === 'increment') {
      return (
        <Increment
          errorValue={errorValue}
          fields={fields}
          formStateHandler={formStateHandler}
          errorClassHandler={errorClassHandler}
        />
      );
    }
    if (fields.questionType === 'options') {
      return (
        <Options
          errorValue={errorValue}
          fields={fields}
          formStateHandler={formStateHandler}
          errorClassHandler={errorClassHandler}
        />
      );
    }
    if (fields.questionType === 'dropdown') {
      return (
        <Dropdown
          errorValue={errorValue}
          fields={fields}
          formStateHandler={formStateHandler}
          errorClassHandler={errorClassHandler}
        />
      );
    }
  };

  return (
    <form
      ref={step1}
      onSubmit={(e) => errorHandler(e)}
      className={`${style.wrapper}  ${style.stepFirst} ${
        form.step !== index ? style.disableEvents : ''
      }`}
      id='step1'
    >
      <div className={style.step}>
        <strong>Step {index}</strong>
        <p>of 3</p>
      </div>
      <div className={style.input_container}>
        {questions.map((fields) => questionTypeHandler(fields))}
      </div>
      <div>
        <span onClick={checkEmpty} type='submit'>
          <Button
            submit
            size='btnLg'
            type={`${form.step === index ? 'btnBlue' : 'btnGray'}`}
            text={button}
          />
        </span>
        {errorValue && <ErrorMessage />}
      </div>
    </form>
  );
};

export default FirstStep;

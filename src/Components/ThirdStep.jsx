import React, { useState, useEffect } from 'react';
import style from '../Scss/Steps.module.scss';
import Button from './Button';
import ErrorMessage from './ErrorMessage';
import { steps } from '../Json/headless';
import QuesionTypeHandler from '../Handlers/QuestionTypeHandler';

const ThirdStep = ({
  errorClassHandler,
  HeroJSON,
  formStateHandler,
  form,
  setForm,
  step3,
  scrollToView,
  hero,
}) => {
  const { stepThreeValue } = steps;
  const questions = stepThreeValue.fields;
  const { index } = stepThreeValue;
  const [errorValue, setError] = useState(false);

  const stateHandler = () => {
    stepThreeValue.fields.map((value) => {
      const formField = value.stateName;
      form[formField] = '';
      setForm({ ...form });
    });
  };

  useEffect(() => {
    stateHandler();
  }, []);

  const checkEmpty = () => {
    const result = stepThreeValue.fields.map((value) => {
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
    form.step === index && formStateHandler({ field: 'step', value: 4 });
    setError(false);
    scrollToView(hero);
  };

  return (
    <form
      ref={step3}
      onSubmit={(e) => errorHandler(e)}
      className={`${style.wrapper} ${
        form.step !== index ? style.disableEvents : ''
      }`}
      id='step1'
    >
      <div className={style.step}>
        <strong>Step {index}</strong>
        <p>of 3</p>
      </div>
      <div className={style.input_container}>
        {questions.map((fields, index) => (
          <div key={index}>
            {QuesionTypeHandler(
              fields,
              index,
              errorValue,
              formStateHandler,
              errorClassHandler
            )}
          </div>
        ))}
      </div>
      <div className={style.stepSecondBtnPd}>
        <span type='submit'>
          <Button
            submit
            size='btnLg'
            type={`${form.step === index ? 'btnGreen' : 'btnGray'}`}
            text={stepThreeValue.button}
          />
        </span>
        {errorValue && <ErrorMessage />}
      </div>
    </form>
  );
};

export default ThirdStep;

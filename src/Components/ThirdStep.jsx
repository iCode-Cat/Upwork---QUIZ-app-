import React, { useState, useEffect } from 'react';
import style from '../Scss/Steps.module.scss';
import Button from './Button';
import ErrorMessage from './ErrorMessage';
import QuesionTypeHandler from '../Handlers/QuestionTypeHandler';

const ThirdStep = ({
  errorClassHandler,
  defaultJson,
  formStateHandler,
  form,
  setForm,
  step3,
  scrollToView,
  hero,
  results,
}) => {
  const { steps } = defaultJson;
  const questions = steps[2].fields;
  const { index } = steps[2];
  const [errorValue, setError] = useState(false);

  const stateHandler = () => {
    questions.map((value) => {
      const formField = value.stateName;
      form[formField] = '';
      setForm({ ...form });
    });
  };

  useEffect(() => {
    stateHandler();
  }, []);

  const checkLastStep = () => {
    if (index === defaultJson.numberOfSteps) {
      return true;
    }
    return false;
  };

  const checkEmpty = () => {
    const result = questions.map((value) => {
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
    form.step === index &&
      formStateHandler({
        field: 'step',
        value: checkLastStep() ? 4 : index + 1,
      });
    setError(false);
    scrollToView(results);
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
        <p>of {defaultJson.numberOfSteps}</p>
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
          {checkLastStep() ? (
            <Button
              submit
              size='btnLg'
              type={`${form.step === index ? 'btnGreen' : 'btnGreen'}`}
              text={defaultJson.ctaButton}
            />
          ) : (
            <Button
              submit
              size='btnLg'
              type={`${form.step === index ? 'btnBlue' : 'btnGray'}`}
              text={defaultJson.nextButton}
            />
          )}
        </span>
        {errorValue && <ErrorMessage />}
      </div>
    </form>
  );
};

export default ThirdStep;

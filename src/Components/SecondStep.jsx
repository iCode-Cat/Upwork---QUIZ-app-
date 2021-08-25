import React, { useState, useEffect } from 'react';
import style from '../Scss/Steps.module.scss';
import Button from './Button';
import ErrorMessage from './ErrorMessage';
import QuesionTypeHandler from '../Handlers/QuestionTypeHandler';

const SecondStep = ({
  errorClassHandler,
  defaultJson,
  formStateHandler,
  form,
  setForm,
  step2,
  step3,
  scrollToView,
  results,
}) => {
  const { steps } = defaultJson;
  const questions = steps[1].fields;
  const { index } = steps[1];
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
    checkLastStep() ? scrollToView(results) : scrollToView(step3);
  };

  return (
    <form
      ref={step2}
      onSubmit={(e) => errorHandler(e)}
      className={`${style.wrapper}  ${style.stepSecond} ${
        form.step !== index ? style.disableEvents : ''
      }`}
    >
      <div className={style.step}>
        <strong>Step {index}</strong>
        <p>of {defaultJson.numberOfSteps}</p>
      </div>
      <div className={style.input_container}>
        {questions.map((fields, index) =>
          QuesionTypeHandler(
            fields,
            index,
            errorValue,
            formStateHandler,
            errorClassHandler
          )
        )}
      </div>
      <div className={style.stepSecondBtnPd}>
        <span onClick={checkEmpty} type='submit'>
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

export default SecondStep;

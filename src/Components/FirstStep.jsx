import React, { useState } from 'react';
import style from '../Scss/Steps.module.scss';
import Button from './Button';
import ErrorMessage from './ErrorMessage';
import { steps } from '../Json/Steps';

const FirstStep = ({
  errorClassHandler,
  HeroJSON,
  formStateHandler,
  form,
  step1,
  scrollToView,
  step2,
}) => {
  const { stepOneValue } = steps;
  const questions = stepOneValue.fields;
  const step = HeroJSON.step1;
  const { button, index } = step;
  const [errorValue, setError] = useState(false);

  const checkEmpty = () => {
    if (form.email === '' || form.companyName === '') {
      setError(true);
      return true;
    }
    return false;
  };

  const errorHandler = (e) => {
    e.preventDefault();
    if (checkEmpty()) return;
    form.step === index && formStateHandler({ field: 'step', value: 2 });
    setError(false);
    scrollToView(step2);
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
        {questions.map((fields) => (
          <div className={style.input_box}>
            <p className={style.input_title}>{fields.text}</p>
            <input
              onChange={(e) =>
                formStateHandler({
                  field: fields.stateName,
                  value: e.target.value,
                })
              }
              type={fields.type}
              required
              className={`${style.input} ${
                errorValue && errorClassHandler(fields.stateName)
                  ? style.submitError
                  : ''
              }`}
              placeholder={fields.placeholder}
            />
          </div>
        ))}
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

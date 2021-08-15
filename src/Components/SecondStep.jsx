import React, { useState } from 'react';
import style from '../Scss/Steps.module.scss';
import Button from './Button';
import ErrorMessage from './ErrorMessage';

const SecondStep = ({
  errorClassHandler,
  HeroJSON,
  formStateHandler,
  form,
  step2,
  scrollToView,
  step3,
}) => {
  const step = HeroJSON.step2;
  const { button, fields, index } = step;
  const [errorValue, setError] = useState(false);
  console.log(errorValue);
  const checkEmpty = () => {
    if (
      form.numberEmployees === '' ||
      form.youWorkingCloud === '' ||
      form.yourCompWorkingCloud === ''
    ) {
      setError(true);
      return true;
    }
    return false;
  };

  const errorHandler = (e) => {
    e.preventDefault();
    if (checkEmpty()) return;
    form.step === index && formStateHandler({ field: 'step', value: 3 });
    setError(false);
    scrollToView(step3);
  };

  const [shortAnswer, setShortAnswer] = useState({
    type: 'shortAnswer',
    isAnswered: false,
    index: null,
  });

  const [longAnswer, setLongAnswer] = useState({
    type: 'longAnswer',
    isAnswered: false,
    index: null,
  });

  return (
    <form
      ref={step2}
      onSubmit={(e) => errorHandler(e)}
      className={`${style.wrapper} ${style.stepSecond} ${
        form.step !== index ? style.disableEvents : ''
      }`}
      id='step2'
    >
      <div className={style.step}>
        <strong>Step {index}</strong>
        <p>of 3</p>
      </div>
      <div className={style.input_container}>
        <div className={style.input_box}>
          <p className={style.input_title}>{fields.question3.text}</p>
          <input
            required
            onChange={(e) =>
              formStateHandler({
                field: 'numberEmployees',
                value: e.target.value,
              })
            }
            defaultValue='100'
            step='50'
            type='number'
            className={`${style.input} ${
              errorValue && errorClassHandler('numberEmployees')
                ? style.submitError
                : ''
            }`}
          />
        </div>
        <div className={style.input_box}>
          <p className={style.input_title}>{fields.question2.text}</p>
          <div
            style={{
              display: 'grid',
              gridAutoFlow: 'column',
              justifyContent: 'flex-start',
              gap: '2.5rem',
            }}
          >
            {fields.question1.buttons.map((btn, i) => (
              <span
                onClick={() => {
                  setShortAnswer({
                    ...shortAnswer,
                    isAnswered: true,
                    index: i,
                  });
                  // numberEmployees: null,
                  formStateHandler({
                    field: 'youWorkingCloud',
                    value: btn.text,
                  });
                }}
                key={i}
              >
                <Button
                  error={`${
                    errorValue && errorClassHandler('youWorkingCloud')
                      ? true
                      : false
                  }`}
                  text={btn.text}
                  size='btnMd'
                  type={
                    shortAnswer.isAnswered && shortAnswer.index === i
                      ? 'btnBlueMutaiton'
                      : 'btnWhite'
                  }
                />
              </span>
            ))}
          </div>
        </div>
        <div className={style.input_box}>
          <p className={style.input_title}>{fields.question2.text}</p>
          <div
            style={{
              display: 'grid',
              gridAutoFlow: 'column',
              justifyContent: 'flex-start',
              gap: '2.5rem',
            }}
          >
            {fields.question2.buttons.map((btn, i) => (
              <span
                onClick={() => {
                  setLongAnswer({
                    ...longAnswer,
                    isAnswered: true,
                    index: i,
                  });
                  // numberEmployees: null,
                  formStateHandler({
                    field: 'yourCompWorkingCloud',
                    value: btn.text,
                  });
                }}
                key={i}
              >
                <Button
                  error={`${
                    errorValue && errorClassHandler('yourCompWorkingCloud')
                  }`}
                  text={btn.text}
                  size='btnMd'
                  type={
                    longAnswer.isAnswered && longAnswer.index === i
                      ? 'btnBlueMutaiton'
                      : 'btnWhite'
                  }
                />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ paddingBottom: '5rem' }}>
        <span onClick={checkEmpty}>
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

export default SecondStep;

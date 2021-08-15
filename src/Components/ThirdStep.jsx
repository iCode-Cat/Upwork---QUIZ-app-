import React, { useState } from 'react';
import style from '../Scss/Steps.module.scss';
import Button from './Button';
import ErrorMessage from './ErrorMessage';

const ThirdStep = ({
  errorClassHandler,
  HeroJSON,
  formStateHandler,
  form,
  hero,
  scrollToView,
  step3,
}) => {
  const step = HeroJSON.step3;
  const { button, fields, index } = step;
  const [errorValue, setError] = useState(false);

  const checkEmpty = () => {
    if (form.howProtectYourInfo === '' || form.howYouMonitorRisks === '') {
      setError(true);
      return true;
    }
    return false;
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
      className={`${style.wrapper}  ${style.stepFirst} ${
        form.step !== index ? style.disableEvents : ''
      }`}
      id='step3'
    >
      <div className={style.step}>
        <strong>Step {index}</strong>
        <p>of 3</p>
      </div>
      <div className={style.input_container}>
        <div className={style.input_box}>
          <p className={style.input_title}>{fields.dropdown1.text}</p>
          <input
            onChange={(e) =>
              formStateHandler({
                field: 'howProtectYourInfo',
                value: e.target.value,
              })
            }
            type='text'
            required
            className={`${style.input} ${
              errorValue && errorClassHandler('howProtectYourInfo')
                ? style.submitError
                : ''
            }`}
            placeholder={fields.dropdown1.placeholder}
          />
        </div>
        <div className={style.input_box}>
          <p className={style.input_title}>{fields.dropdown2.text}</p>
          <input
            onChange={(e) =>
              formStateHandler({
                field: 'howYouMonitorRisks',
                value: e.target.value,
              })
            }
            type='text'
            placeholder={fields.dropdown2.placeholder}
            className={`${style.input} ${
              errorValue && errorClassHandler('howYouMonitorRisks')
                ? style.submitError
                : ''
            }`}
          />
        </div>
      </div>
      <div>
        <span onClick={checkEmpty}>
          <Button
            submit
            size='btnLg'
            type={`${form.step === index ? 'btnGreen' : 'btnGray'}`}
            text={button}
          />
        </span>
        {errorValue && <ErrorMessage />}
      </div>
    </form>
  );
};

export default ThirdStep;

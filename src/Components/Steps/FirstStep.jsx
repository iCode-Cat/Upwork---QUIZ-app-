import React, { useState, useEffect } from 'react';
import style from '../../Scss/Steps.module.scss';
import Button from '../Button';
import ErrorMessage from '../ErrorMessage';
import QuesionTypeHandler from '../../Handlers/QuestionTypeHandler';
import { Terms } from '../Terms';
import RopeMob from '../Timelines/RopeMob';
import FirstLine from './svg-line/FirstLine';
import Secondline from './svg-line/SecondLine';

const FirstStep = ({
  errorClassHandler,
  defaultJson,
  formStateHandler,
  form,
  setForm,
  step1,
  scrollToView,
  step2,
  results,
}) => {
  const { steps } = defaultJson;
  const questions = steps[0].fields;
  const { index } = steps[0];
  const [errorValue, setError] = useState(false);
  const [checked, setChecked] = useState(false);
  // order for single flow
  const [order, setOrder] = useState(0);
  // Indicate last question of the flow
  const [lastQuestion, setLastQuestion] = useState(false);

  const stateHandler = () => {
    questions.map((value) => {
      const formField = value.stateName;
      form[formField] = '';
      setForm({ ...form });
    });
  };

  // Increment for single flow
  const incrementHandler = () => {
    setOrder(order + 1);
  };

  const checkLastStep = () => {
    if (index === defaultJson.numberOfSteps) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    stateHandler();
  }, []);

  const checkEmpty = () => {
    const result = questions.map((value, index) => {
      const formField = value.stateName;

      if (form[formField] === '' || !checked) {
        setError(true);
        return true;
      }

      if (index === order && index !== questions.length - 1) {
        setOrder(order + 1);
        setError(false);
      }

      if (index === questions.length - 2) {
        setLastQuestion(true);
      }

      return false;
    });
    // Check whether array includes error of empty input
    console.log(result);
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
    checkLastStep() ? scrollToView(results) : scrollToView(step2);
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
      {step1.current !== undefined && (
        <FirstLine DOM={step1} step={form.step} />
      )}

      {step1.current !== undefined && (
        <RopeMob
          marginTop={60}
          color='
#FFC300'
          referance={step1}
        />
      )}
      <div className={style.step}>
        {/* <strong>Step {index}</strong> */}
        <p>Answer the questions</p>
      </div>
      <div className={style.input_container}>
        {questions.map(
          (fields, index) =>
            order === index &&
            QuesionTypeHandler(
              fields,
              index,
              errorValue,
              formStateHandler,
              errorClassHandler
            )
        )}
      </div>

      <div className={style.submit} onClick={checkEmpty} type='submit'>
        {checkLastStep() && lastQuestion ? (
          <Button
            submit
            size='btnLg'
            type={`${form.step === index ? 'btnGreen' : 'btnGreenDisable'}`}
            text={defaultJson.ctaButton}
          />
        ) : (
          <Button
            size='btnLg'
            type={`${
              form.step === index && checked ? 'btnBlue' : 'btnBlueDisable'
            }`}
            text={'Next'}
          />
        )}
        {errorValue && (
          <ErrorMessage errorValue={errorValue} checked={checked} />
        )}
      </div>

      <Terms step={form.step} setChecked={setChecked} checked={checked} />
    </form>
  );
};

export default FirstStep;

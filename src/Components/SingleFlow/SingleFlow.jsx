import React, { useState, useEffect } from 'react';
import style from '../../Scss/Steps.module.scss';
import Button from '../Button';
import ErrorMessage from '../ErrorMessage';
import QuesionTypeHandler from '../../Handlers/QuestionTypeHandler';
import { Terms } from '../Terms';
import { useDispatch } from 'react-redux';
import { setQuestionOrder } from '../../Redux/quizSlice';
import RopeMob from '../Timelines/RopeMob';
import FirstLine from '../Steps/svg-line/FirstLine';
import { useTotalQuestion } from './useTotalQuestion';

const SingleFlow = ({
  errorClassHandler,
  defaultJson,
  formStateHandler,
  form,
  setForm,
  step1,
  scrollToView,
  step2,
  state,
  results,
}) => {
  const questionOrder = state.questionOrder;
  const dispatch = useDispatch();
  const { steps, numberOfSteps } = defaultJson;
  const questions = steps[0].fields;
  const [
    allAnswered,
    setAllAnswered,
    setCounter,
    counter,
    totalQuestions,
    decrement,
    setDecrement,
  ] = useTotalQuestion();

  const { index } = steps[0];
  const [errorValue, setError] = useState(false);
  const [questionsState, setQuestionsState] = useState([]);
  const [checked, setChecked] = useState(false);

  // order for single flow
  const [order, setOrder] = useState(0);
  // Indicate last question of the flow-
  const [lastQuestion, setLastQuestion] = useState(false);
  // Insert all questions of this step to one state-+
  const stateHandler = () => {
    questions.map((value) => {
      if (value.relatedQuestion) return;
      const formField = value.stateName;
      form[formField] = '';
      setForm({ ...form });
    });
  };

  // Insert questions to another state

  // Increment for single flow
  const incrementHandler = () => {
    setOrder(order + 1);
  };
  // Decrement for single flow
  const decrementHandler = () => {
    if (order === 0) return;
    setOrder(order - 1);
    setDecrement(decrement - 1);
    setAllAnswered(false);
    // setCounter(counter - 1);
  };

  const checkLastStep = () => {
    if (index === defaultJson.numberOfSteps) {
      return true;
    }
    return false;
  };

  const InsertQuestions = () => {
    const filter = questions.filter((item) => !item.relatedQuestion);
    setQuestionsState([...filter]);
  };

  useEffect(() => {
    stateHandler();
    InsertQuestions();
  }, []);

  // Everytime question order updated
  useEffect(() => {
    if (questionOrder === null) return;
    const filter = questions.filter(
      (item) => item.questionId === questionOrder
    );

    setQuestionsState([...questionsState, ...filter]);
    dispatch(setQuestionOrder(null));
    // lastQuestionHandler(order);
    // lastQuestionHandler();
  }, [order]);

  const checkEmpty = () => {
    const result = questionsState.map((value, index) => {
      const formField = value.stateName;

      if (order !== index) return;
      if (form[formField] === '' || !checked) {
        setError(true);
        return true;
      }
      // Prevent submit button to increment counter
      setDecrement(decrement + 1);

      if (counter + 1 !== totalQuestions && decrement === counter) {
        setCounter(counter + 1);
      }

      if (index === order && index !== questionsState.length && !allAnswered) {
        incrementHandler();
        setError(false);
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
        <FirstLine DOM={step1} step={form.step} numberOfSteps={numberOfSteps} />
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
        <p onClick={decrementHandler}>{`Answer the questions ${
          counter + 1
        }/${totalQuestions}`}</p>
      </div>
      <div className={style.input_container}>
        {questionsState.length > 0 &&
          questionsState.map((fields, index) => (
            <div
              style={{
                display: `${order === index ? 'block' : 'none'}`,
                pointerEvents: `${counter !== index ? 'none' : 'unset'}`,
                opacity: `${counter !== index ? '0.7' : '1'}`,
              }}
            >
              {QuesionTypeHandler(
                fields,
                index,
                errorValue,
                formStateHandler,
                errorClassHandler,
                setError
              )}
            </div>
          ))}
      </div>

      <div className={style.submit} onClick={checkEmpty} type='submit'>
        {allAnswered && decrement >= counter ? (
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

export default SingleFlow;
import React, { useState, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import style from '../../Scss/Steps.module.scss';
import Button from '../Button';
import ErrorMessage from '../ErrorMessage';
import QuesionTypeHandler from '../../Handlers/QuestionTypeHandler';
import RelatedQuestions from '../RelatedQuestions';
import { Terms } from '../Terms';
import { useDispatch, useSelector } from 'react-redux';
import {
  recommendation,
  worryAbout,
  shouldDo,
  temp,
} from '../../Redux/dynamicSlice';
import RopeMob from '../Timelines/RopeMob';
import FirstLine from '../Steps/svg-line/FirstLine';
import { useTotalQuestion } from './useTotalQuestion';
import ProgressCircles from './ProgressCircles';

const Backward = styled.i`
  cursor: pointer;
  opacity: 70%;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 0fr auto;
`;

const Wrapper = styled.form`
  animation: fade 1s forwards;
  .enter {
    animation: fade 1s forwards;
  }

  .anim-exit {
    animation: fade-exit 1s forwards;
  }

  .remove-btn {
    margin-right: 0.5rem;
  }

  .item-enter {
    opacity: 0;
  }
  .item-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  .item-exit {
    opacity: 1;
  }
  .item-exit-active {
    display: none;
    transition: opacity 500ms ease-in;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fade-exit {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.6;
    }
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  margin-left: 1rem;
  /* position: relative;
  z-index: -1; */
`;

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
  const { steps, numberOfSteps, singleFlowTitle } = defaultJson;
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
  const [checked, setChecked] = useState(true);
  const [buttonClicked, setButtonClicked] = useState();
  const [relatedsAnwered, setRelatedsAnswered] = useState(true);
  const dynamicZone = useSelector((state) => state.dynamic);
  const followUpInformationTitle = useSelector(
    (state) => state.quiz.followUpInformationTitle
  );

  const [skipped, setSkipped] = useState(false);
  const [skippedAll, setSkippedAll] = useState(false);
  const [allSkip, setAllSkip] = useState(false);

  // order for single flow
  const [order, setOrder] = useState(0);
  // Indicate last question of the flow-
  const [infoQuestion, setInfoQuestion] = useState(false);
  const [infoQuestionTitle, setInfoQuestionTitle] = useState('');
  // Insert all questions of this step to one state-+
  const stateHandler = () => {
    questions.map((value) => {
      if (value.relatedQuestion) return;
      const formField = value.stateName;
      form[formField] = '';
      setForm({ ...form });
    });
  };

  const separateDynamic = () => {
    const tempData = dynamicZone.temp;
    if (!tempData) return;
    // fill up the states by conditions
    tempData?.map((ctx) => {
      ctx?.map((t) => {
        if (t._type === 'shouldDo') return dispatch(shouldDo(t));
        if (t._type === 'worryAbout') return dispatch(worryAbout(t));
        if (t._type === 'recommendationCard')
          return dispatch(recommendation(t));
      });
    });
    // reset the temp
    dispatch(temp(false));
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
    setRelatedsAnswered(true);
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

  useEffect(() => {
    questionsState.forEach((field, index) => {
      if (field.skip && order === index && skipped) {
        checkEmpty();
        setSkipped(false);
      }
    });
  }, [skipped]);

  useEffect(() => {
    questionsState.forEach((field, index) => {
      if (field.skip && skippedAll) {
        checkEmpty();
        setSkippedAll(false);
      }
    });
  }, [skippedAll]);

  // Everytime question order updated
  // useEffect(() => {
  //   if (questionOrder === null) return;
  //   const filter = questions.find(
  //     (item) => item.callQuestion && item.relatedQuestions
  //   );

  //   const find = filter.relatedQuestions.find(
  //     (ctx) => ctx.questionId === questionOrder
  //   );

  //   setQuestionsState([...questionsState, find]);
  //   // dispatch(setQuestionOrder(null));
  //   // lastQuestionHandler(order);
  //   // lastQuestionHandler();
  // }, [order]);

  const checkEmpty = () => {
    setButtonClicked(!buttonClicked);
    const result = questionsState.map((value, index) => {
      const formField = value.stateName;

      if (order !== index) return;

      if (form[formField] === '' || !checked || !relatedsAnwered) {
        if (questionOrder !== null) return true;
        setError(true);
        return true;
      }

      // Do something for dynamic zone...
      if (checkAllSkipable()) {
        setAllSkip(true);
      } else {
        setAllSkip(false);
      }
      separateDynamic();
      // Prevent submit button to increment counter
      setDecrement(decrement + 1);

      if (counter + 1 !== totalQuestions && decrement === counter) {
        setCounter(counter + 1);
      }

      if (
        index === order &&
        index !== questionsState.length &&
        !allAnswered &&
        relatedsAnwered
      ) {
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

  const checkAllSkipable = () => {
    const skipArray = [];
    // Check current questions' state
    // Detect unanswered ones
    // If all unswered skipable add skip all button
    questionsState.forEach((field, index) => {
      if (form[field.stateName].length === 0) {
        skipArray.push(field.skip);
      }
    });
    // Prevent to show skip all button on last question
    if (
      order === questionsState.length - 1 ||
      order === questionsState.length - 2
    )
      return false;
    return !skipArray?.some((skip) => !skip);
  };

  const skipHandler = () => {
    // Find current question with skip option
    questionsState.forEach((field, index) => {
      if (field.skip && order === index) {
        const stateName = field.stateName;
        // Update userState answer
        formStateHandler({
          field: stateName,
          value: 'skipped',
        });
        setSkipped(true);
      }
    });
  };

  const skipAllHandler = () => {
    questionsState.forEach((field, index) => {
      if (form[field.stateName].length === 0 && field.skip) {
        formStateHandler({
          field: field.stateName,
          value: 'skipped',
        });
      }
    });
    setSkippedAll(true);
  };

  const initialInfoCheck = () => {
    questionsState.forEach((fields, index) => {
      if (fields.questionType === 'context' && order === index) {
        setInfoQuestion(true);
        setInfoQuestionTitle(fields.placeholder);
        return;
      }
      if (order === index) {
        setInfoQuestion(false);
      }
    });
  };
  useLayoutEffect(() => {
    initialInfoCheck();
  });

  useEffect(() => {
    initialInfoCheck();
  }, [order]);
  return (
    <Wrapper
      ref={step1}
      onSubmit={(e) => errorHandler(e)}
      className={`${style.wrapper}  ${style.stepFirst} ${
        form.step !== index ? style.disableEvents : ''
      }`}
      id='step1'
    >
      {step1.current !== undefined && form.step > 1 && (
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

      <div className={style.input_container}>
        {questionsState.length > 0 &&
          questionsState.map((fields, index) => (
            <div
              className={`${order === index ? 'enter anim' : ''} ${
                counter !== index ? 'anim-exit' : ''
              }`}
              style={{
                display: `${order === index ? 'block' : 'none'}`,
                position: 'relative',
              }}
            >
              <Container className={style.step}>
                {/* <strong>Step {index}</strong> */}
                {order !== 0 && (
                  <Backward
                    onClick={decrementHandler}
                    className='fas fa-arrow-left anim-exit'
                  ></Backward>
                )}
                {!infoQuestion ? (
                  <p>
                    {fields.text?.replace('{companyName}', form?.companyName)}{' '}
                    {!fields.skip && '*'}
                  </p>
                ) : (
                  <p>{followUpInformationTitle}</p>
                )}
              </Container>
              <div
                style={{
                  pointerEvents: `${counter !== index ? 'none' : 'unset'}`,
                  opacity: `${counter !== index ? '0.7' : '1'}`,
                }}
              >
                {fields?.options?.find((ctx) => ctx.callQuestion) &&
                fields.callQuestion ? (
                  <RelatedQuestions
                    setRelatedsAnswered={setRelatedsAnswered}
                    fields={fields}
                    relatedQuestions={steps[0].relatedQuestions}
                    index={index}
                    setError={setError}
                    errorClassHandler={errorClassHandler}
                    formStateHandler={formStateHandler}
                    setForm={setForm}
                    form={form}
                    buttonClicked={buttonClicked}
                    order={order}
                  />
                ) : (
                  QuesionTypeHandler(
                    fields,
                    index,
                    errorValue,
                    formStateHandler,
                    errorClassHandler,
                    setError,
                    index
                  )
                )}
              </div>

              {errorValue && (
                <ErrorMessage errorValue={errorValue} checked={checked} />
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
        <ButtonContainer>
          {questionsState.map(
            (fields, index) =>
              fields.skip &&
              order === index && (
                <span onClick={skipHandler}>
                  <Button
                    type='btnGray'
                    size='btnMd'
                    text={state.defaultJson.skipButton}
                  />
                </span>
              )
          )}

          {allSkip && (
            <span
              onClick={(e) => {
                errorHandler(e);
                skipAllHandler();
              }}
            >
              <Button
                type='btnGray'
                size='btnMd'
                text={state.defaultJson.skipAllButton}
              />
            </span>
          )}
        </ButtonContainer>
      </div>

      {/* <Terms /> */}
      <ProgressCircles done={counter + 1} total={totalQuestions} />
    </Wrapper>
  );
};

export default SingleFlow;

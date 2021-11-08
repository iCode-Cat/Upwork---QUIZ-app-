import React, { useState, useEffect } from 'react';
import QuesionTypeHandler from '../../Handlers/QuestionTypeHandler';
import { useSelector, useDispatch } from 'react-redux';
import { setQuestionOrder } from '../../Redux/quizSlice';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  gap: 5rem;
`;

const Index = ({
  fields,
  index,
  errorValue,
  errorClassHandler,
  formStateHandler,
  relatedQuestions,
  setError,
  setForm,
  form,
  setRelatedsAnswered,
  buttonClicked,
  decrementHandler,
}) => {
  const [questions, setQuestions] = useState([fields]);
  const questionOrder = useSelector((state) => state.quiz.questionOrder);
  const [lock, setLock] = useState(false);
  const nextQuestion = relatedQuestions.find(
    (question) => question.questionId === questionOrder
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (questionOrder === null) return;
    if (nextQuestion) {
      setLock(false);
    }
    setRelatedsAnswered(false);
  }, [questionOrder]);

  useEffect(() => {
    if (questionOrder === null) return;
    if (
      form[nextQuestion.stateName] === '' ||
      form[nextQuestion.stateName] === undefined
    )
      return;
    setRelatedsAnswered(true);
  }, [form]);

  useEffect(() => {
    if (questionOrder === null) return;
    setLock(true);
    // dispatch(setQuestionOrder(null));
    const questionState = form[nextQuestion.stateName];

    if (lock) return;
    setQuestions([...questions, nextQuestion]);
    setForm({ ...form });
  }, [buttonClicked]);

  return (
    <Wrapper>
      {questions.length > 0 &&
        questions.map((question, key) => (
          <div className={'enter anim'} key={key}>
            {QuesionTypeHandler(
              question,
              index,
              errorValue,
              formStateHandler,
              errorClassHandler,
              setError
            )}
          </div>
        ))}
    </Wrapper>
  );
};

export default Index;

import React, { useState, useEffect } from 'react';
import QuesionTypeHandler from '../../Handlers/QuestionTypeHandler';
import { useSelector, useDispatch } from 'react-redux';
import { setRelatedQuestionState } from '../../Redux/quizSlice';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  gap: 5rem;
  .disabled {
    pointer-events: none;
    transition: 0.4s;
  }
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
  order,
}) => {
  const [questions, setQuestions] = useState([fields]);

  const questionOrder = useSelector((state) => state.quiz.questionOrder);
  const [Answered, setAnswered] = useState([]);
  const [lock, setLock] = useState(false);
  const dispatch = useDispatch();
  const nextQuestion = relatedQuestions.find(
    (question) => question.questionId === questionOrder
  );

  const checkAnswerEmpty = () => {
    if (nextQuestion.questionId === 0) return false;
    if (
      form[nextQuestion.stateName] === '' ||
      form[nextQuestion.stateName] === undefined
    ) {
      return true;
    }
    return false;
  };

  const questionStateHandler = () => {
    questions.map((ctx) => {
      if (form[ctx.stateName] !== '')
        return setAnswered([...Answered, ctx.stateName]);
    });
  };

  useEffect(() => {
    if (questionOrder === null) return;
    if (nextQuestion) {
      setLock(false);
    }
    setRelatedsAnswered(false);
  }, [questionOrder]);

  useEffect(() => {
    if (questionOrder === null) return;

    if (checkAnswerEmpty()) return;
    setRelatedsAnswered(true);
  }, [form]);

  useEffect(() => {
    if (questionOrder === null) return;
    if (checkAnswerEmpty() && order === index) {
      setRelatedsAnswered(false);
    }
    setLock(true);
    if (lock) return;
    setQuestions([...questions, nextQuestion]);
    setForm({ ...form });
    questionStateHandler();
  }, [buttonClicked]);

  return (
    <Wrapper>
      {questions.length > 0 &&
        questions.map((question, key) => (
          <div
            className={`enter anim ${
              Answered.find((ctx) => ctx === question.stateName) && 'disabled'
            }`}
            key={key}
          >
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

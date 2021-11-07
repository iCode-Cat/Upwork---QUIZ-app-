import React, { useState, useEffect } from 'react';
import QuesionTypeHandler from '../../Handlers/QuestionTypeHandler';
import { useSelector } from 'react-redux';
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
}) => {
  const [questions, setQuestions] = useState([fields]);
  const questionOrder = useSelector((state) => state.quiz.questionOrder);

  console.log(relatedQuestions);
  useEffect(() => {
    if (questionOrder === null) return;
    setRelatedsAnswered(false);
    const nextQuestion = relatedQuestions.find(
      (question) => question.questionId === questionOrder
    );
    setQuestions([...questions, nextQuestion]);
    form[nextQuestion.stateName] = '';
    setForm({ ...form });
  }, [questionOrder]);

  useEffect(() => {
    if (questionOrder === null) return;
    const nextQuestion = relatedQuestions.find(
      (question) => question.questionId === questionOrder
    );
    if (form[nextQuestion.stateName] === '') return;
    setRelatedsAnswered(true);
  }, [form]);

  return (
    <Wrapper>
      {questions.length > 0 &&
        questions.map((question, key) => (
          <div key={key}>
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

import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  background: #fff;
  padding: 1rem;
  margin: 0 2rem;
  grid-column: 2/3;
  input {
    border: 1px solid #000;
    padding: 0.6rem 1rem;
  }
  #submit {
    background: #2196f3;
    color: #fff;
    border: none;
  }
`;

export default function App({ dispatch, setPopup, inputs, submitButton }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const state = useSelector((state) => state.quiz.userState);
  const onSubmit = (data) => dispatch(setPopup(true));

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((x) => (
        <input
          {...register(x.name, { required: x.required })}
          placeholder={x.placeholder}
          defaultValue={state?.[x.defaultState]}
        />
      ))}

      {errors.exampleRequired && <span>This field is required</span>}

      <input id='submit' type='submit' />
    </Form>
  );
}

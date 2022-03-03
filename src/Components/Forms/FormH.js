import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 3rem;
  background: #fff;
  margin: 0 2rem;
  grid-column: ${(props) => (props.layout === 'hr' ? '1/3' : '2/3')};
  input {
    grid-column: ${(props) => (props.layout === 'hr' ? 'unset' : '1/3')};
    border: 1px solid #000;
    padding: 0.6rem 1rem;
    height: 47px;
    ::placeholder {
      opacity: 1;
      color: #000;
    }
  }
  #submit {
    background: #2196f3;
    color: #fff;
    border: none;
    height: 55px;
    grid-column: 1/3;
    justify-self: center;
    width: 100%;
    max-width: ${(props) => (props.layout === 'hr' ? '400px' : 'unset')};
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

export default function App({
  dispatch,
  setPopup,
  inputs,
  submitButton,
  layout,
  connectionObject,
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const state = useSelector((state) => state.quiz.userState);
  const uuid = useSelector((state) => state.quiz.defaultJson.uuid);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (connectionObject.showCtaPopup) {
      dispatch(setPopup(true));
    }
    if (connectionObject.submissionOnCta) {
      window.location.href = '/submission?id=' + uuid;
    }
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Form layout={layout} onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((x) => (
        <input
          {...register(x.name, { required: x.required })}
          placeholder={`${x.placeholder} ${x.required && '*'}`}
          defaultValue={state?.[x.defaultState]}
        />
      ))}

      {errors.exampleRequired && <span>This field is required</span>}

      <input layout={layout} value={submitButton} id='submit' type='submit' />
    </Form>
  );
}

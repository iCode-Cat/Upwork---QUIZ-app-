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

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const state = useSelector((state) => state.quiz.userState);
  const onSubmit = (data) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        {...register('firstName', { required: true })}
        placeholder='First name*'
      />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        {...register('lastName', { required: true })}
        placeholder='Last name*'
      />
      <input
        defaultValue={state?.companyRole && state?.companyRole}
        {...register('jobTitle', { required: true })}
        placeholder='Job Title*'
      />
      <input
        defaultValue={state?.companyName && state?.companyName}
        {...register('companyName', { required: true })}
        placeholder='Company Name*'
      />
      <input
        defaultValue={state?.workEmail && state?.workEmail}
        {...register('email', { required: true })}
        placeholder='Email*'
      />
      <input
        {...register('phoneNumber', { required: true })}
        placeholder='Phone number*'
      />
      <input
        {...register('countryRegion', { required: true })}
        placeholder='Country/Region*'
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input id='submit' type='submit' />
    </Form>
  );
}

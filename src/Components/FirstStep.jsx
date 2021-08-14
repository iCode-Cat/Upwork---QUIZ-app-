import React from 'react';
import style from '../Scss/Steps.module.scss';
import Button from './Button';

const FirstStep = ({ HeroJSON, formStateHandler, form }) => {
  const step = HeroJSON.step1;
  const { button, fields, index } = step;
  console.log(fields);
  return (
    <section className={`${style.wrapper}  ${style.stepFirst}`} id='step1'>
      <div className={style.step}>
        <strong>Step {index}</strong>
        <p>of 3</p>
      </div>
      <div className={style.input_container}>
        <div className={style.input_box}>
          <p className={style.input_title}>{fields.email.text}</p>
          <input
            onChange={(e) =>
              formStateHandler({ field: 'email', value: e.target.value })
            }
            type='email'
            required
            className={style.input}
            placeholder={fields.email.placeholder}
          />
        </div>
        <div className={style.input_box}>
          <p className={style.input_title}>{fields.company.text}</p>
          <input
            onChange={(e) =>
              formStateHandler({ field: 'companyName', value: e.target.value })
            }
            type='text'
            placeholder={fields.company.placeholder}
            className={style.input}
          />
        </div>
      </div>
      <span
        onClick={() =>
          form.step === index && formStateHandler({ field: 'step', value: 2 })
        }
      >
        <Button
          size='btnLg'
          type={`${form.step === index ? 'btnBlue' : 'btnGray'}`}
          text={button}
        />
      </span>
    </section>
  );
};

export default FirstStep;

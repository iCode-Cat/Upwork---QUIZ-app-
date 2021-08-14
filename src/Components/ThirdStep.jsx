import React from 'react';
import style from '../Scss/Steps.module.scss';
import Button from './Button';

const ThirdStep = ({ HeroJSON, formStateHandler, form }) => {
  const step = HeroJSON.step3;
  const { button, fields, index } = step;
  return (
    <section className={`${style.wrapper}  ${style.stepFirst}`} id='step3'>
      <div className={style.step}>
        <strong>Step {index}</strong>
        <p>of 3</p>
      </div>
      <div className={style.input_container}>
        <div className={style.input_box}>
          <p className={style.input_title}>{fields.dropdown1.text}</p>
          <input
            onChange={(e) =>
              formStateHandler({ field: 'email', value: e.target.value })
            }
            type='email'
            required
            className={style.input}
            placeholder={fields.dropdown1.placeholder}
          />
        </div>
        <div className={style.input_box}>
          <p className={style.input_title}>{fields.dropdown2.text}</p>
          <input
            onChange={(e) =>
              formStateHandler({ field: 'companyName', value: e.target.value })
            }
            type='text'
            placeholder={fields.dropdown2.placeholder}
            className={style.input}
          />
        </div>
      </div>
      <span
        onClick={() =>
          form.step === index && formStateHandler({ field: 'step', value: 3 })
        }
      >
        <Button
          size='btnLg'
          type={`${form.step === index ? 'btnGreen' : 'btnGray'}`}
          text={button}
        />
      </span>
    </section>
  );
};

export default ThirdStep;

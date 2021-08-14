import React, { useState } from 'react';
import style from '../Scss/Steps.module.scss';
import Button from './Button';

const SecondStep = ({ HeroJSON, formStateHandler, form }) => {
  const step = HeroJSON.step2;
  const { button, fields, index } = step;

  const [shortAnswer, setShortAnswer] = useState({
    type: 'shortAnswer',
    isAnswered: false,
    index: null,
  });

  const [longAnswer, setLongAnswer] = useState({
    type: 'longAnswer',
    isAnswered: false,
    index: null,
  });

  return (
    <section className={`${style.wrapper} ${style.stepSecond}`} id='step2'>
      <div className={style.step}>
        <strong>Step {index}</strong>
        <p>of 3</p>
      </div>
      <div className={style.input_container}>
        <div className={style.input_box}>
          <p className={style.input_title}>{fields.question3.text}</p>
          <input
            onChange={(e) =>
              formStateHandler({
                field: 'numberEmployees',
                value: e.target.value,
              })
            }
            defaultValue='100'
            step='50'
            type='number'
            className={style.input}
          />
        </div>
        <div className={style.input_box}>
          <p className={style.input_title}>{fields.question2.text}</p>
          <div
            style={{
              display: 'grid',
              gridAutoFlow: 'column',
              justifyContent: 'flex-start',
              gap: '2.5rem',
            }}
          >
            {fields.question1.buttons.map((btn, i) => (
              <span
                onClick={() => {
                  setShortAnswer({
                    ...shortAnswer,
                    isAnswered: true,
                    index: i,
                  });
                  // numberEmployees: null,
                  formStateHandler({
                    field: 'youWorkingCloud',
                    value: btn.text,
                  });
                }}
                key={i}
              >
                <Button
                  text={btn.text}
                  size='btnMd'
                  type={
                    shortAnswer.isAnswered && shortAnswer.index === i
                      ? 'btnBlueMutaiton'
                      : 'btnWhite'
                  }
                />
              </span>
            ))}
          </div>
        </div>
        <div className={style.input_box}>
          <p className={style.input_title}>{fields.question2.text}</p>
          <div
            style={{
              display: 'grid',
              gridAutoFlow: 'column',
              justifyContent: 'flex-start',
              gap: '2.5rem',
            }}
          >
            {fields.question2.buttons.map((btn, i) => (
              <span
                onClick={() => {
                  setLongAnswer({
                    ...longAnswer,
                    isAnswered: true,
                    index: i,
                  });
                  // numberEmployees: null,
                  formStateHandler({
                    field: 'youWorkingCloud',
                    value: btn.text,
                  });
                }}
                key={i}
              >
                <Button
                  text={btn.text}
                  size='btnMd'
                  type={
                    longAnswer.isAnswered && longAnswer.index === i
                      ? 'btnBlueMutaiton'
                      : 'btnWhite'
                  }
                />
              </span>
            ))}
          </div>
        </div>
      </div>
      <span
        style={{ paddingBottom: '5rem' }}
        onClick={() =>
          form.step === index && formStateHandler({ field: 'step', value: 3 })
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

export default SecondStep;

import React, { useState } from 'react';
import style from '../../Scss/Steps.module.scss';
import Button from '../Button';
const Options = ({
  errorValue,
  fields,
  formStateHandler,
  errorClassHandler,
}) => {
  const [shortAnswer, setShortAnswer] = useState({
    type: 'shortAnswer',
    isAnswered: false,
    index: null,
  });

  return (
    <div className={style.input_box}>
      <p className={style.input_title}>{fields.text}</p>
      <div
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
          justifyContent: 'flex-start',
          gap: '2.5rem',
        }}
      >
        {fields.options.map((btn, i) => (
          <span
            key={i}
            onClick={() => {
              setShortAnswer({
                ...shortAnswer,
                isAnswered: true,
                index: i,
              });
              // numberEmployees: null,
              formStateHandler({
                field: fields.stateName,
                value: btn.text,
              });
            }}
          >
            <Button
              icon={btn.icon}
              error={`${
                errorValue && errorClassHandler(fields.stateName) ? true : false
              }`}
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
  );
};

export default Options;

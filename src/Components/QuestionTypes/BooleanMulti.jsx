import React, { useState, useEffect } from 'react';
import style from '../../Scss/Steps.module.scss';
import Button from '../Button';
const BooleanMulti = ({
  errorValue,
  fields,
  formStateHandler,
  errorClassHandler,
}) => {
  const [shortAnswer, setShortAnswer] = useState([]);

  const stateAnswerHandler = (i, btn) => {
    if (shortAnswer.find((answer) => answer.index === i)) {
      const filter = shortAnswer.filter((item) => item.index !== i);
      setShortAnswer(filter);
      return;
    }
    setShortAnswer([
      ...shortAnswer,
      {
        isAnswered: true,
        answer: btn.text,
        index: i,
      },
    ]);
  };

  useEffect(() => {
    formStateHandler({
      field: fields.stateName,
      value: shortAnswer.length < 1 ? '' : shortAnswer,
    });
  }, [shortAnswer]);

  return (
    <div className={style.input_box}>
      <p className={style.input_title}>{fields.text}</p>
      <div className={style.boolean_layout}>
        {fields.options.map((btn, i) => (
          <span
            key={i}
            onClick={() => {
              stateAnswerHandler(i, btn);
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
                shortAnswer.find((answer) => answer.index === i)
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

export default BooleanMulti;

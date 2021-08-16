import React from 'react';
import style from '../../Scss/Steps.module.scss';
const Input = ({ errorValue, fields, formStateHandler, errorClassHandler }) => {
  return (
    <div className={style.input_box}>
      <p className={style.input_title}>{fields.text}</p>
      <input
        onChange={(e) =>
          formStateHandler({
            field: fields.stateName,
            value: e.target.value,
          })
        }
        type={fields.validation}
        required
        className={`${style.input} ${
          errorValue && errorClassHandler(fields.stateName)
            ? style.submitError
            : ''
        }`}
        placeholder={fields.placeholder}
      />
    </div>
  );
};

export default Input;

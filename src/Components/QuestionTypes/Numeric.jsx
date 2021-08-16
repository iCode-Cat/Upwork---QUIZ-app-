import React from 'react';
import style from '../../Scss/Steps.module.scss';
const Numeric = ({
  errorValue,
  fields,
  formStateHandler,
  errorClassHandler,
}) => {
  return (
    <div className={style.input_box}>
      <p className={style.input_title}>{fields.text}</p>
      <input
        required
        onChange={(e) =>
          formStateHandler({
            field: fields.stateName,
            value: Number(e.target.value),
          })
        }
        placeholder={fields.initialValue}
        min='0'
        max='999999'
        type='number'
        className={`${style.input} ${
          errorValue && errorClassHandler(fields.stateName)
            ? style.submitError
            : ''
        }`}
      />
    </div>
  );
};

export default Numeric;

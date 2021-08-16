import React from 'react';
import style from '../../Scss/Steps.module.scss';
const Increment = ({
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
            value: e.target.value,
          })
        }
        defaultValue='100'
        step='50'
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

export default Increment;

import React, { useState, useEffect } from 'react';
import style from '../../Scss/Steps.module.scss';

import DropdownList from '../DropdownList';

const Dropdown = ({
  errorValue,
  fields,
  formStateHandler,
  errorClassHandler,
  index,
  order,
  disableNextButtonHandler,
  form,
  nextButtonHandler,
}) => {
  const [toggleShort, setToggleShort] = useState({
    isActive: false,
    state: '',
  });

  useEffect(() => {
    formStateHandler({
      field: fields.stateName,
      value: toggleShort.state,
    });
    nextButtonHandler();
  }, [toggleShort]);

  useEffect(() => {
    if (fields.skip && form[fields.stateName].length === 0 && order === index) {
      formStateHandler({
        field: fields.stateName,
        value: 'skip',
      });
    }
    if (order === index) {
      disableNextButtonHandler(!fields.skip);
    }
  }, [order]);

  return (
    <div className={style.input_box}>
      <p className={style.input_title}>{fields.text}</p>
      <div className={style.relativeWrapper}>
        <input
          style={{ cursor: 'pointer' }}
          onClick={() => {
            disableNextButtonHandler(false);
            setToggleShort({
              ...toggleShort,
              isActive: !toggleShort.isActive,
            });
          }}
          readOnly
          type='text'
          required
          value={toggleShort.state}
          className={`${style.input} ${
            errorValue && errorClassHandler(fields.stateName)
              ? style.submitError
              : ''
          }`}
          placeholder={fields.placeholder}
        />
        {toggleShort.isActive && (
          <DropdownList
            state={toggleShort}
            setState={setToggleShort}
            list={fields.options}
          />
        )}
        <i className={`fas fa-chevron-up ${style.icon}`}></i>
      </div>
    </div>
  );
};

export default Dropdown;

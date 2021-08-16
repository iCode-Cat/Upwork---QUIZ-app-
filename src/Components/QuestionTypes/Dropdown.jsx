import React, { useState, useEffect } from 'react';
import style from '../../Scss/Steps.module.scss';
import DropdownList from '../DropdownList';
const Dropdown = ({
  errorValue,
  fields,
  formStateHandler,
  errorClassHandler,
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
  }, [toggleShort]);

  return (
    <div className={style.input_box}>
      <p className={style.input_title}>{fields.text}</p>
      <div className={style.dropDownWrapper}>
        <input
          style={{ cursor: 'pointer' }}
          onClick={() => {
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
      </div>
    </div>
  );
};

export default Dropdown;

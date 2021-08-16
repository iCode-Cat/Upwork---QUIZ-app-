import React from 'react';
import style from '../Scss/DropDown.module.scss';

const DropdownList = ({ list, state, setState }) => {
  return (
    <section className={style.wrapper}>
      {list.map((option, index) => (
        <h1
          key={index}
          onClick={() =>
            setState({ ...state, state: option.text, isActive: false })
          }
          key={index}
          className={style.item}
          key={index}
        >
          {option.text}
        </h1>
      ))}
    </section>
  );
};

export default DropdownList;

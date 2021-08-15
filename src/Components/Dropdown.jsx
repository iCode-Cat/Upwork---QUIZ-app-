import React from 'react';
import style from '../Scss/DropDown.module.scss';

const dropDown = [
  {
    name: 'option',
  },
  {
    name: 'option',
  },
  {
    name: 'option',
  },
];

const Dropdown = ({ list, state, setState }) => {
  console.log(state);
  return (
    <section className={style.wrapper}>
      {list.drops.length > 1 &&
        list.drops.map((option, index) => (
          <h1
            onClick={() =>
              setState({ ...state, state: option.answer, isActive: false })
            }
            key={index}
            className={style.item}
            key={index}
          >
            {option.answer}
          </h1>
        ))}
    </section>
  );
};

export default Dropdown;

import React from 'react';
import style from '../Scss/DropDown.module.scss';
import { useDispatch } from 'react-redux';
import { setQuestionOrder } from '../Redux/quizSlice';

const DropdownList = ({ list, state, setState }) => {
  const dispatch = useDispatch();

  return (
    <section className={style.wrapper}>
      {list.map((option, index) => (
        <h1
          key={index}
          onClick={() => {
            dispatch(setQuestionOrder(option.callQuestion));
            setState({ ...state, state: option.text, isActive: false });
          }}
          className={style.item}
        >
          {option.text}
        </h1>
      ))}
    </section>
  );
};

export default DropdownList;

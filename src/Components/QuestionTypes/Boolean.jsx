import React, { useState, useEffect } from 'react';
import style from '../../Scss/Steps.module.scss';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import {
  pushTags,
  setNextButton,
  setQuestionOrder,
} from '../../Redux/quizSlice';
import { temp } from '../../Redux/dynamicSlice';

const Options = ({
  errorValue,
  fields,
  formStateHandler,
  errorClassHandler,
  checkEmpty,
  nextButtonHandler,
  disableNextButtonHandler,
  order,
  index,
  form,
}) => {
  const dispatch = useDispatch();
  const [shortAnswer, setShortAnswer] = useState({
    type: 'shortAnswer',
    isAnswered: false,
    index: null,
  });

  useEffect(() => {
    if (!shortAnswer.isAnswered) return;
    // disableNextButtonHandler(fields.skip ? true : false);
    if (fields.automateNext) {
      checkEmpty();
    }
    nextButtonHandler();
  }, [shortAnswer]);

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
    if (fields.automateNext && order === index) {
      dispatch(setNextButton(false));
    }
  }, [order]);

  return (
    <div className={style.input_box}>
      {/* <p className={style.input_title}>{fields.text}</p> */}
      <div className={style.boolean_layout}>
        {fields.options.map((btn, i) => (
          <span
            key={i}
            onClick={() => {
              disableNextButtonHandler(false);
              dispatch(setNextButton(true));
              setShortAnswer({
                ...shortAnswer,
                isAnswered: true,
                index: i,
              });
              dispatch(setQuestionOrder(btn.callQuestion));
              // numberEmployees: null,
              formStateHandler({
                field: fields.stateName,
                value: btn.text,
              });

              dispatch(pushTags(btn.conditionList.map((x) => x.name)));
              // Deploy temp data of dynamic sections
              // dispatch(
              //   temp([
              //     btn.callRecommendation,
              //     btn.callWorryAbout,
              //     btn.callShouldDo,
              //   ])
              // );
            }}
          >
            <Button
              icon={btn.icon}
              error={`${
                errorValue && errorClassHandler(fields.stateName) ? true : false
              }`}
              text={btn.text}
              size='btnSm'
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

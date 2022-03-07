import Text from '../Components/QuestionTypes/Text';
import Numeric from '../Components/QuestionTypes/Numeric';
import Boolean from '../Components/QuestionTypes/Boolean';
import Dropdown from '../Components/QuestionTypes/Dropdown';
import BooleanMulti from '../Components/QuestionTypes/BooleanMulti';
import Context from '../Components/QuestionTypes/Context';
import { setNextButton, setDisableNextButton } from '../Redux/quizSlice';
import { useDispatch } from 'react-redux';

// Handle question types according to JSON
const QuestionTypeHandler = (
  fields,
  index,
  errorValue,
  formStateHandler,
  errorClassHandler,
  checkEmpty,
  order,
  form
) => {
  const dispatch = useDispatch();

  const nextButtonHandler = () => {
    setTimeout(() => {
      dispatch(setNextButton(true));
    }, 500);
  };

  const disableNextButtonHandler = (boolean) => {
    dispatch(setDisableNextButton(boolean));
  };

  if (fields.questionType === 'text') {
    return (
      <Text
        nextButtonHandler={nextButtonHandler}
        disableNextButtonHandler={disableNextButtonHandler}
        order={order}
        index={index}
        errorValue={errorValue}
        fields={fields}
        formStateHandler={formStateHandler}
        errorClassHandler={errorClassHandler}
        form={form}
      />
    );
  }
  if (fields.questionType === 'numeric') {
    return (
      <Numeric
        nextButtonHandler={nextButtonHandler}
        disableNextButtonHandler={disableNextButtonHandler}
        order={order}
        index={index}
        errorValue={errorValue}
        fields={fields}
        formStateHandler={formStateHandler}
        errorClassHandler={errorClassHandler}
        form={form}
      />
    );
  }
  if (fields.questionType === 'boolean') {
    return (
      <Boolean
        nextButtonHandler={nextButtonHandler}
        disableNextButtonHandler={disableNextButtonHandler}
        order={order}
        index={index}
        errorValue={errorValue}
        fields={fields}
        formStateHandler={formStateHandler}
        errorClassHandler={errorClassHandler}
        checkEmpty={checkEmpty}
        form={form}
      />
    );
  }
  if (fields.questionType === 'booleanMulti') {
    return (
      <BooleanMulti
        nextButtonHandler={nextButtonHandler}
        disableNextButtonHandler={disableNextButtonHandler}
        order={order}
        index={index}
        errorValue={errorValue}
        fields={fields}
        formStateHandler={formStateHandler}
        errorClassHandler={errorClassHandler}
        form={form}
      />
    );
  }
  if (fields.questionType === 'dropdown') {
    return (
      <Dropdown
        nextButtonHandler={nextButtonHandler}
        disableNextButtonHandler={disableNextButtonHandler}
        order={order}
        index={index}
        errorValue={errorValue}
        fields={fields}
        formStateHandler={formStateHandler}
        errorClassHandler={errorClassHandler}
        form={form}
      />
    );
  }
  if (fields.questionType === 'context') {
    return (
      <Context
        nextButtonHandler={nextButtonHandler}
        disableNextButtonHandler={disableNextButtonHandler}
        order={order}
        index={index}
        errorValue={errorValue}
        fields={fields}
        formStateHandler={formStateHandler}
        errorClassHandler={errorClassHandler}
        form={form}
      />
    );
  }
};

export default QuestionTypeHandler;

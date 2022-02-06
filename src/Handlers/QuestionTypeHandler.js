import Text from '../Components/QuestionTypes/Text';
import Numeric from '../Components/QuestionTypes/Numeric';
import Boolean from '../Components/QuestionTypes/Boolean';
import Dropdown from '../Components/QuestionTypes/Dropdown';
import BooleanMulti from '../Components/QuestionTypes/BooleanMulti';
import Context from '../Components/QuestionTypes/Context';

// Handle question types according to JSON
const QuestionTypeHandler = (
  fields,
  index,
  errorValue,
  formStateHandler,
  errorClassHandler
) => {
  if (fields.questionType === 'text') {
    return (
      <Text
        key={index}
        errorValue={errorValue}
        fields={fields}
        formStateHandler={formStateHandler}
        errorClassHandler={errorClassHandler}
      />
    );
  }
  if (fields.questionType === 'numeric') {
    return (
      <Numeric
        key={index}
        errorValue={errorValue}
        fields={fields}
        formStateHandler={formStateHandler}
        errorClassHandler={errorClassHandler}
      />
    );
  }
  if (fields.questionType === 'boolean') {
    return (
      <Boolean
        key={index}
        errorValue={errorValue}
        fields={fields}
        formStateHandler={formStateHandler}
        errorClassHandler={errorClassHandler}
      />
    );
  }
  if (fields.questionType === 'booleanMulti') {
    return (
      <BooleanMulti
        key={index}
        errorValue={errorValue}
        fields={fields}
        formStateHandler={formStateHandler}
        errorClassHandler={errorClassHandler}
      />
    );
  }
  if (fields.questionType === 'dropdown') {
    return (
      <Dropdown
        key={index}
        errorValue={errorValue}
        fields={fields}
        formStateHandler={formStateHandler}
        errorClassHandler={errorClassHandler}
      />
    );
  }
  if (fields.questionType === 'context') {
    return (
      <Context
        key={index}
        index={index}
        errorValue={errorValue}
        fields={fields}
        formStateHandler={formStateHandler}
        errorClassHandler={errorClassHandler}
      />
    );
  }
};

export default QuestionTypeHandler;

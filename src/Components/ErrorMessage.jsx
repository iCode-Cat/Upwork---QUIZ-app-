import React from 'react';

const ErrorMessage = ({ checked }) => {
  const errorMsg = {
    color: '#ff8282',
    fontSize: '1.5rem',
    whiteSpace: 'nowrap',
    fontWeight: '400',
    marginLeft: '2rem',
  };

  return (
    <span style={errorMsg}>
      {!checked
        ? 'Accept the term and conditions'
        : 'Fill all red fields before next step'}
    </span>
  );
};

export default ErrorMessage;

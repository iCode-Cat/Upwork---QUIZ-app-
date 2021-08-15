import React from 'react';

const ErrorMessage = () => {
  const errorMsg = {
    color: '#ff8282',
    fontSize: '1.5rem',
    whiteSpace: 'nowrap',
    fontWeight: '400',
    marginLeft: '2rem',
  };

  return <span style={errorMsg}>Fill all red fields before next step</span>;
};

export default ErrorMessage;

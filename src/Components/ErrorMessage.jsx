import React from 'react';

const ErrorMessage = ({ checked, errorValue }) => {
  const errorMsg = {
    display: 'block',
    opacity: `${errorValue ? '1' : '0'}`,
    color: '#ff8282',
    fontSize: '1.5rem',
    fontWeight: '400',
    marginLeft: '1rem',
  };

  return (
    <span style={errorMsg}>
      {!checked
        ? ' Please accept the Terms of Service and Privacy Policy'
        : 'Fill all red fields before next step'}
    </span>
  );
};

export default ErrorMessage;

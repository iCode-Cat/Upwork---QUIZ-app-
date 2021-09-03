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
      {!checked ? (
        <p style={{ fontSize: '1.3rem', display: 'inline-block' }}>
          Please, accept service terms and conditions first
        </p>
      ) : (
        'Fill all red fields before next step'
      )}
    </span>
  );
};

export default ErrorMessage;

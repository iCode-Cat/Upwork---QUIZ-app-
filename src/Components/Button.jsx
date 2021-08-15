import React from 'react';
import '../Scss/Button.scss';

const Button = ({ text, type, size, shadow, submit, error }) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={`btn_settings ${type} ${size} ${shadow && 'btnShadow'} ${
        error === 'true' ? 'submitError' : ''
      }`}
    >
      {text}
    </button>
  );
};

export default Button;

import React from 'react';
import '../Scss/Button.scss';

const Button = ({ text, type, size, shadow }) => {
  return (
    <button className={`btn_settings ${type} ${size} ${shadow && 'btnShadow'}`}>
      {text}
    </button>
  );
};

export default Button;

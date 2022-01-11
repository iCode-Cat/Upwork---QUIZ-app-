import React from 'react';
import '../Scss/Button.scss';

const Button = ({ text, type, size, shadow, submit, error, icon }) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={`btn_settings ${type} ${size} ${shadow && 'btnShadow'} ${
        error === 'true' ? 'submitError' : ''
      }`}
    >
      {/* {icon || icon !== 'No' ? (
        <i
          style={{
            fontSize: '1.75rem',
            marginRight: '0.8rem',
            opacity: '50%',
          }}
          className={`fas ${icon}`}
        ></i>
      ) : (
        ''
      )} */}
      {text}
    </button>
  );
};

export default Button;

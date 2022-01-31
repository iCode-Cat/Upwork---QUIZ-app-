import React from 'react';
import '../Scss/Button.scss';

const Button = ({
  text,
  type,
  size,
  shadow,
  submit,
  error,
  icon,
  onClick,
  className = 'none',
}) => {
  return (
    <button
      onClick={onClick}
      type={submit ? 'submit' : 'button'}
      className={`${className} btn_settings ${type} ${size} ${
        shadow && 'btnShadow'
      } ${error === 'true' ? 'submitError' : ''}`}
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

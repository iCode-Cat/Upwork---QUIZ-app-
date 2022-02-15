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
  color,
  link,
  onClick,
  style = {},
  className = 'none',
}) => {
  return (
    <button
      style={{ ...style, background: color, color: `${color && '#FFF'}` }}
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
      {link ? (
        <a style={{ color: 'unset' }} target='_blank' href={link}>
          {text}
        </a>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;

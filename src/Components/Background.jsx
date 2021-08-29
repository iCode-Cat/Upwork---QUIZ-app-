import React from 'react';

const Background = (props) => {
  return (
    <div
      style={{
        background: props.bg ? 'url("/background.jpg")' : '#E4F6FC',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        display: 'flex',
        alignItems: 'center',
        // width: '98.7vw',
        justifyContent: 'center',
        // marginTop: '9.8rem',
      }}
    >
      {props.children}
    </div>
  );
};

export default Background;

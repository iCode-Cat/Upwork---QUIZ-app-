import React from 'react';

const Background = (props) => {
  if (props.report) {
    return (
      <div
        style={{
          background: props.bg ? 'url("/reportBG.jpg")' : '#ddf2f7',
          backgroundPosition: 'bottom',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
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
  }
  return (
    <div
      style={{
        background: props.bg ? 'url("/background.jpg")' : '#ddf2f7',
        backgroundPosition: 'bottom',
        backgroundSize: '100%',
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

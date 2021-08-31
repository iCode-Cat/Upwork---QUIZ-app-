import React from 'react';

const Title = ({ mainTitle }) => {
  return (
    <p
      style={{ textAlign: 'center' }}
      className='stats-title'
      dangerouslySetInnerHTML={{ __html: mainTitle }}
    />
  );
};

export default Title;

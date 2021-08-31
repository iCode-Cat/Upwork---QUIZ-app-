import React from 'react';

const Title = ({ mainTitle }) => {
  return (
    <p
      className='stats-title'
      dangerouslySetInnerHTML={{ __html: mainTitle }}
    />
  );
};

export default Title;

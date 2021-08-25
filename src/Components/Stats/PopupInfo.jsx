import React from 'react';
import styled from 'styled-components';
import info from '../../Images/info.svg';

const PopupInfo = ({ disclaimer, isVisible, label }) => {
  const Wrapper = styled.section`
    display: ${isVisible ? 'grid' : 'none'};
    grid-template-columns: auto auto;
    gap: 1.4rem;
    background: #fff;
    border-radius: 8px;
    position: absolute;
    width: 100vw;
    max-width: ${label ? '455px' : '755px'};
    padding: 2.4rem;
    bottom: 30px;
    margin-left: ${label ? '-20.3rem' : '6.3rem'};
    transition: 1s;
    cursor: text;
  `;

  const Text = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
  `;

  return (
    <Wrapper>
      <img src={info} alt='' />
      <Text dangerouslySetInnerHTML={{ __html: disclaimer.content }} />
    </Wrapper>
  );
};

export default PopupInfo;

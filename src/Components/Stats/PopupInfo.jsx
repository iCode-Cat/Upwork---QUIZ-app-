import React from 'react';
import styled from 'styled-components';
import info from '../../Images/info.svg';

const PopupInfo = ({ disclaimer, isVisible }) => {
  const Wrapper = styled.section`
    display: ${isVisible ? 'grid' : 'none'};
    grid-template-columns: auto auto;
    gap: 1.4rem;
    background: #fff;
    border-radius: 8px;
    position: absolute;
    width: 100vw;
    max-width: 755px;
    padding: 2.4rem;
    bottom: 30px;
    margin-left: 6.3rem;
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

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  position: relative;
  padding: 4rem;
  gap: 0 1.5rem;
  background: ${(props) => props.color};
  max-width: 550px;
  box-shadow: 0 0 20px 0 rgb(33 33 33 / 9%);
  transition: 0.2s;
  cursor: pointer;
  .title {
    font-size: 2.9rem;
    font-weight: 700;
    line-height: 30px;
    color: #1bc263;
  }
  .description {
    grid-column: 2/3;
    color: #212121;
    font-weight: 500;
    margin-top: 1rem;
    font-size: 2rem;
  }
  .img {
    width: 60px;
  }
  .triangle {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 20px 20px 0 20px;
    border-color: #fff transparent transparent transparent;
    bottom: -20px;
    justify-self: center;
  }
`;

const Card = ({
  onToggle,
  onClick,
  buttonColorOnToggle,
  buttonColorOffToggle,
  buttonTitle,
  buttonSubtitle,
  buttonIcon,
  buttonTitleColor,
}) => {
  return (
    <Wrapper
      onClick={onClick}
      color={onToggle ? buttonColorOnToggle : buttonColorOffToggle}
    >
      <img
        className='img'
        src='https://www.authomize.com/wp-content/themes/authomize/placeholders/get a assesment icon.svg'
        alt='icon'
      />
      <div>
        <p style={{ color: buttonTitleColor }} className='title'>
          {buttonTitle}
        </p>
        <p className='description'>{buttonSubtitle}</p>
      </div>
      <div
        style={{ opacity: `${onToggle ? 1 : 0}` }}
        className='triangle'
      ></div>
    </Wrapper>
  );
};

export default Card;

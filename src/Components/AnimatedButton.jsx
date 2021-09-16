import React from 'react';
import styled from 'styled-components';
import Pin from '../Images/Pin.svg';
import { useSelector } from 'react-redux';

const Wrapper = styled.a`
  position: relative;
  display: grid;
  place-items: center;
  margin: 9rem 0;
  cursor: pointer;
`;

const Text = styled.p`
  position: absolute;
  color: hsla(0, 0%, 100%, 1);
  font-weight: 700;
  font-size: 1.8rem;
  margin-top: 1rem;
`;

const AnimatedButton = ({ lastSection }) => {
  return (
    <Wrapper href='/' className='stats-animated-button'>
      <img className='stats-pin' src={Pin} alt='svg' />
      <Text>{lastSection.buttonText}</Text>
      <svg
        width='488'
        height='121'
        viewBox='0 0 488 121'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='Component 3'>
          <g id='Group 20'>
            <rect
              id='layer2'
              x='4.5'
              y='0.5'
              width='480'
              height='120'
              rx='60'
              fill='#E6F3E6'
            />
            <rect
              id='layer1'
              x='21.5'
              y='15.5'
              width='446'
              height='90'
              rx='45'
              fill='#D0E8D0'
            />
          </g>
          <g id='Buttons'>
            <rect
              x='41.5'
              y='30.5'
              width='406'
              height='60'
              rx='30'
              fill='#4CAF50'
            />
            <g id='bi:file-earmark-arrow-up-fill'>
              <g id='Group'>
                <path
                  id='Vector'
                  d='M85.6163 50.5H79C78.337 50.5 77.7011 50.7634 77.2322 51.2322C76.7634 51.7011 76.5 52.337 76.5 53V68C76.5 68.663 76.7634 69.2989 77.2322 69.7678C77.7011 70.2366 78.337 70.5 79 70.5H89C89.663 70.5 90.2989 70.2366 90.7678 69.7678C91.2366 69.2989 91.5 68.663 91.5 68V56.3837C91.4999 56.0523 91.3682 55.7344 91.1337 55.5L86.5 50.8663C86.2656 50.6318 85.9477 50.5001 85.6163 50.5ZM85.875 54.875V52.375L89.625 56.125H87.125C86.7935 56.125 86.4755 55.9933 86.2411 55.7589C86.0067 55.5245 85.875 55.2065 85.875 54.875Z'
                  fill='white'
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </Wrapper>
  );
};

export default AnimatedButton;

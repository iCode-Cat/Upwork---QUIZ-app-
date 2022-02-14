import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-top: 2.4rem;
  border-radius: 30px;
  background: var(--lightBlue);
  height: 46px;
`;
const ToggleButton = styled.button`
  padding: 1.2rem 2.4rem;
  height: 100%;
  border-radius: 30px;
  font-size: 1.8rem;
  font-weight: 700;
  background: ${(props) => (props.active ? 'var(--blue)' : 'unset')};
  color: ${(props) => (props.active ? '#FFF' : 'var(--blue)')};
  transition: 0.5s;
`;

const Toggle = ({ tabMenus, toggle, setToggle }) => {
  return (
    <Wrapper>
      {tabMenus.map((item, index) => (
        <ToggleButton
          key={index}
          onClick={() => {
            setToggle(index);
          }}
          active={toggle === index ? true : false}
        >
          {item.name}
        </ToggleButton>
      ))}
    </Wrapper>
  );
};

export default Toggle;

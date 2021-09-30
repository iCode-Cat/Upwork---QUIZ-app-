import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  padding-bottom: 1.3rem;
  font-weight: 700;
  font-size: 1.8rem;
  color: ${(props) => (props.toggle ? '#34314C' : '#828282')};
  border-bottom: ${(props) =>
    props.toggle ? '2px #2196f3 solid' : '2px #2195f30 solid'};
`;

const Tab = ({ tabname, setTab, index, active, tab }) => {
  return (
    active && (
      <Text toggle={tab === index ? true : false} onClick={() => setTab(index)}>
        {tabname}
      </Text>
    )
  );
};

export default Tab;

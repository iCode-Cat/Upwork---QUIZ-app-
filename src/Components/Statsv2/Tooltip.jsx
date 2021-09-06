import React from 'react';
import styled from 'styled-components';

//   const [isVisible, setIsVisible] = useState(false);
const Wrapper = styled.section`
  display: ${(props) => (props.isVisible ? 'grid' : 'none')};
  grid-template-columns: 0fr auto;
  gap: 1.3rem;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  position: absolute;
  width: 100vw;
  max-width: 452px;
  padding: 2.4rem;
  bottom: 30px;
  left: -190px;
  transition: 1s;
  cursor: text;
  box-shadow: 0px 2px 20px 0px #5d606024;
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  grid-column: 1/3;
`;

const Title = styled.p`
  margin-top: 0.7rem;
  font-size: 1.6rem;
  font-weight: 700;
`;

const Tooltip = ({ isVisible, data }) => {
  return (
    <Wrapper isVisible={isVisible}>
      <i class='fas fa-info-circle'></i>
      <Title>{data.title}</Title>
      <Text>{data.content}</Text>
    </Wrapper>
  );
};

export default Tooltip;

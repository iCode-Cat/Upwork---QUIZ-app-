import React from 'react';
import styled from 'styled-components';

//   const [isVisible, setIsVisible] = useState(false);
const Wrapper = styled.section`
  display: ${(props) => (props.isVisible ? 'grid' : 'none')};
  grid-template-columns: 0fr auto;
  gap: 1.3rem;
  align-items: center;
  justify-items: flex-start;
  text-align: left;
  background: #fff;
  color: #000;
  border-radius: 8px;
  right: 0;
  bottom: 20px;
  position: absolute;
  width: 100vw;
  max-width: 452px;
  padding: 2.4rem;
  transition: 1s;
  i {
    font-size: 1.6rem !important;
  }
  cursor: text;
  box-shadow: 0px 2px 20px 0px #5d606024;
  @media (max-width: 50em) {
    z-index: 999;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 165px;
    width: 100vw;
  }
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

const BarToolTip = ({ isVisible, data, className }) => {
  return (
    <Wrapper className={`tooltip-icon ${className}`} isVisible={isVisible}>
      <i class='fas fa-info-circle'></i>
      <Title>{data?.title}</Title>
      <Text>{data?.content}</Text>
    </Wrapper>
  );
};

export default BarToolTip;

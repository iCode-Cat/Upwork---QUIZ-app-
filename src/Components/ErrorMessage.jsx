import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  display: block;
  opacity: ${(props) => (props.errorValue ? '1' : '0')};
  color: #ff8282;
  font-size: 1.5rem;
  font-weight: 400;
  margin-left: 1rem;
  margin-top: 1rem;
  @media (max-width: 50em) {
    margin-top: 0.5rem;
    height: 30px;
  }
`;

const ErrorMessage = ({ checked, errorValue }) => {
  return (
    <Wrapper errorValue={errorValue}>
      {!checked
        ? ' Please accept the Terms of Service and Privacy Policy'
        : 'Fill all red fields before next step'}
    </Wrapper>
  );
};

export default ErrorMessage;

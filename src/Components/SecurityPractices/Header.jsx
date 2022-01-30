import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-size: 3.8rem;
  font-weight: 700;
  color: #34314c;
  text-align: center;

  @media (max-width: 50em) {
    margin-bottom: unset;
    margin-top: 2rem;
    font-size: 1.8rem;
    max-width: 243px;
  }
`;

const SubTitle = styled.p`
  margin-bottom: 4rem;
  text-align: center;
  font-size: 2rem;
  color: #34314c;

  @media (max-width: 50em) {
    margin-bottom: unset;
    font-size: 1.5rem;
    max-width: 243px;
  }
`;

const Header = ({ title, companyName, subTitle }) => {
  return (
    <div>
      <Text>
        {title.replace('{CompanyName}', companyName ? companyName : '')}
      </Text>
      <SubTitle> {subTitle}</SubTitle>
    </div>
  );
};

export default Header;

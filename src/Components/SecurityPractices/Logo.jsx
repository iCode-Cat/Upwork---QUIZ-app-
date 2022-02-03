import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  max-width: 314px;
  grid-column: ${(props) => (props.logoAlign === 'right' ? '2' : '1')};
  grid-row: 1;
  @media (max-width: 50em) {
    max-width: 217px;
    grid-column: unset;
    grid-row: unset;
  }
`;

const Logo = ({ src, logoAlign }) => {
  return <Image height={314} logoAlign={logoAlign} src={src} />;
};

export default Logo;

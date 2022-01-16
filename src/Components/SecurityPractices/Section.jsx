import React from 'react';
import styled from 'styled-components';
import List from './List';
import Logo from './Logo';
import Title from './Title';
import Wrapper from './Wrapper';
import SectionGrade from '../SectionGrade';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  place-items: center;
  gap: 10rem;
  margin-top: 6rem;
  @media (max-width: 50em) {
    /* padding: 4rem 3rem; */
    margin-top: 0rem;
    grid-template-columns: auto;
    gap: 4rem;
  }
`;

const Section = ({
  active,
  image,
  list,
  sectionGrade,
  title,
  logoAlign,
  data,
}) => {
  if (!active) return '';
  return (
    <Wrapper logoAlign={logoAlign}>
      <Title>{title}</Title>
      <Container>
        <Logo logoAlign={logoAlign} src={image} />
        <List data={data} />
      </Container>
      {sectionGrade && <SectionGrade />}
    </Wrapper>
  );
};

export default Section;

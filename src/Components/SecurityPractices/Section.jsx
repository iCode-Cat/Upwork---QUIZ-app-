import React, { useState } from 'react';
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

const ListTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #34314c;
  @media (max-width: 50em) {
    font-size: 1.6rem;
  }
`;
const ListContent = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #565656;
  @media (max-width: 50em) {
    font-size: 1.2rem;
  }
`;

const InCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

const Section = ({
  active,
  image,
  list,
  sectionGrade,
  title,
  logoAlign,
  data,
  subtitle,
  // linkTitle,
}) => {
  const [inCard, setInCard] = useState(false);
  const [inCardData, setInCardData] = useState({
    inCardTitle: '',
    inCardSubtitle: '',
    mainCardTitle: '',
    mainCardContent: '',
    inCardLogo: '',
  });
  console.log(inCard);
  if (!active) return '';
  return inCard ? (
    <Wrapper logoAlign={logoAlign}>
      <Title>{inCardData.inCardTitle}</Title>
      {subtitle && (
        <SubTitle onClick={() => setInCard(false)}>
          {inCardData.inCardSubtitle}
        </SubTitle>
      )}
      <Container>
        <InCardContainer>
          <ListTitle> {inCardData.mainCardTitle} </ListTitle>
          <ListContent
            dangerouslySetInnerHTML={{ __html: inCardData.mainCardContent }}
          />
        </InCardContainer>
        <Logo logoAlign={'right'} src={inCardData.inCardLogo} />
      </Container>
    </Wrapper>
  ) : (
    <Wrapper logoAlign={logoAlign}>
      <Title>{title}</Title>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}

      <Container>
        <Logo logoAlign={logoAlign} src={image} />
        <List setInCardData={setInCardData} setInCard={setInCard} data={data} />
      </Container>
      {sectionGrade && <SectionGrade />}
    </Wrapper>
  );
};

export default Section;

import React, { useState } from 'react';
import styled from 'styled-components';
import List from './List';
import Logo from './Logo';
import Title from './Title';
import Wrapper from './Wrapper';
import SectionGrade from '../SectionGrade';
const BlockContent = require('@sanity/block-content-to-react');

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 10rem;
  justify-items: center;
  margin-top: 0rem;
  width: 100%;

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
  if (!active) return '';

  return (
    <Wrapper className='slide-fade' logoAlign={logoAlign} inCard={inCard}>
      {inCard ? (
        <div>
          <i
            onClick={() => setInCard(false)}
            class='sc-fHeRUh bZQmLv fas fa-arrow-left anim-exit'
          ></i>
          <Title>{inCardData.inCardTitle}</Title>
          {subtitle && <SubTitle>{inCardData.inCardSubtitle}</SubTitle>}
          <Container>
            <InCardContainer>
              <ListTitle> {inCardData.mainCardTitle} </ListTitle>
              <BlockContent
                className='block-content'
                blocks={inCardData.mainCardContent}
                serializers={serializers}
              />
            </InCardContainer>
            <Logo logoAlign={'right'} src={inCardData.inCardLogo} />
          </Container>
        </div>
      ) : (
        <div>
          <Title>{title}</Title>
          {subtitle && <SubTitle>{subtitle}</SubTitle>}

          <Container>
            <Logo logoAlign={logoAlign} src={image} />
            <List
              setInCardData={setInCardData}
              setInCard={setInCard}
              data={data}
            />
          </Container>
          {sectionGrade && <SectionGrade />}
        </div>
      )}
    </Wrapper>
  );
};

export default Section;

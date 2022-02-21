import React from 'react';
import styled from 'styled-components';
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

const Wrapper = styled.div`
  display: grid;
  gap: 4.2rem;
  width: 100%;
  max-width: 443px;
  @media (max-width: 50em) {
    gap: 1.6rem;
  }
`;
const Container = styled.div`
  display: grid;
  gap: 2.1rem;
  align-self: flex-start;

  @media (max-width: 50em) {
    gap: 0.8rem;
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
const Link = styled.p`
  color: blue;
  cursor: pointer;
`;

const List = ({ data, setInCard, setInCardData }) => {
  return (
    <Wrapper>
      {data.map((item, index) => (
        <Container key={index}>
          <ListTitle> {item.title} </ListTitle>

          <BlockContent
            className='block-content'
            blocks={item.details}
            serializers={serializers}
          />

          {item.linkTitle && item.inlineCard && (
            <Link
              onClick={() => {
                setInCard(true);
                setInCardData({
                  inCardTitle: item.inlineCard.inCardTitle,
                  inCardSubtitle: item.inlineCard.inCardSubtitle,
                  mainCardTitle: item.inlineCard.mainCardTitle,
                  mainCardContent: item.inlineCard.mainCardContent,
                  inCardLogo: item.inlineCard.inCardLogo.asset.url,
                });
              }}
            >
              {item.linkTitle}
            </Link>
          )}
        </Container>
      ))}
    </Wrapper>
  );
};

export default List;

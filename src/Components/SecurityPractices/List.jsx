import React from 'react';
import styled from 'styled-components';

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

const List = ({ data }) => {
  return (
    <Wrapper>
      {data.map((item, index) => (
        <Container key={index}>
          <ListTitle> {item.title} </ListTitle>
          <ListContent> {item.content} </ListContent>
        </Container>
      ))}
    </Wrapper>
  );
};

export default List;

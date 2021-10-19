import React from 'react';
import styled from 'styled-components';
import star from '../../Images/star.svg';
import starYellow from '../../Images/starYellow.svg';

const Wrapper = styled.div`
  width: 100%;
  max-width: 990px;
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 6.4rem;
  place-items: center;
  gap: 1.6rem 1.2rem;
  padding: 2.8rem 12.5rem;
  border: 1px solid #9b9b9b40;
  background: #9b9b9b12;
  border-radius: 10px;
  @media (max-width: 50em) {
    font-size: 1.8rem;
    padding: 2rem 4rem;
    max-width: 320px;
    margin-top: unset;
    gap: 0.8rem 1.2rem;
  }
`;
const Title = styled.p`
  font-size: 2rem;
  color: #34314c;
  font-weight: 600;
  margin-top: 0.7rem;
  justify-self: flex-end;
  @media (max-width: 50em) {
    font-size: 1.6rem;
    margin-top: 0.4rem;
  }
`;
const RatingContainer = styled.div`
  justify-self: flex-start;
`;
const RatingStar = styled.img`
  color: #ffc300;
  @media (max-width: 50em) {
    max-width: 15px;
  }
`;
const Content = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  text-align: center;
  grid-column: 1/3;
  @media (max-width: 50em) {
    font-size: 1.2rem;
  }
`;

const index = () => {
  const score = 4;
  const range = [1, 2, 3, 4, 5];

  return (
    <Wrapper>
      <Title>Section Grade</Title>
      <RatingContainer>
        {range.map((item, index) =>
          index < score ? (
            <RatingStar src={starYellow} />
          ) : (
            <RatingStar src={star} />
          )
        )}
      </RatingContainer>
      <Content>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ipsum
        sequi, voluptatibus consequatur, est iusto asperiores placeat, cumque
        vitae culpa blanditiis delectus consequuntur maxime? Veniam dicta
        doloribus molestiae ratione non!
      </Content>
    </Wrapper>
  );
};

export default index;

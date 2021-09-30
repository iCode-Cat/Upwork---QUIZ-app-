import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #ffffff;
  padding: 4rem 3.2rem;
  border-radius: 16px;
  max-width: 543px;
  min-height: 271px;
`;
const Grid = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.6rem;
  margin-top: ${(props) => (props.marginTop ? '1.6rem' : 'unset')};
`;
const ReadTime = styled.p`
  font-size: 1.4rem;
  color: var(--blue);
  font-weight: 600;
`;
const Frequency = styled.p`
  font-size: 1.4rem;
  color: var(--green);
  font-weight: 600;
`;
const IconWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  background: ${(props) => props.color};
  border-radius: 8px;
  margin-right: 0.8rem;
`;
const Icon = styled.img`
  width: 100%;
  max-width: 20px;
`;
const Title = styled.a`
  cursor: pointer;
  color: var(--main);
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 28px;
`;
const Content = styled.p`
  margin-top: 2.4rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 24px;
  color: var(--gray);
`;

const Card = ({
  readTime,
  frequency,
  title,
  content,
  iconBgColor,
  icon,
  href,
}) => {
  return (
    <Wrapper>
      <Grid>
        <ReadTime>{readTime}</ReadTime>
        <Frequency>{frequency}</Frequency>
      </Grid>
      <Grid marginTop>
        <IconWrapper color={iconBgColor}>
          <Icon src={icon} alt='icon' />
        </IconWrapper>
        <Title href={href}>{title}</Title>
      </Grid>
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default Card;

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 4rem 0;
`;
const Title = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 29px;
  color: rgba(52, 49, 76, 1);
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 754px;
  justify-content: space-between;
  background: red;
  margin-top: 3.2rem;
  border-radius: 8px;
  background: rgba(76, 175, 80, 1);
  overflow: hidden;
  padding: 0.3rem;
`;
const LeftCounter = styled.div`
  display: grid;
  place-items: center;
  flex-grow: 1;
  color: rgba(255, 255, 255, 1);
  padding: 2.1rem 0;
  border-radius: 8px;
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: 0em;
`;
const RightCounter = styled.div`
  display: grid;
  place-items: center;
  background: rgba(219, 245, 229, 1);
  flex-grow: 1;
  overflow: hidden;
  border-radius: 8px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  max-width: 374px;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 19px;

  p {
    max-width: 248px;
  }
`;

const SaveCounter = () => {
  return (
    <Wrapper>
      <Title>Connect and Save More with Cognii</Title>
      <Container>
        <RightCounter>
          <p>You can save 707,616 USD a year or more...</p>
        </RightCounter>
        <LeftCounter>Save Up To $707,616</LeftCounter>
      </Container>
    </Wrapper>
  );
};

export default SaveCounter;

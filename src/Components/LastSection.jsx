import styled from 'styled-components';
import AnimatedButton from './AnimatedButton';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 0 0 4rem 0;
`;
const Title = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(52, 49, 76, 1);
  margin: ${(props) =>
    props.margin === 'no' ? '4rem 0rem 1.6rem 0' : '4rem 0rem 3.2rem 0'};
`;
const Text = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0rem 0rem 2.2rem 0;
`;

const LastSection = () => {
  const state = useSelector((state) => state);
  const isGlobalAdmin = state.quiz.userState?.globalAdmin;
  console.log(isGlobalAdmin);

  const checkIsAdmin = () => {
    if (isGlobalAdmin === 'Yes') return true;
    return false;
  };

  return (
    <Wrapper>
      {checkIsAdmin() ? (
        <>
          <Title margin='no'>Connect to Cognni</Title>
          <Text>For detailed risk assesment report</Text>
          <AnimatedButton text='Connect to Cognni' />
        </>
      ) : (
        <>
          <Title>Request a Demo</Title>
          <AnimatedButton text='Reguest a Demo' link='https://lp.cognni.ai/' />
        </>
      )}
    </Wrapper>
  );
};

export default LastSection;

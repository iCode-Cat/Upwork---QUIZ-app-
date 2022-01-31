import styled from 'styled-components';
import AnimatedButton from './AnimatedButton';
import { useSelector } from 'react-redux';
import Control from './Forms/Control';
import Button from './Button';
import { useState } from 'react';

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

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const LastSection = () => {
  const state = useSelector((state) => state);
  const isGlobalAdmin = state.quiz.userState?.globalAdmin;
  const [flow, setFlow] = useState('');

  const checkIsAdmin = () => {
    if (isGlobalAdmin === 'Yes') return true;
    return false;
  };

  return (
    <Wrapper>
      {/* {checkIsAdmin() ? (
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
      )} */}
      <ButtonContainer>
        <Button
          onClick={() => setFlow(0)}
          text='Try Cognni for Free'
          type='btnBlue'
          size='btnLg'
        />
        <Button
          onClick={() => setFlow(1)}
          text='Connect for Risk Assessment'
          type='btnBlue'
          size='btnLg'
        />
        <Button
          onClick={() => setFlow(2)}
          text='Set 1:1 Demo'
          type='btnGreen'
          size='btnLg'
        />
        <Button
          onClick={() => setFlow(3)}
          text='Register for Risk Assessment'
          type='btnGreen'
          size='btnLg'
        />
      </ButtonContainer>
      {/* <AnimatedButton text='Try Cogni for Free' />
      <AnimatedButton text='Connect for Risk Assessment' />
      <AnimatedButton text='Set 1:1 Demo' />
      <AnimatedButton text='Register for Risk Assessment' /> */}
      {flow === 0 && <Control title='Try Cognni for Free' />}
      {flow === 1 && <Control title='Connect for Complete Risk Assessment' />}
      {flow === 2 && <Control title='Set 1:1 Demo' form />}
      {flow === 3 && <Control title='Register for Risk Assessment' form />}
    </Wrapper>
  );
};

export default LastSection;

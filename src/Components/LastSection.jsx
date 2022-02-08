import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Control from './Forms/Control';
import Button from './Button';
import { useState } from 'react';

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 0 0 4rem 0;
  position: relative;
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

  // const popup = useState((state) => state.quiz.popup);

  const checkIsAdmin = () => {
    if (isGlobalAdmin === 'Yes') return true;
    return false;
  };

  const buttonObject = [
    {
      text: 'Try Cognni for Free',
      type: 'btnBlue',
      size: 'btnLg',
    },
    {
      text: 'Connect for Risk Assessment',
      type: 'btnBlue',
      size: 'btnLg',
    },
    {
      text: 'Set 1:1 Demo',
      type: 'btnGreen',
      size: 'btnLg',
    },
    {
      text: 'Register for Risk Assessment',
      type: 'btnGreen',
      size: 'btnLg',
    },
  ];

  return (
    <Wrapper>
      {/* <Popup /> */}
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
        {buttonObject.map((x, i) => (
          <Button
            onClick={() => {
              setFlow(i);
            }}
            text={x.text}
            type={x.type}
            size={x.size}
            style={{ opacity: flow === i ? 0.5 : 1 }}
          />
        ))}
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

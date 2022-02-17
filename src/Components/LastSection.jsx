import styled from 'styled-components';
import { connect, useSelector } from 'react-redux';
import Control from './Forms/Control';
import Button from './Button';
import { useState } from 'react';
import Card from './Forms/Card';

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 0 0 15rem 0;
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
  const connection = state.quiz.defaultJson.connection;

  const [flow, setFlow] = useState(0);
  const [connectionObject, setConnectionObject] = useState(connection[0]);
  console.log(connection);
  // Form Area
  return (
    <Wrapper>
      <ButtonContainer>
        {connection?.map((x, i) => (
          <Card
            layout={connection.layout}
            {...x}
            onClick={() => {
              setFlow(i);
              setConnectionObject(x);
            }}
            onToggle={flow === i}
          />
        ))}
      </ButtonContainer>
      {/* <Button
            onClick={() => {
              setFlow(i);
              setConnectionObject(x);
            }}
            text={x.buttonTitle}
            color={x.buttonColor}
            size='btnLg'
            style={{ opacity: flow === i ? 1 : 0.5 }}
          /> */}
      <Control
        connectionObject={connectionObject}
        title='Try Cognni for Free'
      />
    </Wrapper>
  );
};

export default LastSection;

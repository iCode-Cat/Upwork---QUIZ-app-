import Form from './Form';
import styled from 'styled-components';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { setPopup } from '../../Redux/quizSlice';
import toMarkdown from '@sanity/block-content-to-markdown';

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 0 0 2rem 0;
  max-width: 1120px;
  background: #fff;
  margin-top: 5rem;
  .connect-btn {
    grid-column: 1/3;
    justify-self: center;
  }
`;

const Title = styled.p`
  padding: 2rem;
  font-size: 3rem;
  border-bottom: 1px solid #000;
  grid-column: 1/3;
`;

const Content = styled.div`
  padding: 0 2rem;
`;

const serializers = {
  types: {
    code: (props) =>
      '```' + props.node.language + '\n' + props.node.code + '\n```',
  },
};

const Control = ({ title, form, connectionObject }) => {
  const dispatch = useDispatch();
  console.log(connectionObject);
  if (!connectionObject) return '';
  return (
    <Wrapper className='anim-fadeIn'>
      <Title>{connectionObject?.title}</Title>
      <Content>
        <p>{toMarkdown(connectionObject?.content, { serializers })}</p>
      </Content>
      {connectionObject.inputs && (
        <Form
          submitButton={connectionObject.submitButton}
          inputs={connectionObject.inputs}
          dispatch={dispatch}
          setPopup={setPopup}
        />
      )}
      {!connectionObject.inputs && (
        <Button
          className='connect-btn'
          text={connectionObject?.connect}
          size='btnLg'
          color={connectionObject?.connectColor}
          onClick={() => dispatch(setPopup(true))}
          link={connectionObject?.connectLink}
        />
      )}
    </Wrapper>
  );
};

export default Control;

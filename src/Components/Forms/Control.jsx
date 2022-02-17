import FormH from './FormH';
import styled from 'styled-components';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { setPopup } from '../../Redux/quizSlice';
const BlockContent = require('@sanity/block-content-to-react');

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
    border-radius: 0px;
    font-size: 1.8rem;
    height: 55px;
  }
`;

const Title = styled.p`
  padding: ${(props) =>
    props.layout === 'hr' ? '2rem 0rem 0rem 0rem' : '2rem'};
  font-size: 4.4rem;
  border-bottom: ${(props) =>
    props.layout === 'hr' ? 'unset' : '1px solid #0000003e'};
  grid-column: 1/3;
  color: #212121;
  text-align: ${(props) => (props.layout === 'hr' ? 'center' : 'unset')};
`;

const Content = styled.div`
  padding: 0 2rem;
  font-size: 1.8rem;
  color: #212121;
  grid-column: ${(props) => (props.layout === 'hr' ? '1/3' : 'unset')};
  text-align: ${(props) => (props.layout === 'hr' ? 'center' : 'unset')};
`;

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const Control = ({ title, form, connectionObject, layout = 'hr' }) => {
  const dispatch = useDispatch();

  if (!connectionObject) return '';
  return (
    <Wrapper className='anim-fadeIn'>
      <Title layout={layout}>{connectionObject?.title}</Title>
      <Content layout={layout}>
        <BlockContent
          className='block-content'
          blocks={connectionObject?.content}
          serializers={serializers}
        />
      </Content>
      {connectionObject.inputs && (
        <FormH
          layout={layout}
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

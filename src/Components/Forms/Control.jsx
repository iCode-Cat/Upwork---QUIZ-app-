import Form from './Form';
import styled from 'styled-components';
import Button from '../Button';

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

const Control = ({ title, form }) => {
  return (
    <Wrapper className='anim-fadeIn'>
      <Title>{title}</Title>
      <Content>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          corrupti qui veritatis aspernatur itaque quam perferendis quos.
          Tempora perspiciatis recusandae, dolores ipsam esse fugit fuga
          repudiandae voluptates tempore. Pariatur, id.
        </p>
        {!form && (
          <ul>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
          </ul>
        )}
      </Content>

      {form && <Form />}
      {!form && (
        <Button
          className='connect-btn'
          text='Connect'
          type='btnBlue'
          size='btnLg'
        />
      )}
    </Wrapper>
  );
};

export default Control;

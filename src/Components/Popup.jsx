import styled from 'styled-components';
import { setPopup } from '../Redux/quizSlice';

const Wrapper = styled.div`
  background: #e4f6fc;
  width: 100vw;
  max-width: 601px;
  display: grid;
  justify-items: center;
  padding: 3.1rem;
  border-radius: 10px;
  z-index: 99999999;
  position: fixed;
  align-self: center;
  justify-self: center;
  bottom: 20%;
`;
const Close = styled.img`
  justify-self: end;
  cursor: pointer;
`;
const Logo = styled.img``;
const Title = styled.p`
  font-family: Montserrat;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 34px;
  color: #34314c;
  text-align: center;
  margin-top: 1rem;
`;
const SubTitle = styled.p`
  font-family: Montserrat;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #34314c;
  margin-top: 1.6rem;
  margin-bottom: 4.6rem;
`;
const Contact = styled.div`
  font-family: Montserrat;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
`;
const Link = styled(Contact)`
  color: #2196f3;
  cursor: pointer;
`;

const Popup = ({ dispatch }) => {
  return (
    <Wrapper>
      <Close src='/close.svg' onClick={() => dispatch(setPopup(false))} />
      <Logo src='/popupLogo.svg' />
      <Title>
        Thank you for leaving <br /> your details!
      </Title>
      <SubTitle>We will be in touch shortly.</SubTitle>
      <Contact>If you have any questions, please contact</Contact>
      <Link>
        <a href=''>support@cognni.ai</a>
      </Link>
    </Wrapper>
  );
};

export default Popup;

import React, { useRef } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Circle from './Circle';
import Logo from '../SecurityPractices/Logo';
import Labels from './Labels';
import Title from './Title';

const SubTitle = styled.p`
  /* margin-bottom: 4rem; */
  text-align: center;
  font-size: 2rem;
  color: #34314c;

  @media (max-width: 50em) {
    margin-bottom: unset;
    font-size: 1.5rem;
    max-width: 243px;
  }
`;

const Blank = styled.div`
  background: #fff;
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0;
`;

const InlineContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  place-items: center;
  gap: 10rem;
  /* margin-top: 6rem; */
  img {
    max-width: 200px !important;
  }
  @media (max-width: 50em) {
    padding: 4rem 3rem;
    margin-top: 0rem;
    grid-template-columns: auto;
    gap: 4rem;
  }
`;

const ListTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #34314c;
  @media (max-width: 50em) {
    font-size: 1.6rem;
  }
`;
const ListContent = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #565656;
  @media (max-width: 50em) {
    font-size: 1.2rem;
  }
`;

const InCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

const Text = styled.p`
  font-size: 3.8rem;
  font-weight: 700;
  color: #34314c;
  text-align: center;

  @media (max-width: 50em) {
    margin-bottom: unset;
    margin-top: 2rem;
    font-size: 1.8rem;
    max-width: 243px;
  }
`;

const GeneralContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  i {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    padding: 2rem;
    font-size: 3rem;
    opacity: 0.3;
  }
  padding: 6rem 9.1rem;
  background: #fff;

  /* margin: 10rem auto 0 auto; */

  img {
    max-width: 636px;
  }

  @media (max-width: 50em) {
    padding: 3.2rem 1rem;
    gap: 4rem;
  }
`;

const Graphics = ({
  mainTitle,
  toggle,
  stats,
  currency,
  tooltip,
  subTitle,
  subtitleSecond,
}) => {
  const parent = useRef();
  const [inlineCard, setInlineCard] = useState(false);
  const [inCardObject, setInCardObject] = useState({
    inCardTitle: '',
    inCardSubtitle: '',
    mainCardTitle: '',
    mainCardContent: '',
    inCardLogo: '',
  });

  return stats.map((item, index) => (
    <div
      key={index}
      ref={parent}
      style={{
        position: index !== 0 ? 'absolute' : 'relative',
        overflow: 'hidden',
        width: '100%',
        // background: '#FFF',
        transition: ' opacity 0.6s',
        opacity: `${toggle === index ? '1' : '0'}`,
        zIndex: `${toggle === index ? '1' : '0'}`,
      }}
    >
      <Blank className={inlineCard ? 'anim' : 'anim1'} />
      {inlineCard ? (
        <GeneralContainer>
          <Blank className={inlineCard ? 'anim' : 'anim1'} />
          <i
            onClick={() => setInlineCard(false)}
            class='sc-fHeRUh bZQmLv fas fa-arrow-left anim-exit'
          ></i>
          <Text>TITLE</Text>
          <SubTitle>SUBTITLE</SubTitle>
          <InlineContainer>
            <InCardContainer>
              <ListTitle>CARD TITLE</ListTitle>
              <ListContent>CARD CONTENT</ListContent>
            </InCardContainer>
            <Logo logoAlign={'right'} src={'/logo.svg'} />
          </InlineContainer>
        </GeneralContainer>
      ) : (
        <div>
          <Title mainTitle={mainTitle} />
          <SubTitle>{subtitleSecond}</SubTitle>
          <div className='breakdown-wrapper'>
            {index === 0 ? (
              <Circle
                currency={currency}
                savings={item.savings}
                subTitle={subTitle}
                tab={0}
              />
            ) : (
              <Circle
                currency={currency}
                savings={item.savings}
                subTitle={subTitle}
                type={toggle}
                tab={1}
              />
            )}

            <Labels
              setInCardObject={setInCardObject}
              setInlineCard={setInlineCard}
              tooltip={tooltip}
              currency={currency}
              items={item}
            />
          </div>
        </div>
      )}
    </div>
  ));
};

export default Graphics;

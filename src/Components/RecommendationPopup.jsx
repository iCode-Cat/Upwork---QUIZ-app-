import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRecPopupActive } from '../Redux/quizSlice';
import styled from 'styled-components';

const BlockContent = require('@sanity/block-content-to-react');
const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100%;
  z-index: 999;
  top: 0;
  background: #00000020;
  position: fixed;
`;

const Wrapper = styled.div`
  justify-self: center;
  width: 100%;
  min-height: 500px;
  background: #fff;
  display: grid;
  max-width: 700px;
  margin: 0 auto;
  padding: 3rem;
  .popup {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .popup-content {
    display: grid;
    justify-content: center;
    gap: 2rem;
    text-align: center;
    flex-grow: 1;
    img {
      display: inline-block;
    }
  }
  .popup-buttons {
    display: grid;
    grid-auto-flow: column;
    gap: 2rem;
    margin-top: 1rem;
    button {
      background: #fff;
      border: solid 1px black;
      height: 40px;
      cursor: pointer;
    }
  }
  .popup-control {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    justify-items: center;
    justify-content: center;
    margin-top: 1.5rem;

    div {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: solid 1px black;
      transition: 0.3s;
      cursor: pointer;
    }
  }
  .control-active {
    background: black;
  }
`;

const controls = [1, 2, 3];

const RecommendationPopup = () => {
  const [focus, setFocus] = useState(0);
  const state = useSelector((state) => state.quiz);
  const popup = state.recommendationPopup;
  const dispatch = useDispatch();
  if (!popup) return '';
  // recommendationPopup
  // setRecPopupActive

  const controlHandler = (num) => {
    setFocus(focus + num);
  };

  return (
    <Container>
      <Wrapper>
        <div className='popup'>
          <div className='popup-content'>
            {popup?.content?.map(
              (x, i) =>
                i === focus && (
                  <BlockContent
                    className='block-content'
                    blocks={x.content}
                    serializers={serializers}
                  />
                )
            )}
          </div>
          <div className='popup-buttons'>
            <button onClick={() => controlHandler(-1)}>
              {popup.prevButton}
            </button>
            <button onClick={() => controlHandler(+1)}>
              {popup.nextButton}
            </button>
            <button onClick={() => dispatch(setRecPopupActive(false))}>
              {popup.closeButton}
            </button>
          </div>
          <div className='popup-control'>
            {controls.map((x, i) => (
              <div
                className={i === focus ? 'control-active' : 'control-disable'}
                onClick={() => setFocus(i)}
              ></div>
            ))}
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default RecommendationPopup;

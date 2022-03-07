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
  grid-template-rows: 0fr 0fr;
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem;
  border-radius: 8px;
  i {
    justify-self: flex-end;
    font-size: 2rem;
    cursor: pointer;
  }
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
    margin-top: 5rem;

    img {
      display: inline-block;
    }
  }
  .popup-buttons {
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    justify-content: space-between;

    gap: 2rem;
    margin-top: 1rem;
    button {
      background: #fff;
      border: solid 1px black;
      height: 40px;
      padding: 0 2rem;
      border-radius: 4px;
      cursor: pointer;
    }
    .popup-next {
      background: rgb(33, 149, 243);
      color: #fff;
      border: solid 0px black;
    }
  }
  .popup-control {
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    align-items: flex-start;
    justify-content: center;
    margin-top: 1.5rem;
    gap: 1rem;
    background: #80808010;
    border-radius: 8px;
    padding: 1rem;

    #popup-circle {
      display: grid;
      place-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: solid 1px black;
      transition: 0.3s;
      cursor: pointer;
    }
    .popup-line {
      width: 20px;
      height: 2px;
      background: #000;
      &-dot {
        background: transparent;
        border: none;
        border-top: 2px dotted black;
      }
    }
    .circle-container {
      display: grid;
      grid-template-columns: auto auto;
      align-items: center;
      gap: 1rem;
    }
  }
  .control-active {
    background: rgb(33, 149, 243);
    color: #fff;
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
        <i
          onClick={() => dispatch(setRecPopupActive(false))}
          className='fas fa-times'
        ></i>
        <div className='popup-control'>
          {controls.map((x, i) => (
            <div className='circle-container'>
              <div
                id='popup-circle'
                className={i === focus ? 'control-active' : 'control-disable'}
                onClick={() => setFocus(i)}
              >
                {i + 1}
              </div>
              {i + 1 !== controls.length && (
                <div
                  className={`popup-line ${i !== focus && 'popup-line-dot'}`}
                ></div>
              )}
            </div>
          ))}
        </div>
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
            <button className='popup-next' onClick={() => controlHandler(+1)}>
              {popup.nextButton}
            </button>
            {/* <button onClick={() => dispatch(setRecPopupActive(false))}>
              {popup.closeButton}
            </button> */}
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default RecommendationPopup;

import React, { useState, useEffect } from 'react';
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
    text-align: left;
    flex-grow: 1;
    margin-top: 3rem;

    color: gray;
    &-container {
      display: grid;
      gap: 1rem;
    }
    &-title {
      font-weight: 600;
    }
    &-img {
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
    }

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
      box-shadow: 2px 3px 9px -2px rgba(0, 0, 0, 0.17);
      -webkit-box-shadow: 2px 3px 9px -2px rgba(0, 0, 0, 0.17);
      -moz-box-shadow: 2px 3px 9px -2px rgba(0, 0, 0, 0.17);
    }
    .popup-next {
      background: rgb(33, 149, 243);
      color: #fff;
      border: solid 0px black;
    }
  }
  .popup-control {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    justify-items: center;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 1.5rem;
    gap: 2rem;
    background: #80808010;
    border-radius: 8px;
    padding: 2rem;

    #popup-circle {
      display: grid;
      place-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      transition: 0.3s;
      cursor: pointer;
      font-weight: 700;
    }
    .popup-line {
      width: 100%;
      height: 2px;
      background: gray;
      &-dot {
        background: transparent;
        border: none;
        border-top: 2px dotted gray;
      }
    }
    .circle-container {
      display: grid;
      grid-template-columns: auto auto 1fr;
      align-items: center;
      gap: 2rem;
      width: 100%;
    }
  }
  .control-active {
    background: rgb(33, 149, 243);
    color: #fff;
  }
  .control-disable {
    box-shadow: 2px 3px 9px 0px rgba(0, 0, 0, 0.17);
    -webkit-box-shadow: 2px 3px 9px 0px rgba(0, 0, 0, 0.17);
    -moz-box-shadow: 2px 3px 9px 0px rgba(0, 0, 0, 0.17);
  }
`;

const controls = [1, 2, 3];

const RecommendationPopup = () => {
  const [focus, setFocus] = useState(0);
  const [activeColor, setActiveColor] = useState('');
  const state = useSelector((state) => state.quiz);
  const popup = state.recommendationPopup;
  const dispatch = useDispatch();
  useEffect(() => {
    popup?.content?.forEach((x, i) => {
      if (focus === i) {
        setActiveColor(x.activeColorBg);
      }
    });
  }, [focus]);
  const controlHandler = (num) => {
    if (num === -1) {
      return setFocus(0);
    }
    if (num === popup?.content?.length - 1) {
      return setFocus(popup?.content?.length - 1);
    }
    setFocus(focus + num);
  };
  if (!popup) return '';
  // recommendationPopup
  // setRecPopupActive
  console.log(focus);
  return (
    <Container>
      <Wrapper>
        <i
          onClick={() => dispatch(setRecPopupActive(false))}
          className='fas fa-times'
        ></i>
        <div className='popup-control'>
          {popup?.content?.map((x, i) => (
            <div className='circle-container'>
              <div
                id='popup-circle'
                onClick={() => setFocus(i)}
                className={i === focus ? 'control-active' : 'control-disable'}
                style={{
                  color: i - 1 < focus ? x.activeColor : x.passiveColor,
                  backgroundColor:
                    i - 1 < focus ? x.activeColorBg : x.passiveColorBg,
                }}
              >
                {i + 1}
              </div>
              <p
                style={{
                  color: i > focus ? 'gray' : x.passiveColor,
                }}
                className='popup-stepName'
              >
                {x.stepName}
              </p>
              {i + 1 !== popup?.content?.length && (
                <div
                  className={`popup-line ${i > focus && 'popup-line-dot'}`}
                  style={{
                    backgroundColor:
                      i - 1 < focus ? x.activeColorBg : x.passiveColorBg,
                  }}
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
                  <div className='popup-content-container'>
                    <p className='popup-content-title'>{x.title}</p>
                    <BlockContent
                      className='block-content'
                      blocks={x.content}
                      serializers={serializers}
                    />
                    <img
                      src={x.image.asset.url}
                      alt='img'
                      className='popup-content-img'
                    />
                  </div>
                )
            )}
          </div>
          <div className='popup-buttons'>
            <button onClick={() => controlHandler(-1)}>
              {popup.prevButton}
            </button>
            <button
              style={{ background: activeColor }}
              className='popup-next'
              onClick={() => controlHandler(+1)}
            >
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

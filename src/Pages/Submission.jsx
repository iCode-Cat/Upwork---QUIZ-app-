import Reac, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchSubmissions } from '../Redux/quizSlice';
import { useSearchParams } from 'react-router-dom';

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

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  padding: 5rem;
  gap: 3rem;
  .submission {
    &-title {
      font-size: 3rem;
      font-weight: 600;
    }
    &-logo {
      max-width: 200px;
    }
    &-cards {
      margin-top: 2rem;
      display: grid;
      grid-auto-flow: column;
      gap: 2rem;
    }
    &-card {
      display: grid;
      gap: 1rem;
      min-height: 200px;
      width: 190px;
      padding: 1.4rem;
      border: solid #00000050 1px;
      &-logo {
        width: 100%;
        padding: 2rem;
        img {
          width: 100%;
        }
      }
      &-title {
        word-break: break-all;
        font-weight: 800;
      }
      &-desc {
        word-break: break-all;
      }
    }
  }
`;

const Submission = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quiz.submissions);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(
      fetchSubmissions({
        uuid: searchParams.get('id') || '5003aa3b-e41c-4624-99c9-583f21b4ee96',
      })
    );
  }, [dispatch]);
  if (state.length === 0) return '';
  const { image, content, card, title } = state;
  console.log(card);
  return (
    <Wrapper>
      <p className='submission-title'>{title}</p>
      <img className='submission-logo' src={image.asset.url} alt='' />
      <div className='submission-content'>
        <BlockContent
          className='submission-content'
          blocks={content}
          serializers={serializers}
        />
      </div>
      <div className='submission-cards'>
        {card.map((x) => (
          <div className='submission-card'>
            <div className='submission-card-logo'>
              <img
                src={x.image.asset.url}
                alt=''
                className='submission-card-img'
              />
            </div>
            <p className='submission-card-title'>{x.title}</p>
            <p className='submission-card-desc'>{'ddwaaaaaaaaaaawdaaaaaaaa'}</p>
            {x.link && (
              <a href={x.link} className='submission-card-link'>
                {x.linkText}
              </a>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Submission;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import style from '../Scss/Hero.module.scss';
import Button from './Button';
import HeroQuestion from './HeroQuestion';
import SingleFlow from './SingleFlow/SingleFlow';

const Error = styled.p``;

const Hero = ({
  formStateHandler,
  form,
  defaultJson,
  hero,
  scrollToView,
  step1,
  errorClassHandler,
  state,
  step2,
  setForm,
  results,
}) => {
  const [heroState, setHeroState] = useState({});
  const [checked, setChecked] = useState(true);
  const heroQuestion = defaultJson.hero.fields;

  const igniteForm = () => {
    if (checked === null || !checked) {
      setChecked(false);
      return;
    }
    form.step === '' && formStateHandler({ field: 'step', value: 1 });
    scrollToView(step1);
  };

  useEffect(() => {
    setHeroState({
      welcomePage: defaultJson.hero.title,
      subTitle: defaultJson.hero.sub_title,
      button: defaultJson.hero.button_text,
    });
  }, [form.step]);

  const { welcomePage, subTitle, button } = heroState;
  const initialQuestion = defaultJson.hero.initialQuestion;
  return (
    <section
      ref={hero}
      id='hero'
      style={{ backgroundImage: `url('/background.jpg')` }}
      className={style.wrapper}
    >
      <div className={style.hero_container}>
        <div className={style.hero}>
          <h1
            className={style.title}
            dangerouslySetInnerHTML={{ __html: welcomePage }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: subTitle }}
            className={style.description}
          />
          {!initialQuestion ? (
            <SingleFlow
              errorClassHandler={errorClassHandler}
              step2={step2}
              scrollToView={scrollToView}
              step1={step1}
              defaultJson={defaultJson}
              state={state}
              formStateHandler={formStateHandler}
              form={form}
              setForm={setForm}
              results={results}
            />
          ) : (
            button && (
              <span onClick={() => igniteForm()}>
                <Button shadow text={button} type='btnBlue' size='btnSm' />
              </span>
            )
          )}
        </div>
        <img
          src={defaultJson.hero.logo}
          alt='logo-company'
          className={style.logo}
        />
      </div>
    </section>
  );
};

export default Hero;

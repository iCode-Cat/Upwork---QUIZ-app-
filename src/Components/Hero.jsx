import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import style from '../Scss/Hero.module.scss';
import Button from './Button';
import HeroQuestion from './HeroQuestion';

const Error = styled.p``;

const Hero = ({
  formStateHandler,
  form,
  defaultJson,
  hero,
  scrollToView,
  step1,
}) => {
  const [heroState, setHeroState] = useState({});
  const [checked, setChecked] = useState(null);
  const heroQuestion = defaultJson.hero.fields;
  useEffect(() => {
    setHeroState({
      welcomePage: defaultJson.hero.title,
      subTitle: defaultJson.hero.sub_title,
      button: defaultJson.hero.button_text,
    });
  }, [form.step]);

  const { welcomePage, subTitle, button } = heroState;

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
          <HeroQuestion
            checked={checked}
            setChecked={setChecked}
            question={heroQuestion}
          />

          {button && (
            <span
              onClick={() => {
                if (checked === null || !checked) {
                  setChecked(false);
                  return;
                }
                form.step === '' &&
                  formStateHandler({ field: 'step', value: 1 });
                scrollToView(step1);
              }}
            >
              <Button shadow text={button} type='btnBlue' size='btnSm' />
            </span>
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

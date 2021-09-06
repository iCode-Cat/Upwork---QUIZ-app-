import React, { useState, useEffect } from 'react';

import style from '../Scss/Hero.module.scss';
import Button from './Button';

const Hero = ({
  formStateHandler,
  form,
  defaultJson,
  hero,
  scrollToView,
  step1,
}) => {
  const [heroState, setHeroState] = useState({});

  useEffect(() => {
    setHeroState({
      welcomePage: defaultJson.hero.title,
      subTitle: defaultJson.hero.sub_title,
      button: defaultJson.hero.button_text,
    });
    // if (form.step > 3) {
    //   setHeroState({
    //     welcomePage: defaultJson.conclusion.title,
    //     subTitle: defaultJson.conclusion.sub_title,
    //     button: false,
    //   });
    // }
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
          {button && (
            <span
              onClick={() => {
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
          src={defaultJson.hero.image}
          alt='logo-company'
          className={style.logo}
        />
      </div>
    </section>
  );
};

export default Hero;

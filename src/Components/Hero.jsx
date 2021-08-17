import React, { useState, useEffect } from 'react';
import style from '../Scss/Hero.module.scss';
import Button from './Button';
import Logo from '../Images/logo.svg';

const Hero = ({
  formStateHandler,
  form,
  HeroJSON,
  hero,
  scrollToView,
  step1,
}) => {
  const [heroState, setHeroState] = useState({});

  useEffect(() => {
    setHeroState({
      welcomePage: HeroJSON.welcomePage.title,
      subTitle: HeroJSON.welcomePage.sub_title,
      button: HeroJSON.welcomePage.button_text,
    });
    if (form.step > 3) {
      setHeroState({
        welcomePage: HeroJSON.conclusionPage.title,
        subTitle: HeroJSON.conclusionPage.sub_title,
        button: false,
      });
    }
  }, [form.step]);

  console.log(form);

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
        <img src={Logo} alt='logo-company' className={style.logo} />
      </div>
    </section>
  );
};

export default Hero;

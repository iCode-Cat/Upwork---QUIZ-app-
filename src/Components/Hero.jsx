import React from 'react';
import style from '../Scss/Hero.module.scss';
import Button from './Button';
import Logo from '../Images/logo.svg';

const Hero = ({ formStateHandler, form, HeroJSON }) => {
  return (
    <section
      style={{ backgroundImage: `url('/background.jpg')` }}
      className={style.wrapper}
    >
      <div className={style.hero_container}>
        <div className={style.hero}>
          <h1 className={style.title}>{HeroJSON.welcomePage.title} </h1>
          <p
            dangerouslySetInnerHTML={{ __html: HeroJSON.welcomePage.sub_title }}
            className={style.description}
          />
          <span
            onClick={() =>
              form.step === null &&
              formStateHandler({ field: 'step', value: 1 })
            }
          >
            <Button
              shadow
              text={HeroJSON.welcomePage.button_text}
              type='btnBlue'
              size='btnSm'
            />
          </span>
        </div>
        <img src={Logo} alt='logo-company' className={style.logo} />
      </div>
    </section>
  );
};

export default Hero;

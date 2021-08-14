import React, { useState } from 'react';
import FirstStep from '../Components/FirstStep';
import Hero from '../Components/Hero';
import style from '../Scss/Quiz.module.scss';
import SecondStep from '../Components/SecondStep';
import ThirdStep from '../Components/ThirdStep';
import HeroJSON from '../Json/Hero.json';
import step1 from '../Images/step1.png';
import step2 from '../Images/step2.png';
import step3 from '../Images/step3.png';
const Quiz = () => {
  // State that saves user answers
  const [form, setForm] = useState({
    step: null,
    email: null,
    companyName: null,
    numberEmployees: null,
    youWorkingCloud: null,
    yourCompWorkingCloud: null,
    howProtectYourInfo: null,
    howYouMonitorRisks: null,
  });

  const formStateHandler = ({ field, value }) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  console.log(form);

  return (
    <main className={style.wrapper}>
      <article>
        <Hero
          HeroJSON={HeroJSON}
          form={form}
          formStateHandler={formStateHandler}
        />
        <section className={style.steps}>
          <img
            className={style.rope}
            src={
              (form.step === 1 && step1) ||
              (form.step === 2 && step2) ||
              (form.step === 3 && step3)
            }
            alt=''
          />
          {form.step >= 1 && (
            <FirstStep
              HeroJSON={HeroJSON}
              formStateHandler={formStateHandler}
              form={form}
            />
          )}
          {form.step >= 2 && (
            <div
              style={{
                background: '#E4F6FC',
                display: 'flex',
                alignItems: 'center',
                width: '99vw',
                justifyContent: 'center',
                marginTop: '10rem',
              }}
            >
              <SecondStep
                HeroJSON={HeroJSON}
                formStateHandler={formStateHandler}
                form={form}
              />
            </div>
          )}
          {form.step >= 3 && (
            <ThirdStep
              HeroJSON={HeroJSON}
              formStateHandler={formStateHandler}
              form={form}
            />
          )}
        </section>
      </article>
    </main>
  );
};

export default Quiz;

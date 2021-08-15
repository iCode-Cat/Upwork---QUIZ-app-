import React, { useState, useRef } from 'react';
import FirstStep from '../Components/FirstStep';
import Hero from '../Components/Hero';
import style from '../Scss/Quiz.module.scss';
import SecondStep from '../Components/SecondStep';
import ThirdStep from '../Components/ThirdStep';
import HeroJSON from '../Json/Hero.json';
import stepOne from '../Images/stepOne.png';
import stepTwo from '../Images/stepTwo.png';
import stepThree from '../Images/stepThree.png';
const Quiz = () => {
  // State that saves user answers
  const [form, setForm] = useState({
    step: '',
    email: '',
    companyName: '',
    numberEmployees: '',
    youWorkingCloud: '',
    yourCompWorkingCloud: '',
    howProtectYourInfo: '',
    howYouMonitorRisks: '',
  });

  // References
  const hero = useRef();
  const step1 = useRef();
  const step2 = useRef();
  const step3 = useRef();

  // Functions
  const formStateHandler = ({ field, value }) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const scrollToView = (view) => {
    setTimeout(() => {
      view.current.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const errorClassHandler = (field) => {
    if (form[field] === '') return true;
    return false;
  };

  console.log(form);

  return (
    <main className={style.wrapper}>
      <article>
        <Hero
          step1={step1}
          scrollToView={scrollToView}
          hero={hero}
          HeroJSON={HeroJSON}
          form={form}
          formStateHandler={formStateHandler}
        />
        <section className={style.steps}>
          <img
            className={style.rope}
            src={
              (form.step === 1 ? stepOne : '') ||
              (form.step === 2 ? stepTwo : '') ||
              (form.step === 3 ? stepThree : '') ||
              (form.step > 3 ? stepThree : '')
            }
            alt=''
          />
          {form.step >= 1 && (
            <FirstStep
              errorClassHandler={errorClassHandler}
              step2={step2}
              scrollToView={scrollToView}
              step1={step1}
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
                width: '98.7vw',
                justifyContent: 'center',
                marginTop: '9.8rem',
              }}
            >
              <SecondStep
                errorClassHandler={errorClassHandler}
                step3={step3}
                scrollToView={scrollToView}
                step2={step2}
                HeroJSON={HeroJSON}
                formStateHandler={formStateHandler}
                form={form}
              />
            </div>
          )}
          {form.step >= 3 && (
            <ThirdStep
              errorClassHandler={errorClassHandler}
              hero={hero}
              scrollToView={scrollToView}
              step3={step3}
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

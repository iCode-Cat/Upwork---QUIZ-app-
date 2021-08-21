import React, { useState, useRef, useEffect } from 'react';
import FirstStep from '../Components/FirstStep';
import Hero from '../Components/Hero';
import style from '../Scss/Homepage.module.scss';
import SecondStep from '../Components/SecondStep';
import ThirdStep from '../Components/ThirdStep';
import { heroJSON } from '../Json/headless';
import Timeline from '../Components/Timeline';
import Stats from '../Components/Stats/Stats';
import Background from '../Components/Background';

const Homepage = () => {
  // State that saves user answers
  const [form, setForm] = useState({
    step: '',
  });
  const [isEnd, setIsEnd] = useState(true);

  // References
  const hero = useRef();
  const results = useRef();
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

  // On concluliton delete all steps
  // useEffect(() => {
  //   if (form.step > 3) {
  //     setTimeout(() => {
  //       setIsEnd(false);
  //     }, 2000);
  //   }
  // }, [form]);

  useEffect(() => {
    document.title = heroJSON.welcomePage.title;
  }, []);

  return (
    <main className={style.wrapper}>
      <article>
        <Hero
          step1={step1}
          scrollToView={scrollToView}
          hero={hero}
          HeroJSON={heroJSON}
          form={form}
          formStateHandler={formStateHandler}
        />
        {isEnd && (
          <>
            <section className={style.steps}>
              <Timeline
                form={form}
                step1={step1}
                step2={step2}
                step3={step3}
                style={style}
              />
              {form.step >= 1 && (
                <FirstStep
                  errorClassHandler={errorClassHandler}
                  step2={step2}
                  scrollToView={scrollToView}
                  step1={step1}
                  HeroJSON={heroJSON}
                  formStateHandler={formStateHandler}
                  form={form}
                  setForm={setForm}
                />
              )}
              {form.step >= 2 && (
                <Background>
                  <SecondStep
                    errorClassHandler={errorClassHandler}
                    step3={step3}
                    scrollToView={scrollToView}
                    step2={step2}
                    HeroJSON={heroJSON}
                    formStateHandler={formStateHandler}
                    form={form}
                    setForm={setForm}
                  />
                </Background>
              )}
              {form.step >= 3 && (
                <ThirdStep
                  errorClassHandler={errorClassHandler}
                  hero={hero}
                  scrollToView={scrollToView}
                  step3={step3}
                  HeroJSON={heroJSON}
                  formStateHandler={formStateHandler}
                  form={form}
                  setForm={setForm}
                  results={results}
                />
              )}
            </section>
            {form.step >= 4 && (
              <Background>
                <Stats results={results} />
              </Background>
            )}
          </>
        )}
      </article>
    </main>
  );
};

export default Homepage;

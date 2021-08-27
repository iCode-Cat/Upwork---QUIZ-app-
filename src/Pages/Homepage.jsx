import React, { useState, useRef, useEffect } from 'react';
import FirstStep from '../Components/FirstStep';
import SecondStep from '../Components/SecondStep';
import ThirdStep from '../Components/ThirdStep';
import Hero from '../Components/Hero';
import style from '../Scss/Homepage.module.scss';
import Timeline from '../Components/Timeline';
import Stats from '../Components/Stats/Stats';
import Background from '../Components/Background';
import footer from '../Images/footer.png';
import header from '../Images/header.png';
import { useSelector } from 'react-redux';

const Homepage = () => {
  // Main state
  const state = useSelector((state) => state.quiz);
  const defaultJson = state.defaultJson;

  // State that saves user answers
  const [form, setForm] = useState({
    step: 1,
  });

  console.log(form);

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

  useEffect(() => {
    document.title = defaultJson.hero.title;
  }, []);

  return (
    <main className={style.wrapper}>
      <article>
        <img width='100%' src={header} alt='' />
        <Hero
          step1={step1}
          scrollToView={scrollToView}
          hero={hero}
          defaultJson={defaultJson}
          form={form}
          formStateHandler={formStateHandler}
        />
        {isEnd && (
          <>
            <section className={style.steps}>
              {/* <Timeline
                  form={form}
                  step1={step1}
                  step2={step2}
                  step3={step3}
                  style={style}
                /> */}
              {form.step >= 1 && (
                <FirstStep
                  errorClassHandler={errorClassHandler}
                  step2={step2}
                  scrollToView={scrollToView}
                  step1={step1}
                  defaultJson={defaultJson}
                  formStateHandler={formStateHandler}
                  form={form}
                  setForm={setForm}
                  results={results}
                />
              )}
              {form.step >= 2 && defaultJson.numberOfSteps >= 2 && (
                <Background>
                  <SecondStep
                    errorClassHandler={errorClassHandler}
                    step3={step3}
                    scrollToView={scrollToView}
                    step2={step2}
                    defaultJson={defaultJson}
                    formStateHandler={formStateHandler}
                    form={form}
                    setForm={setForm}
                    results={results}
                  />
                </Background>
              )}
              {form.step >= 3 && defaultJson.numberOfSteps >= 3 && (
                <ThirdStep
                  errorClassHandler={errorClassHandler}
                  hero={hero}
                  scrollToView={scrollToView}
                  step3={step3}
                  defaultJson={defaultJson}
                  formStateHandler={formStateHandler}
                  form={form}
                  setForm={setForm}
                  results={results}
                />
              )}
            </section>

            {form.step >= 4 && (
              <Background bg>
                <Stats defaultJson={defaultJson} results={results} />
              </Background>
            )}
            <img width='100%' src={footer} alt='' />
          </>
        )}
      </article>
    </main>
  );
};

export default Homepage;

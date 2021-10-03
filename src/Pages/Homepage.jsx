import React, { useState, useRef, useEffect } from 'react';
import FirstStep from '../Components/Steps/FirstStep';
import SecondStep from '../Components/Steps/SecondStep';
import ThirdStep from '../Components/Steps/ThirdStep';
import Hero from '../Components/Hero';
import style from '../Scss/Homepage.module.scss';
import Calculation from '../Components/Calculation/Stats';
import Background from '../Components/Background';
import { useSelector, useDispatch } from 'react-redux';
import { setUserState } from '../Redux/quizSlice';
import '../Components/Steps/svgLine.scss';
import TimelineWeb from '../Components/Timelines/TimelineWeb';
import CalculationStats from '../Components/Steps/CalculationStats';
import scrollIntoView from 'scroll-into-view';
import Recommendation from '../Components/Recommendation/Recommendation';
import Pin from '../Components/Pin';
import AnimatedButton from '../Components/AnimatedButton';

const Homepage = ({ app, hero, results, step1, step2, step3 }) => {
  // Main state
  const state = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const defaultJson = state.defaultJson;

  // State that saves user answers
  const [form, setForm] = useState({
    step: '',
  });

  const [isEnd, setIsEnd] = useState(true);

  // Functions
  const formStateHandler = ({ field, value }) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const scrollToView = (view) => {
    let speedInSeconds = 1;
    setTimeout(() => {
      console.log(view);
      scrollIntoView(view.current, {
        time: 500,
      });
    }, speedInSeconds);
  };

  const errorClassHandler = (field) => {
    if (form[field] === '') return true;
    return false;
  };

  useEffect(() => {
    document.title = defaultJson.hero.title;
  }, []);

  // Update redux user state
  useEffect(() => {
    dispatch(setUserState(form));
  }, [form]);

  return (
    <main ref={app} className={style.wrapper}>
      <article>
        {/* <img width='100%' src={header} alt='' /> */}
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
              {/* Timeline animation for web */}
              {/* <TimelineWeb /> */}
              {/* Timeline animation for mob */}
              {/* <TimelineMob /> */}
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
              <>
                <Calculation defaultJson={defaultJson} />
                <CalculationStats state={state} results={results} />

                <Recommendation />
                <Pin />
                <Background report bg>
                  <AnimatedButton />
                </Background>
              </>
            )}
            {/* <img width='100%' src={footer} alt='' /> */}
          </>
        )}
      </article>
    </main>
  );
};

export default Homepage;

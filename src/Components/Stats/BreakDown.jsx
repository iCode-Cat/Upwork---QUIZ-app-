import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import circle from '../../Images/circle.svg';
import info from '../../Images/info.svg';
import Dislaimer from './Dislaimer';
import PopupInfo from './PopupInfo.jsx';
import classes from '../../Scss/Disclaimer.module.scss';
import { updateUserState } from '../../Redux/quizSlice';

const Labels = ({ style, data, toggle, withFormula }) => {
  return (
    <section className={style.labels}>
      {data.labels.map((item, index) => (
        <div key={index} className={style.labels_container}>
          <div
            className={style.labels_dot}
            style={{
              background: item.color,
              width: '24px',
              height: '24px',
              borderRadius: '50%',
            }}
            className={style.labels_dot}
          ></div>

          <p className={style.labels_value}>
            {withFormula[toggle].items[index].result}
          </p>
          <div className={style.labels_title}>
            <p>{item.name}</p>
            <div>
              {!data.disclaimer.isActive && (
                <Dislaimer
                  label={true}
                  data={data}
                  style={classes}
                  info={info}
                />
              )}
            </div>
          </div>
          {/* DISCLAIMER */}
        </div>
      ))}
    </section>
  );
};

const BreakDown = ({ data, style, toggle }) => {
  const dispatch = useDispatch();
  const { costs } = data;
  const { yourCost, cognniCost } = costs[0];
  // const { disclaimer } = breakDown;
  const [isVisible, setIsVisible] = useState(false);
  const [resultWithFormula, setResultWithFormula] = useState({});
  const totalSaving = Number(yourCost.amount) - Number(cognniCost.amount);

  // Calculation
  const state = useSelector((state) => state.quiz);
  const defaultJson = state.defaultJson;
  const { stats } = defaultJson;
  const { currency } = stats;
  const tabMenus = stats.tabMenus;
  const { numberEmployees, results } = state.userState;
  // Factory Functions to calculate
  const calculate = ({ numberEmployees, variable, divider }) => {
    return Math.floor(numberEmployees * variable * divider);
  };
  // Send to server
  const withFormula = tabMenus.map((item, index) => {
    const calc = item.labels.map((label) => {
      return {
        name: label.name,
        formulaVariable: label.formulaVariable,
        result: calculate({
          numberEmployees,
          variable: label.formulaVariable,
          divider: 1,
        }),
      };
    });
    return {
      items: [...calc],
      menu: item.name,
      withFormula: null,
    };
  });

  useEffect(() => {
    const finalCalculate = withFormula.map((ctx) => {
      const object = ctx.items.map((ctx) => ctx.result);
      const sum = object.reduce((a, b) => a + b, 0);
      ctx.withFormula = Math.floor(sum * 0.3);
      ctx.withOutFormula = sum;
      ctx.savings = sum - Math.floor(sum * 0.3);

      return ctx;
    });
    dispatch(updateUserState(finalCalculate));
  }, [dispatch]);

  return (
    <section className={style.breakDown}>
      {/* <p className={style.breakDown_title}>{data.breakDown.title}</p> */}
      <div className={style.breakDown_stats}>
        <span className={style.svg}>
          <div className={style.svg_container}>
            <p className={style.svg_currency}>{data.currency}</p>
            {/* SAVING AMOUNT */}
            <p className={style.svg_amount}>
              {results && results[toggle].savings}
            </p>
            <p className={style.svg_subTitle}>{data.subTitle}</p>
          </div>
          <img src={circle} alt='circle' className={style.breakDown_svg} />
        </span>
        {/* <Labels
          withFormula={withFormula}
          toggle={toggle}
          style={style}
          data={data.breakDown}
        /> */}
        {/* DISCLAIMER */}
        {false && (
          <div
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            className={style.disclaimer}
          >
            {/* <PopupInfo
              isVisible={isVisible}
              disclaimer={data.breakDown.disclaimer}
              setIsVisible={setIsVisible}
            /> */}
            <img src={info} alt='info-icon' className={style.disclaimer_icon} />
            <p className={style.disclaimer_text}>Disclaimer</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BreakDown;

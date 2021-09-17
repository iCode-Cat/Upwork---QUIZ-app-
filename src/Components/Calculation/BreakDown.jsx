import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserState } from '../../Redux/quizSlice';

const BreakDown = ({ style }) => {
  const dispatch = useDispatch();
  // Calculation
  const state = useSelector((state) => state.quiz);
  const defaultJson = state.defaultJson;
  const { stats } = defaultJson;
  const tabMenus = stats.tabMenus;
  const { numberEmployees } = state.userState;
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
        color: label.color,
        tooltipText: label.tooltipText,
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
      cost: item.costs,
    };
  });

  useEffect(() => {
    const finalCalculate = withFormula.map((ctx) => {
      const coggniCompare = ctx.cost[0].cognniCost.formulaVariable;
      const yourCostCompare = ctx.cost[0].yourCost.formulaVariable;
      const object = ctx.items.map((ctx) => ctx.result);
      const sum = object.reduce((a, b) => a + b, 0);
      ctx.withFormulaCompare = Math.floor(numberEmployees * coggniCompare);
      ctx.withOutFormulaCompare = Math.floor(numberEmployees * yourCostCompare);
      ctx.savings = ctx.withOutFormulaCompare;
      ctx.savingsCompare =
        ctx.withOutFormulaTabCompare - ctx.withFormulaCompare;
      return ctx;
    });
    dispatch(updateUserState(finalCalculate));
  }, [dispatch]);

  return <section className={style.breakDown}></section>;
};

export default BreakDown;

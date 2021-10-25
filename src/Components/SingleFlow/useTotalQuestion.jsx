import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export function useTotalQuestion() {
  const state = useSelector((state) => state.quiz);
  const singleFlow = state.defaultJson.steps[0].fields;
  const [allAnswered, setAllAnswered] = useState(false);
  const [counter, setCounter] = useState(0);
  const [decrement, setDecrement] = useState(0);

  // Loop through the questions
  const filter = singleFlow
    .filter((ctx) => !ctx.relatedQuestion)
    .map((ctx, index) => {
      const array = [];
      // Question with this property means, it has following question
      if (ctx.callQuestion) {
        array.push(index);
        array.push(index);
      } else {
        array.push(index);
      }
      return array.length;
    });

  const totalQuestions = filter.reduce((a, b) => a + b);

  useEffect(() => {
    if (counter === totalQuestions - 1 && counter === decrement) {
      setAllAnswered(true);
    }
  }, [decrement]);

  return [
    allAnswered,
    setAllAnswered,
    setCounter,
    counter,
    totalQuestions,
    decrement,
    setDecrement,
  ];
}

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
const CardCondition = ({ type }) => {
  const [conditionCard, setConditionCard] = useState([]);
  const state = useSelector((state) => state.quiz);

  useEffect(() => {
    const cards = state.cards
      .filter((card) => card.section === type)
      .map((card) => {
        // Show without without condidition
        if (
          card.conditionedTagsMissing === null &&
          card.conditionedTagsExists === null
        ) {
          setConditionCard([...conditionCard, card]);
          return card;
        }
        // Card has only existing conditions
        if (
          card.conditionedTagsMissing === null &&
          card.conditionedTagsExists?.every((tag) =>
            state.tags.includes(tag.name)
          )
        ) {
          setConditionCard([...conditionCard, card]);
          return card;
        }

        // Card has only missing conditions
        if (
          card.conditionedTagsExists === null &&
          card.conditionedTagsMissing?.every((tag) =>
            state.tags.includes(tag.name)
          )
        ) {
          setConditionCard([...conditionCard, card]);
          return card;
        }

        // Show with conditions filter both
        if (
          card.conditionedTagsExists?.every((tag) =>
            state.tags.includes(tag.name)
          ) &&
          card.conditionedTagsMissing?.every(
            (tag) => !state.tags.includes(tag.name)
          )
        ) {
          setConditionCard([...conditionCard, card]);
          return card;
        }
      });
  }, []);

  return conditionCard;
};

export default CardCondition;

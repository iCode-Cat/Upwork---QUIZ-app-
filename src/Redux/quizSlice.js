import { createSlice } from '@reduxjs/toolkit';
import { defaultJson } from '../Json/default';

const initialState = {
  defaultJson,
};

export const quizSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setJson: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setJson } = quizSlice.actions;

export default quizSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultJson } from '../Json/default';
import { oxfordJson } from '../Json/oxford_123';

const initialState = {
  defaultJson,
  userState: false,
  globalStepHeight: 0,
};

export const quizSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUserState: (state, action) => {
      state.userState = action.payload;
    },
    updateUserState: (state, action) => {
      state.userState.results = action.payload;
    },
    getScrollSize: (state, action) => {
      state.scrollSize = action.payload;
    },
    updateStepHeight: (state, action) => {
      state.globalStepHeight = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserState, updateUserState, updateStepHeight } =
  quizSlice.actions;

export default quizSlice.reducer;

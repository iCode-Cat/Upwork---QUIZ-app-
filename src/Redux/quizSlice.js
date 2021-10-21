import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultJson } from '../Json/default';
import { kizanJson } from '../Json/kizan';
import { securityPractices } from '../Json/SecurityPractices';
import { singleFlow } from '../Json/singleFlow';

const initialState = {
  defaultJson: null,
  userState: false,
  globalStepHeight: 0,
  questionOrder: null,
};

export const quizSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUserState: (state, action) => {
      if (action.payload === 'connect') {
        state.userState.step = 5;
        return;
      }
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
    // Set question order for related questions
    setQuestionOrder: (state, action) => {
      state.questionOrder = action.payload;
    },
    updateJson: (state, action) => {
      const payload = action.payload;
      switch (payload) {
        case 'securityPractices':
          state.defaultJson = securityPractices;
          break;
        case 'kizan':
          state.defaultJson = kizanJson;
          break;
        case 'singleFlow':
          state.defaultJson = singleFlow;
          break;
        case 'default':
          state.defaultJson = defaultJson;
          break;

        default:
          console.log('No JSON provided');
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserState,
  updateUserState,
  updateStepHeight,
  updateJson,
  setQuestionOrder,
} = quizSlice.actions;

export default quizSlice.reducer;

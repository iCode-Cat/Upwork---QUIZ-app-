import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultJson } from '../Json/default';
import { kizanJson } from '../Json/kizan';
import { securityPractices } from '../Json/SecurityPractices';

const initialState = {
  defaultJson: null,
  userState: false,
  globalStepHeight: 0,
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
    handleEvent: (state, action) => {},
    updateJson: (state, action) => {
      const payload = action.payload;
      switch (payload) {
        case 'securityPractices':
          state.defaultJson = securityPractices;
          break;
        case 'kizan':
          state.defaultJson = kizanJson;
          break;
        case 'default':
          state.defaultJson = defaultJson;
          break;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserState, updateUserState, updateStepHeight, updateJson } =
  quizSlice.actions;

export default quizSlice.reducer;

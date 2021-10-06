import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultJson } from '../Json/default';
import { kizanJson } from '../Json/kizan';

const initialState = {
  defaultJson: null,
  userState: false,
  event: 'roi_landing_page_visit',
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
    handleEvent: (state, action) => {},
    updateJson: (state, action) => {
      const payload = action.payload;
      switch (payload) {
        case 'kizan':
          state.defaultJson = kizanJson;
          break;
        case 'defaultJson':
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

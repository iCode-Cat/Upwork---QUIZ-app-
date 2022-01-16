import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  temp: false,
  recommendation: [],
  shouldDo: [],
  worryAbout: [],
};

// Dynamic zone for recommendation content etc.

const dynamicZone = createSlice({
  name: 'dynamicZone',
  initialState,
  reducers: {
    temp: (state, action) => {
      state.temp = action.payload;
    },
    // Store dynamics
    recommendation: (state, action) => {
      state.recommendation = [...state.recommendation, action.payload];
    },
    shouldDo: (state, action) => {
      state.shouldDo = [...state.shouldDo, action.payload];
    },
    worryAbout: (state, action) => {
      state.worryAbout = [...state.worryAbout, action.payload];
    },
  },
  extraReducers: (builder) => {},
});

// Action creators are generated for each case reducer function
export const { temp, recommendation, shouldDo, worryAbout } =
  dynamicZone.actions;

export default dynamicZone.reducer;

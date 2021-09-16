import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSent: false,
};

const monitoringSlice = createSlice({
  name: 'monitoring',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

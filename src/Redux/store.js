import { configureStore } from '@reduxjs/toolkit';
import dynamicSlice from './dynamicSlice';
import quizReducer from './quizSlice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    dynamic: dynamicSlice,
  },
});

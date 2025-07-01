import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './reducer';

const store = configureStore({
  reducer: timerReducer,
});

export default store;


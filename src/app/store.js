import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import reducer from './features/reducer';

export const store = configureStore({
  reducer: {
    reducer: reducer.reducer,
  },
});

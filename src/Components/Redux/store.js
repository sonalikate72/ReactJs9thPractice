import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';
import userReducer from './UsersSlice'
export const store = configureStore({
  reducer: {
    counter:counterReducer,
   userData:userReducer,
  },
})
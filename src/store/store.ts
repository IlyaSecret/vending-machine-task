import { configureStore } from "@reduxjs/toolkit";
import { mainReducerSlice } from './reducer';

export const store = configureStore({
    reducer: {
      main: mainReducerSlice.reducer
    },
  });
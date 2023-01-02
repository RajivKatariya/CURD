import {configureStore } from '@reduxjs/toolkit';
import {counterSlice10} from './Myslide';

export const Mystorage = configureStore({
    reducer: {
      counter:counterSlice10
    },
  })
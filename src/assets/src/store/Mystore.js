import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "./CounterSlice"; 

export const Mystore =configureStore({
    reducer:{
        counter:counterReducer,
    }

});

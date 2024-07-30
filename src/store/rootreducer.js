import { combineReducers } from "@reduxjs/toolkit";
import { Listreducer } from "./Listreducer";

 export const rootReducer = combineReducers({
    List : Listreducer
})
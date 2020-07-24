import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "../store/initialStates";

const colorsReducer = createReducer(initialState.colors, {});

export default colorsReducer;

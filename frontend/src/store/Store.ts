import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/RootReducer";
import SchrelloLoger from "../enhancers/SchrelloLoger";
import { SCHRELLO_DEFAULT_STORE_NAME, SchrelloStateStore } from "../enhancers/SchrelloStateStore";
import { initialState } from "./initialStates";

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware()
        .concat(thunkMiddleware)
        .concat(logger)
        // .concat(SchrelloLoger)
        .concat(SchrelloStateStore),
    // Uncomment for use state from localStorage.
    // preloadedState: localStorage[SCHRELLO_DEFAULT_STORE_NAME]
    //     ? JSON.parse(localStorage[SCHRELLO_DEFAULT_STORE_NAME])
    //     : initialState,
});

export default store;

export type SchrelloDispatch = typeof store.dispatch;

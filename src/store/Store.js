import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {logger} from "redux-logger";
import rootReducer from "../reducers/RootReducer";
import {SchrelloLoger} from "../enhancers/SchrelloLoger";

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware().concat(logger).concat(SchrelloLoger),
});

export default store;

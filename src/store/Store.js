import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { logger } from "redux-logger";
import rootReducer from "../reducers/RootReducer";

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware().concat(logger),
});

export default store;

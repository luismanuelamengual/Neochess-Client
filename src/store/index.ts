import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {connectRouter, routerMiddleware} from "connected-react-router";
import {persistStore} from 'redux-persist';
import history from "../history";

export const store = configureStore({
    reducer: {
        router: connectRouter(history)
    },
    middleware: [
        ...getDefaultMiddleware({serializableCheck: false}),
        routerMiddleware(history)
    ]
});

export const storePersistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

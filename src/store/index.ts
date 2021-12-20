import {configureStore} from "@reduxjs/toolkit";
import {connectRouter, routerMiddleware} from "connected-react-router";
import {persistStore, persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import history from "../history";
import {authReducer} from "./auth";

export const store = configureStore({
    reducer: {
        router: connectRouter(history),
        auth: persistReducer({ key: 'auth', storage: storageSession}, authReducer),
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}).concat([
        routerMiddleware(history)
    ])
});

export const storePersistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

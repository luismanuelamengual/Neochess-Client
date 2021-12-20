import {configureStore} from "@reduxjs/toolkit";
import {connectRouter, routerMiddleware} from "connected-react-router";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import {persistStore, persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import history from "../history";
import {authReducer} from "./auth";
import {connectionReducer} from "./connection";

export const store = configureStore({
    reducer: {
        router: connectRouter(history),
        auth: persistReducer({ key: 'auth', storage: storageSession}, authReducer),
        connection: persistReducer({ key: 'connection', storage: storageSession}, connectionReducer),
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}).concat([
        routerMiddleware(history)
    ])
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const storePersistor = persistStore(store);
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export * from './connection';
export * from './auth';

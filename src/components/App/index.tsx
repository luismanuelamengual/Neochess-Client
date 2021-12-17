import React from "react";
import {Provider} from "react-redux";
import {store, storePersistor} from "../../store/store";
import {PersistGate} from "redux-persist/integration/react";
import Loading from "../Loading";
import Navigation from "../Navigation";

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={storePersistor}>
                <Navigation />
            </PersistGate>
        </Provider>
    );
}

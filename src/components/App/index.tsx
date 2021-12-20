
import {store, storePersistor} from "../../store";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import history from "../../history";
import Loading from "../Loading";
import LoginPage from "../LoginPage";
import {Path} from "../../paths";
import {ConnectedRouter} from "connected-react-router"; 
import {Redirect, Route, Switch} from "react-router-dom";

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={storePersistor}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path={Path.LOGIN}><LoginPage /></Route>
                        <Route path="*"><Redirect to={Path.LOGIN} /></Route>
                    </Switch>
                </ConnectedRouter>
            </PersistGate>
        </Provider>
    );
}

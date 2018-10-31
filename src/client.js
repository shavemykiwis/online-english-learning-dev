import "regenerator-runtime/runtime";

import React from "react";
import { render } from "react-dom";
// import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { PersistGate } from "redux-persist/integration/react";

import LanguageProvider, { locale } from "./containers/LanguageProvider";
import configureStore from "./store";
import App from "./containers/App";
import Page404 from "routes/404/components/404";
import { translationMessages } from "./i18n";

const history = createHistory();

export const { store, persistor } = configureStore(undefined, history);

const MOUNT_NODE = document.getElementById("app-container");

render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<div>Loading</div>}>
      <LanguageProvider messages={translationMessages}>
        <ConnectedRouter history={history}>
          {process.env.NODE_ENV === "production" ? (
            <Switch>
              <Route path="/" component={App} />
              <Route component={Page404} />
            </Switch>
          ) : (
            <div>
              <Switch>
                <Route path="/" component={App} />
                <Route component={Page404} />
              </Switch>
            </div>
          )}
        </ConnectedRouter>
      </LanguageProvider>
    </PersistGate>
  </Provider>,
  MOUNT_NODE
);

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(["./i18n", "containers/App"], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

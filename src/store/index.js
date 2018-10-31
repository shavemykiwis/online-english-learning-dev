import { createStore, compose, applyMiddleware } from "redux";
import saga from "redux-saga";
import { routerMiddleware } from "react-router-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducers from "../reducers";
import sagas from "sagas";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"]
};

const sagaMiddleware = saga();

function configureStore(initialState, history) {
  const middlewares = [routerMiddleware(history), sagaMiddleware];
  let enhancers;
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  if (process.env.NODE_ENV === "production") {
    enhancers = compose(applyMiddleware(...middlewares));
  } else {
    enhancers = composeEnhancers(
      applyMiddleware(...middlewares),
    );
  }

  const pReducer = persistReducer(persistConfig, reducers);

  const store = createStore(pReducer, enhancers);
  const persistor = persistStore(store);

  // const store = createStore(reducers, initialState,
  //   window.devToolsExtension && window.devToolsExtension());

  sagaMiddleware.run(sagas);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      // We need to require for hot reloading to work properly.
      const nextReducer = require("../reducers"); // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  return { store, persistor };
}

export default configureStore;

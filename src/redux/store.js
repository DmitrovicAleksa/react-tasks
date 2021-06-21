import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer.js";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas/rootSaga.js";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

export default store;

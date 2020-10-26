import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import counter from "../src/store/reducer/counter";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const rootreducers = combineReducers({
  ctr: counter
});

const store = createStore(rootreducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

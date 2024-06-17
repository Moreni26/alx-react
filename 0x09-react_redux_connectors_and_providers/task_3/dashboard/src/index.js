import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { provider } from "react-redux";
import App from "./App/App";
import uiReducer, {intialState} from "./reducers/uiReducer";
import { Map } from "immutable"; 

const store = createStore(uiReducer, Map(intialState));

ReactDOM.render(
  <React.StrictMode>
  <provider store={store}>
    <App/>
  </provider>    
  </React.StrictMode>,
  document.getElementById("root")
);

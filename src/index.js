import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store";
import { Countries } from "pages";
import "./index.css";

/**
 * @file index.js is the root file that contains the redux provider
 * @author Fares Alhelo
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Countries />
    </Provider>
  </React.StrictMode>
);

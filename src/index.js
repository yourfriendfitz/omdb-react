import "./bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");

ReactDOM.unstable_createRoot(rootElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

serviceWorker.register();

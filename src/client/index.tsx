import React from "react";
import ReactDOM from "react-dom";
// @ts-ignore
//import { render } from "react-snapshot";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
// @ts-ignore
import { loadableReady } from "@loadable/component";
/*import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

 const generateClassName = createGenerateClassName({
  productionPrefix: "c",
}); */

window.addEventListener(
  "load",
  () => {
    loadableReady(() => {
      ReactDOM.hydrate(
        //render(
        /* <StylesProvider generateClassName={generateClassName}> */
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>,
        /* </StylesProvider> */ document.getElementById("root")
      );
    });
  },
  false
);

/* ReactDOM.hydrate(
  //render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

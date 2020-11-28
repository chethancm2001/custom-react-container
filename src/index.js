import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div className="main-div">
    <App text="react" />
    <App color="pink" />
    <App />
    <App text="chethan" />
  </div>,
  rootElement
);

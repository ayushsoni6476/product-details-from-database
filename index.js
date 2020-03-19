import React from "react";
import ReactDOM from "react-dom";
import Data from "./Data";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App data ={Data} />,
  rootElement
);
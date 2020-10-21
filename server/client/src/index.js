import React from "react";
import ReactDOM from "react-dom";
import { lazyLoad } from "./util/lazy";
import "./sass/app.scss";

import App from "./App";
lazyLoad();
ReactDOM.render(<App />, document.getElementById("root"));

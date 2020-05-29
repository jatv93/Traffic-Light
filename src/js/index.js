import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";

//import your own components
import { TrafficLight } from "./component/home.js";

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));

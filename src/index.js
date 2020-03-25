import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename="/reactjs-website">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

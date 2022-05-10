require("dotenv").config();
import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import Home from "./views/Home/Home";
import "./assets/styles/main.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

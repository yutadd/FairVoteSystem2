import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
const NODE_ENV = process.env.NODE_ENV;
console.log(NODE_ENV);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import "./App.scss";

const root = ReactDOM.createRoot(document.getElementById("root")); // Utilisation de createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

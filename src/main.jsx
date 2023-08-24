import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import { App } from "./Components/App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
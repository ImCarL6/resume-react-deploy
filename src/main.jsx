import React from "react";
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

import "./App.css";

import { App } from "./Components/App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
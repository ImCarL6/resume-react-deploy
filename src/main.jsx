import React from "react";
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import { App } from "./Components/App";

import { inject } from '@vercel/analytics';
 
inject();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
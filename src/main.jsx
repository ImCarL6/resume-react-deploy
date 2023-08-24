import React from "react";
import { createRoot } from "react-dom/client"
import { analytics } from '@vercel/analytics';
import { BrowserRouter } from "react-router-dom";
import config from '../config.json'

import "./App.css";

import { App } from "./Components/App";

analytics({
  projectId: config.VERCEL_PROJECT_ID,
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
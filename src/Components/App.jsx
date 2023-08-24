import React from "react";
import { Outlet, Route, Routes } from "react-router-dom"; // Import Outlet and Routes
import { Resume } from "../Pages/Resume";

export const App = () => {
  return (
    <Routes>
      <Route path="/br" element={<Resume lang="br" />} />
      <Route path="/" element={<Resume />} />
    </Routes>
  );
};
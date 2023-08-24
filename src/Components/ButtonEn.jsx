import React from "react";
import { useNavigate } from "react-router-dom";

export const LanguageToggleEn = () => {
  const navigate = useNavigate();

  const changeLanguage = () => {
    navigate("/");
  };

  return (
    <button onClick={changeLanguage} className="btn-toggle-language">
      <img src="/images/us.png" alt="US Flag" />
    </button>
  );
};
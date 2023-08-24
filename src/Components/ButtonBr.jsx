import React from "react";
import { useNavigate } from "react-router-dom";

export const LanguageToggleBr = () => {
  const navigate = useNavigate(); 

  const changeLanguage = () => {
    navigate("/br");
  };

  return (
    <button onClick={changeLanguage} className="btn-toggle-language">
      <img src="/images/brazil-.png" alt="Brazilian Flag" />
    </button>
  );
};
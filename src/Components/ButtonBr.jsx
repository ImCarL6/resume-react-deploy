import React from "react";
import { useHistory } from "react-router-dom";

export const LanguageToggleBr = () => {
  const history = useHistory();

  const changeLanguage = () => {
    history.push("/br");
    window.location.reload();
  };

  return (
    <button onClick={changeLanguage} className="btn-toggle-language">
      <img src="/images/brazil-.png" alt="Brazilian Flag" />
    </button>
  );
};
import React from "react";
import { useHistory } from "react-router-dom";

export const LanguageToggleEn = () => {
  const history = useHistory();

  const changeLanguage = () => {
    history.push("/");
    window.location.reload();
  };

  return (
    <button onClick={changeLanguage} className="btn-toggle-language">
      <img src="/images/us.png" alt="US Flag" />
    </button>
  );
};
import { useState, useEffect } from "react";
import Particles from "react-particles-js";
import { ParticlesParams } from "../Schemas/Particles";

export const Options = () => {
  var { lsTheme, lsIcon, lsSnow } = "";
  try {
    lsTheme = localStorage.getItem("theme");
    lsIcon = localStorage.getItem("icon");
    lsSnow = JSON.parse(localStorage.getItem("particles"));
  } catch (e) {
    console.error(`All Cookies blocked - Error: ${e.message}`);
  }

  const [theme, setTheme] = useState(lsTheme || "light");
  const [icon, setIcon] = useState(lsIcon || "bx-moon");
  const [snow, setSnow] = useState(lsSnow);
  const [shouldResetThemeAnimation, setShouldResetThemeAnimation] = useState(false);
  const [shouldResetSnowAnimation, setShouldResetSnowAnimation] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("icon", icon);
    localStorage.setItem("snow", snow);
    document.body.classList[theme === "dark" ? "add" : "remove"]("dark-theme");
  }, [theme, snow, icon]);

  const SnowEffect = () =>
    snow && theme === "dark" && <Particles params={ParticlesParams} />;

  const _enableSnow = () => {
    setSnow(!snow);
    setShouldResetSnowAnimation(true);

    // Reset animation after a short delay
    setTimeout(() => {
      setShouldResetSnowAnimation(false);
    }, 50);
  };
  const _toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    icon === "bx-sun" ? setIcon("bx-moon") : setIcon("bx-sun");
    setShouldResetThemeAnimation(true);

    // Reset animation after a short delay
    setTimeout(() => {
      setShouldResetThemeAnimation(false);
    }, 50);
  };

  return (
    <div className="home__options">
      {theme === "dark" && (
        <i
          className={`bx bx-cloud-snow enable-snow animated-button pulse-aura button-indicator ${
            shouldResetSnowAnimation ? "reset-animation" : ""
          }`}
          title="Activate Snow"
          id="snow-button"
          onClick={_enableSnow}
        />
      )}
      <SnowEffect />
      <i
        className={`bx ${icon} change-theme animated-button pulse-aura button-indicator ${
          shouldResetThemeAnimation ? "reset-animation" : ""
        }`}
        title="Toggle Theme"
        id="theme-button"
        onClick={_toggleTheme}
      />
    </div>
  );
};

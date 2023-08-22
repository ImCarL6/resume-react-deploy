import { useState, useEffect } from "react";
import Particles from "react-particles-js";
import { ParticlesParams } from "../Schemas/Particles";

export const Options = () => {
  var { lsIcon } = "";
  try {
    lsIcon = localStorage.getItem("icon");
  } catch (e) {
    console.error(`All Cookies blocked - Error: ${e.message}`);
  }

  const [icon, setIcon] = useState(lsIcon || "bx-moon");
  const [theme, setTheme] = useState("dark");
  const [snow, setSnow] = useState(true);
  const [snowAnimation, setSnowAnimation] = useState(false);

  useEffect(() => {
    localStorage.setItem("icon", icon);
    document.body.classList[theme === "dark" ? "add" : "remove"]("dark-theme");
  }, [theme, icon]);

  const SnowEffect = () =>
  snow && theme === "dark" && <Particles params={ParticlesParams} />;

  const toggleSnow = () => {
    setSnow(!snow);
  };

  const _toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIcon(icon === "bx-sun" ? "bx-moon" : "bx-sun");
    setSnowAnimation(false);

    if (theme === "dark") {
      setSnow(false);
    }
  };

  return (
    <div className="home__options" id="resume__options">
      {theme === "dark" && (
        <i
          className={`bx bx-cloud-snow enable-snow animated-button pulse-aura button-indicator ${
            snow ? "reset-animation" : ""
          }`}
          title="Activate Snow"
          id="snow-button"
          onClick={toggleSnow}
        />
      )}
      <SnowEffect />
      <i
  className={`bx ${icon} change-theme animated-button pulse-aura button-indicator start-animation ${
    snowAnimation ? "reset-animation" : ""
  }`}
  title="Toggle Theme"
  id="theme-button"
  onClick={_toggleTheme}
/>
    </div>
  );
};
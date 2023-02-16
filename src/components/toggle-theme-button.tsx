import React, { useState } from "react";
import { Button } from "./button";
import { MdDarkMode, MdLightMode } from "react-icons/md";

type Themes = "light" | "dark";

const LightDarkIcon = ({ theme }: { theme: Themes }) => {
  if (theme === "dark") {
    return <MdLightMode />;
  }

  return <MdDarkMode />;
};

export const ToggleThemeButton = () => {
  const [currentTheme, setCurrentTheme] = useState<Themes>(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark"
  );

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
  };

  return (
    <Button onClick={toggleTheme}>
      <LightDarkIcon theme={currentTheme} />
    </Button>
  );
};

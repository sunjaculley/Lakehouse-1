import { useEffect, useState } from "react";

type Theme = "dark" | "light";
const KEY = "ignition-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(KEY);
    setTheme(stored === "light" ? "light" : "dark");
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.dataset["theme"] = theme;
    window.localStorage.setItem(KEY, theme);
  }, [theme]);

  if (!theme) return null;

  return (
    <button
      type="button"
      className="themetoggle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={theme === "dark" ? "Switch to light background" : "Switch to dark background"}
      title={theme === "dark" ? "Switch to light background" : "Switch to dark background"}
    >
      <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
      <span className="themetoggle__label">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}

import { useState, useEffect } from "react";
import "../styles/wiki.css";

export default function AppearanceBox() {
  const [textSize, setTextSize] = useState("standard");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Remove all possible classes first
    document.body.classList.remove(
      "text-small",
      "text-standard",
      "text-large",
      "theme-light",
      "theme-dark"
    );

    // Add active theme class
    document.body.classList.add(`theme-${theme}`);

    // Add active text size class
    document.body.classList.add(`text-${textSize}`);
  }, [textSize, theme]);

  return (
    <aside className="wiki-appearance">
      <div className="appearance-box">
        <h3>Appearance</h3>

        {/* TEXT SIZE SECTION */}
        <div className="appearance-section">
          <strong>Text</strong>
          <label>
            <input
              type="radio"
              name="text"
              value="small"
              checked={textSize === "small"}
              onChange={() => setTextSize("small")}
            />{" "}
            Small
          </label>
          <label>
            <input
              type="radio"
              name="text"
              value="standard"
              checked={textSize === "standard"}
              onChange={() => setTextSize("standard")}
            />{" "}
            Standard
          </label>
          <label>
            <input
              type="radio"
              name="text"
              value="large"
              checked={textSize === "large"}
              onChange={() => setTextSize("large")}
            />{" "}
            Large
          </label>
        </div>

        {/* COLOR THEME SECTION */}
        <div className="appearance-section">
          <strong>Color</strong>
          <label>
            <input
              type="radio"
              name="color"
              value="light"
              checked={theme === "light"}
              onChange={() => setTheme("light")}
            />{" "}
            Light
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="dark"
              checked={theme === "dark"}
              onChange={() => setTheme("dark")}
            />{" "}
            Dark
          </label>
        </div>
      </div>
    </aside>
  );
}

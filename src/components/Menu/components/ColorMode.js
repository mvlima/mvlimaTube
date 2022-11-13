import React, { useState } from "react";

export const ColorModeContext = React.createContext({
  mode: "light",
  setMode: () => {
    alert("set me up first!");
  },
  toggleMode: () => {
    alert("set me up first!");
  },
});

export default function ColorModeProvider({ children, initialMode }) {
  const [mode, setMode] = useState(initialMode);

  function toggleMode() {
    if (mode === "dark") setMode("light");
    if (mode === "light") setMode("dark");
  }

  return (
    <ColorModeContext.Provider
      value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

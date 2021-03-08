import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [navTheme, setNavTheme] = useState("landing");

  return (
    <Context.Provider value={[navTheme, setNavTheme]}>
      {children}
    </Context.Provider>
  );
};

import React, { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children, value }) => {
  return React.createElement(UserContext.Provider, { value }, children);
};


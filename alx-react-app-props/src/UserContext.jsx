import { createContext } from "react";

export const UserContext = createContext(); // Create the context

export const UserProvider = ({ children, value }) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

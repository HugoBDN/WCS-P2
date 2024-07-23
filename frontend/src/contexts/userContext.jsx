import { createContext, useState } from "react";

export const userContext = createContext({});

// eslint-disable-next-line react/prop-types, react/function-component-definition
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

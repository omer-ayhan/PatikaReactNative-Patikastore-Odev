import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);
  return (
    <GlobalContext.Provider value={[basketItems, setBasketItems]}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

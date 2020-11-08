import React, { createContext, useContext, useReducer } from "react";

export const FoodContext = createContext();

export const Provider = ({ reducer, initialState, children }) => (
  <FoodContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </FoodContext.Provider>
);
//this is how use it insisde of a component
export const useStateValue = () => useContext(FoodContext);

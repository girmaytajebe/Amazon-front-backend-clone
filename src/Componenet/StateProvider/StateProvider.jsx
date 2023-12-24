
import React, { createContext, useContext, useReducer } from "react";

// Create the context for the global state
export const StateContext = createContext();

// Wrap the app component tree with this provider component
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// Custom hook to access the global state and dispatch function
export const useStateValue = () => useContext(StateContext);
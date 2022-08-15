// React Import
import React, { createContext, useReducer } from 'react';

// DataLayerContext
export const DataLayerContext = createContext();

// DataLayer
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);
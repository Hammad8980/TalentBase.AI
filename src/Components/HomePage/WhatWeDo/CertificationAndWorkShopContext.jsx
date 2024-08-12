import React, { createContext, useState } from 'react';

export const CandWContext = createContext();

export const CandWDataProvider = ({ children }) => {
  const [CandWData, setCandWData] = useState({ Title: '', Data: '' });

  return (
    <CandWContext.Provider value={{ CandWData, setCandWData }}>
      {children}
    </CandWContext.Provider>
  );
};

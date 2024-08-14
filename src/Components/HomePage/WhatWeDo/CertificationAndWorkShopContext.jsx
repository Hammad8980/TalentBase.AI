import React, { createContext, useState } from 'react';

export const WhatWeDoContext = createContext();

export const WhatWeDoDataProvider = ({ children }) => {
  const [WhatWEDoServicesTitleAndData, setWhatWeDoServicesTitleAndData] = useState({ Title: '', Data: '' });

  return (
    <WhatWeDoContext.Provider value={{ WhatWEDoServicesTitleAndData, setWhatWeDoServicesTitleAndData }}>
      {children}
    </WhatWeDoContext.Provider>
  );
};

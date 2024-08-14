import React, { useContext } from 'react';
import { WhatWeDoContext } from './CertificationAndWorkShopContext';

const LearningStreams = () => {
  const { WhatWEDoServicesTitleAndData } = useContext(WhatWeDoContext);
  const { Title, Data } = WhatWEDoServicesTitleAndData;

  if (!Title || !Data) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <h1>{Title}</h1>
      <p>{Data}</p>
    </div>
  );
}

export default LearningStreams

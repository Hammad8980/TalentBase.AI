import React, { useContext } from 'react';
import { CandWContext } from './CertificationAndWorkShopContext';

const LearningPathDetails = () => {
  const { CandWData } = useContext(CandWContext);
  const { Title, Data } = CandWData;

  if (!Title || !Data) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <h1>{Title}</h1>
      <p>{Data}</p>
    </div>
  );
};

export default LearningPathDetails;

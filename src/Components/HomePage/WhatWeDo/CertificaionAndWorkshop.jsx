import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CandWContext } from './CertificationAndWorkShopContext';

const CertificaionAndWorkshop = ({ Title, Data }) => {
  const { setCandWData } = useContext(CandWContext);

  const handleLearnMoreClick = () => {
    setCandWData({ Title, Data });
  };

  return (
    <div className='TalentBaseComp'>
      <h4>{Title}</h4>
      <p>{Data.length <= 150 ? Data : `${Data.slice(0, 150)}...`}</p>
      <Link to="/learningPathDetails" onClick={handleLearnMoreClick}>
        Learn More
      </Link>
    </div>
  );
};

export default CertificaionAndWorkshop;

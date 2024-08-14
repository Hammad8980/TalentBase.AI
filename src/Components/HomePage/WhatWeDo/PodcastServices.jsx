import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WhatWeDoContext } from './CertificationAndWorkShopContext';

const PodcastServices = ({ Title, Data }) => {
  const { setWhatWeDoServicesTitleAndData } = useContext(WhatWeDoContext);

  const handleLearnMoreClick = () => {
    setWhatWeDoServicesTitleAndData({ Title, Data });
  };

  return (
    <div className='TalentBaseComp'>
      <h4>{Title}</h4>
      <p>{Data.length <= 150 ? Data : `${Data.slice(0, 150)}...`}</p>
      <Link to="/learningstream" onClick={handleLearnMoreClick}>
        Learn More
      </Link>
    </div>
  );
};

export default PodcastServices;
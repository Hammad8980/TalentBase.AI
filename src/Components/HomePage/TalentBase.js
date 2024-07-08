import React from 'react';
import {Link} from 'react-router-dom';

const TalentBase = ({Data}) => {
  return (
    <div>  
        <h4>Talent Base</h4>
        <p>{Data}</p>
        <Link to="#">Learn More</Link>
    </div>
  )
}

export default TalentBase
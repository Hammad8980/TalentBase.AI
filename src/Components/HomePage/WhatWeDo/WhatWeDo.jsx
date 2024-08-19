import React from 'react';
import Services from './Services';
import './WhatWeDo.css'


const WhatWeDo = () => {
  return (
    <div className="WhatWeDo PrimaryColor2 PrimaryFont CompMargin">
      <div className="WhatWeDoDiv1 SidePadding">
        <p className='SidePadding WhatWeDoDiv1P1'>What we do</p>
        <p className='SidePadding WhatWeDoDiv1P2'>Talentbase.AI provides a learning platform nurturing students in refining their interpersonal abilities, courses and certifications for showcasing their achievements, business services for startup ventures and podcast services for igniting passion and promoting their profile.</p>
      </div>
      <Services />
    </div>
  )
}

export default WhatWeDo
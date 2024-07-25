import React from 'react'
import CertificationAndWorkshop from './CertificaionAndWorkshop'
import './WhatWeDo.css'


const WhatWeDo = () => {
  return (
    <div className="WhatWeDo SidePadding PrimaryColor2 PrimaryFont CompMargin">
      <div className="WhatWeDoDiv1">
        <p className='SidePadding WhatWeDoDiv1P1'>What we do</p>
        <p className='WhatWeDoDiv1P2'>loreum pas fhihrib jorgtjbgrb ibhfuihv hiugehih bugiubg fnvefbubh bgjbiogjroib gboigoibj fveujir huihtrhg iuthiutruitr itrtriutrj jegiejrigre ifoioitjeogjetj etejiotrjoitjr ejwoiweoife ewfoirf hf</p>
      </div>
      <div className="WhatWeDoDiv2">
        <CertificationAndWorkshop Title="Certification and Workshops" Data="Trees are our best friends because they clean the air we breathe. Likewise, they also clean the water and soil and ultimately make the earth a better place. It is also a fact that people who live near trees are healthier, fit, and happier than people who do not." />
        <CertificationAndWorkshop Data={"Moreover, it is our responsibility to look after our friends who serve us in many ways. Most importantly by saving plants, we are not doing any favor to plants but to ourselves only. Because trees and plants life does not depend on us but our lives depend on them. "} />
        <CertificationAndWorkshop Data={"Trees are important to us in a lot of ways and we cannot ignore their importance. They are important because they give us fresh air to breathe, food to eat and shelter/shade from sunlight and rainfall. Besides this, there are many medicines in the market that are made up of trees extracts. Apart from this, there are plants and trees that have medicinal value."} />
      </div>
    </div>
  )
}

export default WhatWeDo
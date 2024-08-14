import React from 'react';
import LearningPlatform from './LearningPlatform';
import CertificationAndWorkshop from './CertificaionAndWorkshop'
import BusinessDevelopmentServices from './BusinessDevelopmentServices';
import PodcastServices from './PodcastServices';
import './WhatWeDo.css'


const WhatWeDo = () => {
  return (
    <div className="WhatWeDo SidePadding PrimaryColor2 PrimaryFont CompMargin">
      <div className="WhatWeDoDiv1">
        <p className='SidePadding WhatWeDoDiv1P1'>What we do</p>
        <p className='WhatWeDoDiv1P2'>Talentbase.AI provides a learning platform nurturing students in refining their interpersonal abilities, courses and certifications for showcasing their achievements, business services for startup ventures and podcast services for igniting passion and promoting their profile.</p>
      </div>
      <div className="WhatWeDoDiv2">
        <LearningPlatform Title="Learning Platform" Data="A degree program's learning stream is organized into various modules, each represented in three different levels, categorized as basic, intermediate, and advanced. Upon completion of each module, students receive a badge of achievement. At the successful completion of the learning path, students are awarded a specialization in their chosen field, marking their proficiency and readiness for advanced professional opportunities." />
        <CertificationAndWorkshop Title="Certification and Workshops" Data="This category includes courses and workshops across different technical and business domains. Certificates are awarded aiming targeted skill and concentrated knowledge, designed for career enhancement in marketing domains." />
        <BusinessDevelopmentServices Title="Business Development Services" Data="Marketing campaigns are organized to promote the products and services, through content writing and creative designs to engage and persuade the target audience. Different application softwares are created through Web development. Digital marketing strategies for advertisements drive website traffic and connect to the audience. The search engine optimization ranks the website to a higher rank." />
        <PodcastServices Title="Podcast Services" Data="Podcast services offer comprehensive assistance, requiring cameras and microphones for optimal recording. These services include media coverage through videos, reels, and pictures, as well as professional podcast recording. Our professional hosts are available for both formal and informal settings. Editing services are available to ensure high-quality content." />
      </div>
    </div>
  )
}

export default WhatWeDo
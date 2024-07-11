import React from 'react'
import TalentBase from './TalentBase'

const WhatWeDo = () => {
  return (
    <>
        <div>
            <h4>What we do</h4>
            <p>Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want.</p>
        </div>
        <div>
            <TalentBase Data={"Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document."} />
            <TalentBase Data={"To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar."} />
            <TalentBase Data={"Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme."} />
        </div>
    </>
  )
}

export default WhatWeDo
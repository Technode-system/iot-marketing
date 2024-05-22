import React from 'react';
import './HoverCard.css'

function HoverCard({imgSrc, cardData}) {
  return (
    <div className="card">
        <div className="content" onclick="OnClick()" >
              <h2>Dubai</h2>
              <h3>United Arab Emirates</h3>  
        </div>
    </div>
  )
}

export default HoverCard
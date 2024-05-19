import React from 'react'
import "./App.css"
import { useState } from 'react'

import ControlPanel from './components/ControlPanel'

const templateData = {
  caption: {
    text: "Treat yourself to devine a bluberry cake",
    position: { x: 50, y: 50 },
    max_characters_per_line: 31,
    font_size: 44,
    alignment: "left",
    text_color: "#FFFFFF"
  },
  cta: {
    text: "Shop Now",
    position: { x: 190, y: 320 },
    text_color: "#FFFFFF",
    background_color: "#000000"
  },
  image_mask: { x: 56, y: 442, width: 970, height: 600 },
  urls: {
    mask: "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_mask.png",
    stroke: "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask_stroke.png",
    design_pattern: "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png"
  }
};

const App = () => {
  const [caption, setCaption] = useState(templateData.caption.text);
  const [cta, setCta] = useState(templateData.cta.text);
  const [bgColor, setBgColor] = useState('#0369A1');
const handleclick = ()=>{
  alert('order confirmed dear');
}

  return (
    <>
    <div className="container">
      <div className="image-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEyUSmwG5QjunlDiPVV71DjYxzehKRX0Ljg&s" alt="Cake Order Form" />
      </div>
      <div className="control-panel-container">
        <ControlPanel caption={caption} setCaption={setCaption} cta={cta} setCta={setCta} bgColor={bgColor} setBgColor={setBgColor} />
      </div>
      
    </div>
    <button onClick={handleclick}>confirm</button>
    </>
  )
}

export default App

import React from 'react'

export default function App() {

  const [gradient, setGradient] = React.useState({
    color1: "FFFF00",
    color2: "000000",
    angle: {}
  })

  // const styles = {
  //   background: linear-gradient({gradient.angle}deg, #{gradient.color1} , #{gradient.color2}); 
  //   -moz-background: linear-gradient({gradient.angle}deg, #{gradient.color1} , #{gradient.color2}); 
  //   -webkit: linear-gradient({gradient.angle}deg, #{gradient.color1} , #{gradient.color2})
  // }

  return (
    <div className="">
      <h1>CSS Gradient Code Generator</h1>
      <div className="preview">
        <div className="gradient--rectangle" ></div>
        <textarea readOnly>background: linear-gradient({gradient.angle}deg, #{gradient.color1} , #{gradient.color2}); -moz-background: linear-gradient({gradient.angle}deg, #{gradient.color1} , #{gradient.color2}); -webkit: linear-gradient({gradient.angle}deg, #{gradient.color1} , #{gradient.color2})</textarea>
      </div>
      <div className="options">
        <h3>Options</h3>
        <label for="color1">Color 1</label>
        <p>{gradient.color1}</p>
        <input 
          type="color"
          name="color1"
          value={gradient.color1}
        />
        <label for="color2">Color 2</label>
        <p>{gradient.color2}</p>
        <input 
          type="color"
          name="color2"
          value={gradient.color2}
        />
        <p>Angle</p>
        <input 
          type="number"
          name="angle"
          value={gradient.angle}
        />
      </div>
    </div>
  )
}

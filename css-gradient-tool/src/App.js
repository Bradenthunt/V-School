import React from 'react'

export default function App() {

  const [gradient, setGradient] = React.useState({
    color1: "#FFFF00",
    color2: "#000000",
    angle: 50
  })

  const codeRef = React.useRef(null)

  function handleChange(e) {
    const {name, value} = e.target

    setGradient(prevGradient => {
      return {
        ...prevGradient,
        [name] : value
      }
    })
  }

  function highlightText() {
    codeRef.current.select()
  }

  const styles = {background: `linear-gradient(${gradient.angle}deg, ${gradient.color1} , ${gradient.color2})`}

  const textareaText = `background: linear-gradient(${gradient.angle}deg, ${gradient.color1} , ${gradient.color2}); -moz-background: linear-gradient(${gradient.angle}deg, ${gradient.color1} , ${gradient.color2}); -webkit: linear-gradient(${gradient.angle}deg, ${gradient.color1} , ${gradient.color2})`

  return (
    <div className='generator'>
      <h1 className='title'>CSS Gradient Code Generator</h1>
      <div className='generator--sides'>
        <div className="preview">
          <div className="gradient--rectangle" style={styles}></div>
          <textarea ref={codeRef} onClick={highlightText} className="css--code" readOnly value={textareaText}></textarea>
        </div>
        <div className="options">
          <h3 className='options--title'>Options</h3>
          <div className='options--colors'>
            <label htmlFor="color1">Color 1:</label>
            <p>{gradient.color1}</p>
            <input 
              type="color"
              name="color1"
              value={gradient.color1}
              onChange={handleChange}
            />
          </div>
          <div className='options--colors'>
            <label htmlFor="color2">Color 2:</label>
            <p>{gradient.color2}</p>
            <input 
              type="color"
              name="color2"
              value={gradient.color2}
              onChange={handleChange}
            />
          </div>
          <div className='options--colors'>
            <p>Angle</p>
            <input 
              className='angle'
              type="number"
              name="angle"
              value={gradient.angle}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

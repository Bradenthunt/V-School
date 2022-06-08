import React from 'react'
import Square from './Square'

export default function Board() {
  const [colors, setColors] = React.useState(['white', 'white', 'white', 'white'])

  const squares = colors.map(color => <Square color={color}/>)

  function djSmall() {
    // copy of prev state
    let prevColors = [...colors]

    // new array you can modify/mutate
    let newColors = [...prevColors]

    // mutate new array
    if(prevColors[0] == 'white') {
      newColors[0] = 'black'
      newColors[1] = 'black'
      newColors[2] = 'black'
      newColors[3] = 'black'
    } else if (prevColors[0] !== 'white') {
      newColors[0] = 'white'
      newColors[1] = 'white'
      newColors[2] = 'white'
      newColors[3] = 'white'
    }

    // set state to new array
    setColors(newColors)
  }

  function djParty() {
    let prevColors = [...colors]
    let newColors = [...prevColors]

    newColors[0] = 'purple'
    newColors[1] = 'purple'

    setColors(newColors)
  }

  function bottomLeft() {
    let prevColors = [...colors]
    let newColors = [...prevColors]

    newColors[2] = 'blue'

    setColors(newColors)
  }

  function bottomRight() {
    let prevColors = [...colors]
    let newColors = [...prevColors]

    newColors[3] = 'blue'

    setColors(newColors)
  }

  function djOne() {
    let prevColors = [...colors]
    let newColors = [...prevColors]

    newColors[0] = 'yellow'

    setColors(newColors)
  }

  function djTwo() {
    let prevColors = [...colors]
    let newColors = [...prevColors]

    newColors[1] = 'green'

    setColors(newColors)
  }

  function djThree() {
    let prevColors = [...colors]
    let newColors = [...prevColors]

    newColors[2] = 'red'

    setColors(newColors)
  }

  function djFour() {
    let prevColors = [...colors]
    let newColors = [...prevColors]

    newColors[3] = 'orange'

    setColors(newColors)
  }

  return (
    <div className="board">
      <div className="dj--squares">
        {squares}
      </div>
      <div className="dj--buttons">
        <button className="dj--small" onClick={djSmall}>DJ Small</button>
        <button className="dj--party" onClick={djParty}>DJ Party</button>
        <button className="dj--bottom--left" onClick={bottomLeft}>Bottom Left</button>
        <button className="dj--bottom--right" onClick={bottomRight}>Bottom Right</button>
        <button className="dj--one" onClick={djOne}>DJ One</button>
        <button className="dj--two" onClick={djTwo}>DJ Two</button>
        <button className="dj--three" onClick={djThree}>DJ Three</button>
        <button className="dj--four" onClick={djFour}>DJ Four</button>
      </div>
    </div>
  )
}
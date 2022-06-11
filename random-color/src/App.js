import React from 'react'
import axios from 'axios'

export default function App() {
  const [backgroundClr, setBackgroundClr] = React.useState('')
  const [count, setCount] = React.useState(0)

  const baseUrl = `https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`

  React.useEffect(() => {
    axios.get(baseUrl)
      // .then(res => console.log(res.data))
      // .then(res => console.log(res.data.colors[0].hex))
      .then(res => setBackgroundClr(res.data.colors[0].hex))
      .catch(err => console.log(err))
  },[count])

  function handleClick() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      <div style={{backgroundColor: `#${backgroundClr}`}} className='box'></div>
      <button onClick={handleClick}>Get New Color</button>
    </div>
  )
}
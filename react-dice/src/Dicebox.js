import React from "react"

export default function Dicebox() {
  
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5])

  function rollDice() {
    let prevNumbers = [...numbers]
    let newNumbers = [...prevNumbers]

    newNumbers[0] = Math.floor(Math.random() * 7)
    newNumbers[1] = Math.floor(Math.random() * 7)
    newNumbers[2] = Math.floor(Math.random() * 7)
    newNumbers[3] = Math.floor(Math.random() * 7)
    newNumbers[4] = Math.floor(Math.random() * 7)

    setNumbers(newNumbers)
  }

  const rolls = numbers.map(number => <h2>{number}</h2>)

  return (
    <div className="dicebox">
      <h1 className="title">React Dice</h1>
      <div className="rolls--container">
        {rolls}
      </div>
      <button className="roll--dice" onClick={rollDice}>Roll the Dice</button>
    </div>
  )
}
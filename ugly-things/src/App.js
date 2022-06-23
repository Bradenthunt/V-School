import React, { useContext } from 'react'
import { Context } from './Context'
import Form from './Form'
import Header from './Header'
import Card from './Card'

export default function App() {

  const {uglyThingsArr} = useContext(Context)

  console.log(uglyThingsArr)

  const listOfUggos = uglyThingsArr.map(thing => <Card key={thing._id}/>)

  return (
    <div className="App">
      <Header />
      <Form />
      {listOfUggos}
    </div>
  )
}

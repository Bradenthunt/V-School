import React, { useContext } from 'react'
import { Context } from './Context'
import Form from './Form'
import Header from './Header'
import Card from './Card'

export default function App() {

  const {uglyThingsArr} = useContext(Context)

  const listOfUggos = uglyThingsArr.map((thing, index) => <Card key={thing._id} index={index} {...thing}/>)

  return (
    <div>
      <Header />
      <Form />
      {listOfUggos}
    </div>
  )
}

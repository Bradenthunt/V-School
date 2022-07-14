import React, { useContext } from 'react'
import { Context } from './Context'

export default function ExpenseItem(props) {

    const {deleteExpense} = useContext(Context)

  return (
    <div className="item">
      <h4>{props.name}</h4>
      <h4>{props.category}</h4>
      <h4>${props.amount}</h4>
      <button onClick={() => deleteExpense(props._id)}>Delete</button>
    </div>
  )
}
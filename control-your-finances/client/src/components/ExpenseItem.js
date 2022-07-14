import React, { useContext, useState } from 'react'
import { Context } from './Context'

export default function ExpenseItem(props) {

  const {
    name,
    category,
    amount,
    _id
  } = props

  const {
    deleteExpense, 
    editExpense,
    setName,
    setCategory,
    setAmount
  } = useContext(Context)

  // const [toggleEdit, setToggleEdit] = useState(false)

  // const saveAndExit = (edits, expenseId) => {
  //   editExpense(edits, expenseId)
  //   setToggleEdit(false)
  // }

  return (
    <>
      {/* {!toggleEdit ? */}
      <div className="item">
        <h4>{name}</h4>
        <h4>{category}</h4>
        <h4>${amount}</h4>
        {/* <button onClick={() => setToggleEdit(prevToggle => !prevToggle)}>Edit</button> */}
        <button onClick={() => deleteExpense(_id)}>Delete</button>
      </div>
      {/* :
      <>
        <form onSubmit={saveAndExit}>
          <input 
              type='text'
              name='name'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
          />
          <select name='category' value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option>- Select Category -</option>
              <option value='food'>Food</option>
              <option value='utilities'>Utilities</option>
              <option value='housing'>Housing</option>
              <option value='transportation'>Transportation</option>
              <option value='insurance'>Insurance</option>
              <option value='debt'>Debt</option>
              <option value='fun'>Fun</option>
              <option value='savings'>Savings</option>
              <option value='donations'>Donations</option>
              <option value='emergency fund'>Emergency Fund</option>
              <option value='miscellaneous'>Miscellaneous</option>
          </select>
          <input 
              type='number'
              name='amount'
              placeholder='Amount'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
          />
          <button>Save Expense</button>
        </form>
      </>
    } */}
    </>
  )
}
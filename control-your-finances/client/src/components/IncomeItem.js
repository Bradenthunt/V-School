import React, { useContext, useState } from 'react'
import { Context } from './Context'

export default function IncomeItem(props) {

  const {
    name,
    category,
    amount,
    _id
  } = props

  const {
    deleteIncome, 
    editIncome,
    setName,
    setCategory,
    setAmount
  } = useContext(Context)

  // const [toggleEdit, setToggleEdit] = useState(false)

  // const saveAndExit = (edits, incomeId) => {
  //   editIncome(edits, incomeId)
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
        <button onClick={() => deleteIncome(_id)}>Delete</button>
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
              <option value='job'>Job</option>
              <option value='side hustle'>Side Hustle</option>
              <option value='other'>Other</option>
          </select>
          <input 
              type='number'
              name='amount'
              placeholder='Amount'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
          />
          <button>Save Income</button>
        </form>
      </>
    } */}
    </>
  )
}
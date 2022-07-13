import React, { useContext, useState } from 'react'
import { Context } from '../Context'

export default function Expenses() {

    const {
        initExpense,
        expense, 
        setExpense,
        submitExpense
    } = useContext(Context)

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)

    // function handleChange(e, expense) {
    //     const {name, value} = e.target

    //     setExpense(prevExpense => ({...prevExpense, expense, [name]: value}))
    // }

    function handleSubmit(e) {
        e.preventDefault()
        submitExpense(expense)
        setExpense(initExpense)
    }

    function handleSelect(e) {
        setSelectCategory(e.target.value)
    }
  
  return (
    <div className="main--content">
      <h2>Expenses</h2>
      <h3>*Expenses total here*</h3>
      <form onSubmit={handleSubmit}>
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
        <button>Submit Expense</button>
      </form>
      <p>*Expenses list here*</p>
    </div>
  )
}
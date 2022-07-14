import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context'
import ExpenseItem from '../ExpenseItem'

export default function Expenses() {

    const {
        name,
        setName,
        category, 
        setCategory,
        amount,
        setAmount,
        submitExpense,
        expensesArray,
        getExpenses,
        expensesTotal,
        setExpensesArray
    } = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault()

        submitExpense({
            name: name, 
            category: category, 
            amount: amount
        })

        clearExpenseForm()
    }

    const clearExpenseForm = () => {
        setName('')
        setCategory('')
        setAmount('')
    }

    const handleFilter = (e) => {
        if (e.target.value === 'reset') {
            getExpenses()
        } else {
            axios.get(`/expenses/search/category?category=${e.target.value}`)
                .then(res => setExpensesArray(res.data))
                .catch(err => console.log(err))
        }
    }

    // const handleSort = (e) => {
    //     if (e.target.value === 'reset') {
    //         getExpenses()
    //     } else {
    //         axios.get(`/expenses/search/category?category=${e.target.value}`)
    //             .then(res => setExpensesArray(res.data))
    //             .catch(err => console.log(err))
    //     }
    // }

    useEffect(() => {
        getExpenses()
    }, [])
  
    const expensesList = expensesArray.map((expense, index) => <ExpenseItem key={index} {...expense}/>)

  return (
    <div className="main--content">
        <div className='page--header'>
            <h2>Expenses</h2>
            <h3>${expensesTotal}</h3> 
        </div>
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
      <div>
        <select onChange={handleFilter} className='filter'>
            <option value='reset'>- Filter by Category -</option>
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
        {/* <select onChange={handleSort} className='sort'>
            <option value='reset'>- Sort -</option>
            <option value='highest'></option>
            <option value='lowest'></option>
        </select> */}
      </div>
      <div className='list'>
        {expensesList}
      </div>
    </div>
  )
}
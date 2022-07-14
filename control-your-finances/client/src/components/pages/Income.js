import React, { useContext, useEffect } from 'react'
import { Context } from '../Context'
import IncomeItem from '../IncomeItem'


export default function Income() {

    const {
        name,
        setName,
        category, 
        setCategory,
        amount,
        setAmount,
        submitIncome,
        incomeArray,
        getIncome,
        incomeTotal
    } = useContext(Context)

    function handleSubmit(e) {
        e.preventDefault()

        submitIncome({
            name: name, 
            category: category, 
            amount: amount
        })

        clearIncomeForm()
    }

    function clearIncomeForm() {
        setName('')
        setCategory('')
        setAmount('')
    }

    useEffect(() => {
        getIncome()
    }, [])

    const incomeList = incomeArray.map((income, index) => <IncomeItem key={index} {...income}/>)
  
  return (
    <div className="main--content">
      <h2>Income</h2>
      <h3>${incomeTotal}</h3>
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
        <button>Submit Income</button>
      </form>
      <div>
        {incomeList}
      </div>
    </div>
  )
}
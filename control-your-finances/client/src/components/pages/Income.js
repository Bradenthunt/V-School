import React, { useContext, useEffect } from 'react'
import { Context } from '../Context'
import IncomeItem from '../IncomeItem'
import axios from 'axios'


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
        incomeTotal,
        setIncomeArray
    } = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault()

        submitIncome({
            name: name, 
            category: category, 
            amount: amount
        })

        clearIncomeForm()
    }

    const clearIncomeForm = () => {
        setName('')
        setCategory('')
        setAmount('')
    }

    const handleFilter = (e) => {
        if (e.target.value === 'reset') {
            getIncome()
        } else {
            axios.get(`/income/search/category?category=${e.target.value}`)
                .then(res => setIncomeArray(res.data))
                .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        getIncome()
    }, [])

    const incomeList = incomeArray.map((income, index) => <IncomeItem key={index} {...income}/>)
  
  return (
    <div className="main--content">
        <div className='page--header'>
            <h2>Income</h2>
            <h3>${incomeTotal}</h3>
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
        <select onChange={handleFilter} className='filter'>
            <option value='reset'>- Filter by Category -</option>
            <option value='job'>Job</option>
            <option value='side hustle'>Side Hustle</option>
            <option value='other'>Other</option>
        </select>
      </div>
      <div className='list'>
        {incomeList}
      </div>
    </div>
  )
}
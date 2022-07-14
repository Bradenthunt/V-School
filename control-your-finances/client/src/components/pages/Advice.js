import React, { useContext, useEffect } from 'react'
import { Context } from '../Context'

export default function Advice() {

    const {
        expensesTotal,
        incomeTotal,
        getExpenses,
        getIncome
    } = useContext(Context)

    useEffect(() => {
        getExpenses()
        getIncome()
    }, [])
  
  return (
    <div className="main--content">
      <h2>Advice</h2>
      <p>You're using {((Number(expensesTotal) / Number(incomeTotal)).toFixed(2)) * 100}% of your income!</p>
    </div>
  )
}
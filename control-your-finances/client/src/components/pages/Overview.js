import React, { useContext, useEffect } from 'react'
import { Context } from '../Context'

export default function Overview() {

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
      <h2>Expenses</h2>
      <h4>${expensesTotal}</h4>
      <p>*Pie chart or graph here*</p>
      <h2>Income</h2>
      <h4>${incomeTotal}</h4>
    </div>
  )
}
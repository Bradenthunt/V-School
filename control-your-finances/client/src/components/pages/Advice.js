import React, { useContext, useEffect } from 'react'
import { Context } from '../Context'
import axios from 'axios'

export default function Advice() {

    const {
        expensesTotal,
        incomeTotal,
        getExpenses,
        getIncome,
        expensesArray,
        incomeArray,
        // hasDebt
        } = useContext(Context)

    useEffect(() => {
        getExpenses()
        getIncome()
    }, [])

    const linkStyling = {
        textDecoration: 'none', 
        color: 'lime',
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
  
  return (
    <div className="main--content">
        <h2 className='page--header'>Advice</h2>
        <div className='tips'>
            <h3>Enjoy these tips specifically for you!</h3>
            <ul>
                {incomeArray.length === 0 && <li>Start by tracking your income!</li>}
                {expensesArray.length === 0 && <li>Add what you have for expenses!</li>}
                <li>Start with budgeting the most important things first (food, utilities, housing, & transportation).</li>
                {expensesTotal !== incomeTotal && <li>You're only budgeting {((Number(expensesTotal) / Number(incomeTotal)).toFixed(2)) * 100}% of your income! Make sure to <a style={linkStyling} href='https://www.ramseysolutions.com/budgeting/how-to-make-a-zero-based-budget'>budget to zero</a> before the month begins!</li>}
                <li>Pay off any debt using the <a style={linkStyling} href='https://www.ramseysolutions.com/debt/get-out-of-debt-with-the-debt-snowball-plan'>debt snowball</a>!</li>
                <li>Check for any adjustments that needs to be made each month.</li>
            </ul>
        </div>
        
    </div>
  )
}
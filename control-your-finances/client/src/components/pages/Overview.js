import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

    const linkStyling = {
        textDecoration: 'none', 
        color: 'lime',
        fontWeight: 'bold'
      }
  
  return (
    <div className="main--content">
        <h1 className='overview--title'>My Overview</h1>
        <div className='overview'>
            <div>
                <Link to="/expenses" style={linkStyling}>
                    <h1>Expenses</h1>
                    <h3>${expensesTotal}</h3>
                </Link>
            </div>
            <div>
                <Link to='/income' style={linkStyling}>
                    <h1>Income</h1>
                    <h3>${incomeTotal}</h3>
                </Link>
            </div>
        </div>
    </div>
  )
}
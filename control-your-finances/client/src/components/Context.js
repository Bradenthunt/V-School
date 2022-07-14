import axios from 'axios'
import React, { useState } from 'react'

const Context = React.createContext()

function ContextProvider(props) {

    const [expensesArray, setExpensesArray] = useState([])
    const [incomeArray, setIncomeArray] = useState([])

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')

    const [expensesTotal, setExpensesTotal] = useState('')
    const [incomeTotal, setIncomeTotal] = useState('')


    function getExpenses() {
        axios.get("/expenses")
          .then(res => {
            setExpensesArray(res.data)
            setExpensesTotal(Number(res.data.amount))
        })
          .catch(err => console.log(err))
    }

    function getIncome() {
        axios.get("/income")
          .then(res => {
            setIncomeArray(res.data)
            setIncomeTotal(Number(res.data.amount))

        })
          .catch(err => console.log(err))
    }

    function submitExpense(newExpense) {
        axios.post('/expenses', newExpense)
            .then(res => {
                setExpensesArray(prevExpenses => [...prevExpenses, res.data])
                setExpensesTotal(prevExpenses => (Number(prevExpenses) + Number(res.data.amount)))
            })
            .catch(err => console.log(err))
    }

    function submitIncome(newIncome) {
        axios.post('/income', newIncome)
            .then(res => {
                setIncomeArray(prevIncomes => [...prevIncomes, res.data])
                setIncomeTotal(prevIncome => (Number(prevIncome) + Number(res.data.amount)))

            })
            .catch(err => console.log(err))
    }

    function deleteExpense(expenseId) {
        axios.delete(`/expenses/${expenseId}`)
            .then(res => {setExpensesArray(prevExpenses => prevExpenses.filter(expense => expense._id !== expenseId))})
            .catch(err => console.log(err))
    }

    function deleteIncome(incomeId) {
        axios.delete(`/income/${incomeId}`)
            .then(res => {setIncomeArray(prevIncome => prevIncome.filter(income => income._id !== incomeId))})
            .catch(err => console.log(err))
    }


    return (
        <Context.Provider value={{
            expensesArray,
            incomeArray,
            name,
            setName,
            category, 
            setCategory,
            amount,
            setAmount,
            submitExpense,
            submitIncome,
            getExpenses,
            getIncome,
            expensesTotal,
            incomeTotal,
            deleteExpense,
            deleteIncome
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}
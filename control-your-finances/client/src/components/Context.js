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

    // const [hasDebt, setHasDebt] = useState(false)

    const getExpenses = () => {
        axios.get("/expenses")
          .then(res => {
            setExpensesArray(res.data)
            const total = res.data.reduce((acc, curr) => {
                acc = acc + curr.amount
                return acc
            }, 0)
            // const debt = res.data.filter(data => ({data.category === 'debt' ? true : false}))
            setExpensesTotal(total)
            // setHasDebt(debt)
            })
          .catch(err => console.log(err))
    }

    const getIncome = ()  => {
        axios.get("/income")
          .then(res => {
            setIncomeArray(res.data)
            const total = res.data.reduce((acc, curr) => {
                acc = acc + curr.amount
                return acc
            }, 0)
            setIncomeTotal(total)

        })
          .catch(err => console.log(err))
    }

    const submitExpense = (newExpense) => {
        axios.post('/expenses', newExpense)
            .then(res => {
                setExpensesArray(prevExpenses => [...prevExpenses, res.data])
                setExpensesTotal(prevExpenses => (Number(prevExpenses) + Number(res.data.amount)))
            })
            .catch(err => console.log(err))
    }

    const submitIncome = (newIncome) => {
        axios.post('/income', newIncome)
            .then(res => {
                setIncomeArray(prevIncomes => [...prevIncomes, res.data])
                setIncomeTotal(prevIncome => (Number(prevIncome) + Number(res.data.amount)))

            })
            .catch(err => console.log(err))
    }

    const deleteExpense = (expenseId) => {
        axios.delete(`/expenses/${expenseId}`)
            .then(res => {setExpensesArray(prevExpenses => prevExpenses.filter(expense => expense._id !== expenseId))}
            )
            .catch(err => console.log(err))
    }


    const deleteIncome = (incomeId) => {
        axios.delete(`/income/${incomeId}`)
            .then(res => {setIncomeArray(prevIncome => prevIncome.filter(income => income._id !== incomeId))})
            .catch(err => console.log(err))
    }

    const editExpense = (edits, expenseId) => {
        axios.put(`/expenses/${expenseId}`, edits)
            .then(res => {
                setExpensesArray(prevExpenses => prevExpenses.map(expense => expense._id !== expenseId ? expense : res.data))
            })
            .catch(err => console.log(err))
    }

    const editIncome = (edits, incomeId) => {
        axios.put(`/income/${incomeId}`, edits)
            .then(res => {
                setIncomeArray(prevIncome => prevIncome.map(income => income._id !== incomeId ? income : res.data))
            })
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
            deleteIncome,
            setExpensesArray,
            setIncomeArray,
            // hasDebt,
            editExpense,
            editIncome
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}
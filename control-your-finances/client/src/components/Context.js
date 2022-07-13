import axios from 'axios'
import React, { useState } from 'react'

const Context = React.createContext()

function ContextProvider(props) {

    const [expenseArray, setExpenseArray] = useState([])
    const [incomeArray, setIncomeArray] = useState([])

    const initExpense = {
        name: '',
        category: '',
        amount: 0
    }

    const [expense, setExpense] = useState(initExpense)

    function submitExpense(newExpense) {
        axios.post('/expenses', newExpense)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <Context.Provider value={{
            initExpense,
            expense,
            setExpense,
            submitExpense
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}
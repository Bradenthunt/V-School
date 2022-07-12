const express = require('express')
const expensesRouter = express.Router()
const Expense = require('../models/expense.js')


expensesRouter.get('/', (req, res, next) => {
    Expense.find((err, expenses) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(expenses)
    })
})


expensesRouter.post('/', (req, res, next) => {
    const newExpense = new Expense(req.body)
    newExpense.save((err, savedExpense) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedExpense)
    })
})


expensesRouter.get('/search/category', (req, res, next) => {
    Expense.find({category: req.query.category}, (err, expenses) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(expenses)
    })
})


expensesRouter.delete('/:expenseId', (req, res, next) => {
    Expense.findOneAndDelete({_id: req.params.expenseId}, (err, deletedExpense) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted expense ${deletedExpense.title} for $${deletedExpense.amount} from database`)
    })
})


expensesRouter.put('/:expenseId', (req, res, next) => {
    Expense.findOneAndUpdate(
        {_id: req.params.expenseId},
        req.body,
        {new: true},
        (err, updatedExpense) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedExpense)
        }
    )
})


module.exports = expensesRouter
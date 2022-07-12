const express = require('express')
const incomeRouter = express.Router()
const Income = require('../models/income.js')


incomeRouter.get('/', (req, res, next) => {
    Income.find((err, income) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(income)
    })
})


incomeRouter.post('/', (req, res, next) => {
    const newIncome = new Income(req.body)
    newIncome.save((err, savedIncome) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIncome)
    })
})


incomeRouter.get('/search/category', (req, res, next) => {
    Income.find({category: req.query.category}, (err, income) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(income)
    })
})


incomeRouter.delete('/:incomeId', (req, res, next) => {
    Income.findOneAndDelete({_id: req.params.incomeId}, (err, deletedIncome) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted income ${deletedIncome.title} for $${deletedIncome.amount} from database`)
    })
})


incomeRouter.put('/:incomeId', (req, res, next) => {
    Income.findOneAndUpdate(
        {_id: req.params.incomeId},
        req.body,
        {new: true},
        (err, updatedIncome) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIncome)
        }
    )
})


module.exports = incomeRouter
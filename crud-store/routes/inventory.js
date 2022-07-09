const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')

// Get All
inventoryRouter.get('/', (req, res, next) => {
    Inventory.find((err, inventory) => {
        if(err) {
            res.status (500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})

// Get One
inventoryRouter.get('/:inventoryId', (req, res, next) => {
    Inventory.find({_id: req.params.inventoryId}, (err, foundInventory) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundInventory)
    })
})

// Post One
inventoryRouter.post('/', (req, res, next) => {
    const newIventory = new Inventory(req.body)
    newIventory.save((err, savedInventory) => {
        if(err) {
            res.status (500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})

// Put
inventoryRouter.put('/:inventoryId', (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.inventoryId},
        req.body,
        {new: true},
        (err, updatedIventory) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIventory)
        }
    )
})

// Delete
inventoryRouter.delete('/:iventoryId', (req, res, next) => {
    Inventory.findOneAndDelete({_id: req.params.iventoryId}, (err, deletedInventory) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully removed item ${deletedInventory.itemName} from DB`)
    })
})

module.exports = inventoryRouter
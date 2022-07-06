const express = require('express')
const app = express()
const {v4: uuidv4} = require('uuid')

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4()

    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuidv4()

    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4()

    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4()

    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuidv4()

    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4()
    }
]

app.get("/", (req, res) => {
    res.send(inventoryItems)
})

app.get("/food", (req, res) => {
    const type = req.query.type
    const filteredItems = inventoryItems.filter(item => item.type === type)
    res.send(filteredItems)
})



app.listen(8000, () => {
    console.log('Running on 8000')
})

module.exports = app
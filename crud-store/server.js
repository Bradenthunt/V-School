const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan('dev'))


mongoose.connect("mongodb://localhost:27017/crudstoredb", () => console.log('Connected to DB'))


app.use('/inventory', require('./routes/inventory.js'))


app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})


app.listen(9000, () => {
    console.log('Server running on Port 9000')
})
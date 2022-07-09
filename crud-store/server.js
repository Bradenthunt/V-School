const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB
mongoose.connect("mongodb://localhost:27017/crudstoredb", () => console.log('Connected to DB'))

// Routes
app.use('/', require(''))


// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(9000, () => {
    console.log('Server running on Port 9000')
})
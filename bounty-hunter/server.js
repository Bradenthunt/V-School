const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB
mongoose.connect("mongodb://localhost:27017/bountiesdb", () => console.log('connected to database'))

// Routes
app.use('/bounties', require("./routes/bountyRouter.js"))


// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(9000, () => {
    console.log('Server running on Port 9000')
})
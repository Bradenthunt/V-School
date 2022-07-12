const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan('dev'))


mongoose.connect("mongodb://localhost:27017/financesdb", () => console.log('Connected to DB'))


app.use('/expenses', require("./routes/expensesRouter.js"))
app.use('/income', require("./routes/incomeRouter.js"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(9000, () => {
    console.log('Running on 9000')
})
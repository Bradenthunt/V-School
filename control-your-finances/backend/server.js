if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: __dirname+'/.env'});
}


const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan('dev'))


const port = process.env.PORT || 9000


mongoose.connect(process.env.mongoURI, () => console.log('Connected to DB'))
// "mongodb://localhost:27017/financesdb"


app.use('/expenses', require(path.join(__dirname, "./routes/expensesRouter.js")))
app.use('/income', require(path.join(__dirname, "./routes/incomeRouter.js")))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(port, () => {
    console.log('Running on 9000')
})


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client', 'build')));
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
    })
}
const express = require('express')
const app = express()

app.use(express.json())

app.use('/todo', require('./routes/todoRouter.js'))

app.listen(8000, () => {
    console.log('Running on 8000')
})
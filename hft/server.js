const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt } = require('express-jwt')


process.env.SECRET


app.use(express.json())
app.use(morgan('dev'))


mongoose.connect(
    'mongodb://localhost:27017/hft',
  () => console.log('Connected to DB')
)


app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/workout', require('./routes/workoutRouter.js'))


app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError") {
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})


app.listen(9000, () => {
  console.log(`Server running on 9000`)
})
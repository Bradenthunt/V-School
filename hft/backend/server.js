if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: __dirname+'/.env'});
}

const path = require('path')
const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt } = require('express-jwt')
const process = require('process')


process.env.SECRET


app.use(express.json())
app.use(morgan('dev'))


const port = process.env.PORT || 9000


mongoose.connect(
  'mongodb+srv://huntfitnesstracker:trackerfitnesshunt@hft-cluster0.aau29tm.mongodb.net/?retryWrites=true&w=majority',
  () => console.log('Connected to DB')
)


app.use('/auth', require(path.join(__dirname, 'routes', 'authRouter')))
app.use('/api', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/workouts', require(path.join(__dirname, 'routes', 'workoutRouter')))
app.use('/api/exercises', require(path.join(__dirname, 'routes', 'exerciseRouter')))


app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError") {
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})


app.listen(port, () => {
  console.log(`Server running on 9000`)
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend', 'build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
  })
}
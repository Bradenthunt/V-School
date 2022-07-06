const express = require('express')
const addRouter = express.Router()

const info = {name: 'Billy', favColor: 'blue'}

addRouter.use((req, res, next) => {
    req.body = {...info, gender: 'male'}
    next()
})

module.exports = addRouter
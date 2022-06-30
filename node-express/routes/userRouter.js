const express = require('express')
const userRouter = express.Router()
const {v4: uuid} = require('uuid')

const users = [
    {name: 'bill', age: 43, _id: uuid()},
    {name: 'bob', age: 34, _id: uuid()},
    {name: 'ben', age: 21, _id: uuid()},
    {name: 'buck', age: 56, _id: uuid()},
    {name: 'bong', age: 19, _id: uuid()}
]

userRouter.route("/")
    .get((req, res) => {
        res.send(users)
    })


    .post((req, res) => {
        const newUser = req.body
        newUser._id = uuid()
        users.push(newUser)
        res.send(`Added new user ${newUser.name}`)
    })

module.exports = userRouter
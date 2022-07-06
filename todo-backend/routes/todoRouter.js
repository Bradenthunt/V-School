const express = require('express')
const todoRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const todos = [
    {
        name: "the name",
        description: "the description here",
        imageUrl: "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/10/30/85f2cb5f-44f8-4f2f-a813-63e657e11acc_5065cac7.jpg?itok=gY-K9HdU&v=1635566576",
        completed: false,
        _id: uuidv4()
    }
]

todoRouter.get('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

todoRouter.delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully removed todo!")
})

todoRouter.put('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const updateObject = req.body
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], updateObject)
    res.send(updatedTodo)
})

todoRouter.route('/')
    .get((req, res) => {
        res.send(todos)
    })

    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuidv4()
        todos.push(newTodo)
        res.send(`New Todo (${newTodo.name}) added!`)
    })

module.exports = todoRouter
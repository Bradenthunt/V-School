const express = require("express")
const issuesRouter = express.Router()
const Issue = require('../models/issue.js')


// Get All issues
issuesRouter.get("/", (req, res, next) => {
  Issue.find((err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})


// Get issues by user id
issuesRouter.get('/user', (req, res, next) => {
  Issue.find({user: req.auth._id}, (err, issues) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})


// Add new issue
issuesRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newIssue = new Issue(req.body)
  newIssue.save((err, savedIssue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedIssue)
  })
})


// Delete issue
issuesRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.todoId, user: req.auth._id },
    (err, deletedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`)
    }
  )
})


// Update issue
issuesRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId , user: req.auth._id},
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})


module.exports = issuesRouter